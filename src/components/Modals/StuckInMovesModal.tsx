import { useDispatch, useSelector } from 'react-redux';
import BaseModal, { BasicModalProps } from './BaseModal';
import styles from './InfoModal.module.css';
import goalActions from '@/redux/goal/goal.actions';
import columnsActions from '@/redux/columns/columns.actions';
import deckActions from '@/redux/deck/deck.actions';
import gameBoardActions from '@/redux/gameBoard/gameBoard.actions';
import { RootReducerState } from '@/global';

interface StuckInMovesModalProps extends BasicModalProps {}

const StuckInMovesModal = (props: StuckInMovesModalProps) => {
  const dispatch = useDispatch();
  const {
    deckPile,
    flippedPile,
    column1Pile,
    column2Pile,
    column3Pile,
    column4Pile,
    column5Pile,
    column6Pile,
    column7Pile,
    goal1Pile,
    goal2Pile,
    goal3Pile,
    goal4Pile,
  } = useSelector(({ GameBoard }: RootReducerState) => ({
    deckPile: GameBoard.deckPile,
    flippedPile: GameBoard.flippedPile,
    column1Pile: GameBoard.column1Pile,
    column2Pile: GameBoard.column2Pile,
    column3Pile: GameBoard.column3Pile,
    column4Pile: GameBoard.column4Pile,
    column5Pile: GameBoard.column5Pile,
    column6Pile: GameBoard.column6Pile,
    column7Pile: GameBoard.column7Pile,
    goal1Pile: GameBoard.goal1Pile,
    goal2Pile: GameBoard.goal2Pile,
    goal3Pile: GameBoard.goal3Pile,
    goal4Pile: GameBoard.goal4Pile,
  }));

  const onNewGame = () => {
    dispatch(gameBoardActions.createGame());
    props.onClose();
  };

  // distribute the decks created to the right redux
  const restartGame = () => {
    // set the initial deck
    dispatch(deckActions.setInitialDeck(deckPile, flippedPile));
    // set the initial columns
    dispatch(
      columnsActions.setInitialColumns({
        column1Pile,
        column2Pile,
        column3Pile,
        column4Pile,
        column5Pile,
        column6Pile,
        column7Pile,
      })
    );
    // set the initial deck
    dispatch(
      goalActions.setInitialGoals({
        goal1Pile,
        goal2Pile,
        goal3Pile,
        goal4Pile,
      })
    );
    // toggle the timer flag
    dispatch(gameBoardActions.toggleGameFlag());

    dispatch(gameBoardActions.showingConfirm(false));
    props.onClose();
  };
  
  return (
    <BaseModal
      showModal={props.showModal}
      onClose={props.onClose}
      className={styles.gameSwitchModalContainer}
    >
      <p className={`${styles.title} ${styles.inlineMobile}`}>
        <span>Are you stuck?</span>
        <span> Want to start over?</span>
      </p>
      <p className={styles.description}>
        We couldn’t find any hints. Would you like to start a new game, or try
        to solve it yourself?
      </p>
      <div className={styles.stuckInMovesControls}>
        <button
          className={`${styles.actionBtn} ${styles.default} ${styles.desktopOnly}`}
          onClick={props.onClose}
        >
          Cancel
        </button>
        <div className={styles.stuckInMovesSubControls}>
          <button
            className={`${styles.actionBtn} ${styles.primary}`}
            onClick={onNewGame}
          >
            New game
          </button>
          <button
            className={`${styles.actionBtn} ${styles.primary}`}
            onClick={restartGame}
          >
            Restart
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

export default StuckInMovesModal;
