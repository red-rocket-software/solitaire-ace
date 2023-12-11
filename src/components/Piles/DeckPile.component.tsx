import React, { forwardRef, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardType } from '@/redux/gameBoard/gameBoard.types';
import { RootReducerState } from '@/global';
import SimplePile from './SimplePile.component';
import deckActions from '@/redux/deck/deck.actions';
import gameBoardActions from '@/redux/gameBoard/gameBoard.actions';
import CardFlippable from '../Cards/CardFlippable';
import styles from './Piles.module.css';
import { GameModeTypes } from '@/redux/gameConfig/gameConfig.types';
import { FLIP_ANIMATION_TIME_MS } from '@/utils/contants';

/**
 * Component that consists of a pile (3d) of unflipped cards that can be flipped one by one (with a translation)
 */
function DeckPile() {
  const dispatch = useDispatch();
  // get piles from redux
  const {
    deckPile,
    translationX,
    lastHint,
    startRedoAnimation,
    startRedoResetAnimation,
    startUndoAnimation,
    gameMode,
  } = useSelector(({ Deck, GameBoard, GameConfig }: RootReducerState) => {
    const gameHints = GameBoard.gameHints;
    const lastIndex = gameHints.length - 1;

    return {
      deckPile: Deck.deckPile,
      translationX: Deck.translationX,
      lastHint: lastIndex >= 0 ? gameHints[lastIndex] : undefined,
      startRedoAnimation: Deck.startRedoAnimation,
      startRedoResetAnimation: Deck.startRedoResetAnimation,
      startUndoAnimation: Deck.startUndoAnimation,
      gameMode: GameConfig.gameMode as GameModeTypes,
    };
  });

  // const cardsToRegisterInMove = () => {
  //   //Register three card for turn 3 and one for default mode
  //   return gameMode === 'turnThree' ? -3 : -1;
  // };

  // swap from deck to flipped pile
  const handleDeckSwap = async (cardId: number) => {
    // wait for the css animation to end
    setTimeout(() => {
      dispatch(deckActions.flipDeckPile(gameMode));
      // add one movement of the game

      dispatch(
        gameBoardActions.addGameMove({
          source: 'deckPile',
          target: 'flippedPile',
          cards: [],
        })
      );
    }, FLIP_ANIMATION_TIME_MS);
  };

  const getRedoByGameMode = (index: number) => {
    let itemsToUndo = 1;
    if (gameMode === 'turnThree') {
      itemsToUndo = 3;
    }
    return startRedoAnimation && index === deckPile.length - itemsToUndo;
  };

  // renders cards components that can be flipped (with translation)
  const getCards = () => {
    const increase =
      lastHint &&
      lastHint.source === 'deckPile' &&
      lastHint.target === undefined;
    const cardsArray = deckPile?.map((card: CardType, index: number) => (
      <CardFlippable
        cardId={card.id}
        key={`deck_${card.id}`}
        image={card.image}
        increase={increase}
        removeCard={() => handleDeckSwap(card.id)}
        translationX={translationX}
        translationY={0}
        redoAnimation={getRedoByGameMode(index) || startRedoResetAnimation}
      />
    ));
    return cardsArray;
  };

  // return a pile of cards to be flipped
  return (
    <SimplePile
      pileId='deckPile'
      pileCards={getCards()}
      pileClassName={`${styles.deckPileIndex} ${styles.flippedPile} ${
        startUndoAnimation ? styles.deckPileUndoAnimation : ''
      }`}
      insideClassName={`${styles.columnPile} deckPileMobile`}
    />
  );
}

export default memo(forwardRef(DeckPile));
