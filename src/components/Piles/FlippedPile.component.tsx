import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardType } from '@/redux/gameBoard/gameBoard.types';
import DeckDoubleClickHandler from '../CardMoveHandlers/DoubleClickHandlers/DeckDoubleClickHandler';
import DoubleClickHandler from '../CardMoveHandlers/DoubleClickHandlers/DoubleClickHandler.component';
import { RootReducerState } from '@/global';
import SimplePile from './SimplePile.component';
import styles from './Piles.module.css';
import cardStyles from '../Cards/Card.module.css';
import DraggableCard from '../CardMoveHandlers/DragHandlers/DraggableCard.component';
import CardImage from '../Cards/CardImage';
import { GameModeTypes } from '@/redux/gameConfig/gameConfig.types';

/**
 * Component that consists of a pile (3d) of flipped cards that can be dragged
 */
function FlippedPile() {
  const dispatch = useDispatch();
  // get piles from redux
  const {
    deckPile,
    flippedPile,
    lastHint,
    startUndoAnimation,
    translationX,
    gameMode,
    cardDragging,
  } = useSelector(({ Deck, GameBoard, GameConfig }: RootReducerState) => {
    const gameHints = GameBoard.gameHints;
    const lastIndex = gameHints.length - 1;
    return {
      deckPile: Deck.deckPile,
      flippedPile: Deck.flippedPile,
      lastHint: lastIndex >= 0 ? gameHints[lastIndex] : undefined,
      startUndoAnimation: Deck.startUndoAnimation,
      translationX: -Deck.translationX,
      gameMode: GameConfig.gameMode as GameModeTypes,
      cardDragging: Deck.cardDragging || [],
    };
  });

  const animationStyle = {
    transform: `translate(${translationX}px, ${0}px) rotateY(180deg)`,
  };

  const getCards = () => {
    return flippedPile?.map((card: CardType, index: number) => {
      const handler = new DeckDoubleClickHandler(dispatch, card);
      const shake = lastHint && lastHint.source === 'flippedPile';
      const isUndoItemForAnimation = () => {
        if (gameMode === 'turnThree') {
          return index >= flippedPile.length - 3 || deckPile.length === 0;
        } else {
          return index === flippedPile.length - 1 || deckPile.length === 0;
        }
      };

      const runUndoAnimation = startUndoAnimation && isUndoItemForAnimation();
      const classAnimationName = () => {
        if (gameMode === 'default') {
          return;
        }
        if (flippedPile.length < 3) {
          if (index % 3 === 1) {
            return cardStyles.prevInRow;
          }
          if (index % 3 === 2) {
            return cardStyles.prevInRow;
          }
          return;
        }
        if (flippedPile.length - 2 === index) {
          return cardStyles.prevInRow;
        }
        if (flippedPile.length - 1 === index) {
          return cardStyles.lastInRow;
        }
      };
      const hideDeckCard = cardDragging.includes(card);

      return (
        <DoubleClickHandler
          key={card.id}
          handler={handler}
          doubleClick={index === flippedPile.length - 1}
        >
          <DraggableCard
            index={index}
            card={card}
            nCards={1}
            shake={shake}
            className={`${
              runUndoAnimation ? cardStyles.animationStyleUndo : ''
            } ${classAnimationName() || ''}`}
          >
            <div
              className={cardStyles.cardFlipContainer}
              // eslint-disable-next-line react/forbid-dom-props
              style={runUndoAnimation ? animationStyle : {}}
            >
              <CardImage
                image='bg-purple.jpg'
                directory='CardsBackPatterns'
                additionalClassName={
                  hideDeckCard
                    ? ` ${styles.deckCardDragging}`
                    : cardStyles.cardFlipFront
                }
              />
              <CardImage
                image={card.image}
                directory='CardsFaces'
                additionalClassName={
                  hideDeckCard
                    ? ` ${styles.deckCardDragging}`
                    : cardStyles.cardFlipBack
                }
              />
            </div>
          </DraggableCard>
        </DoubleClickHandler>
      );
    });
  };
  // return a pile of flipped cards
  return (
    <SimplePile
      cardsListClassName={
        gameMode === 'turnThree'
          ? cardStyles.threeCardModeContainer
          : cardStyles.signCardModeContainer
      }
      pileId='flippedPile'
      pileCards={getCards()}
      pileClassName={`${styles.deckPile} ${styles.flippedPile}`}
      insideClassName={`${styles.columnPile} deckPileMobile`}
    />
  );
}

export default memo(FlippedPile);
