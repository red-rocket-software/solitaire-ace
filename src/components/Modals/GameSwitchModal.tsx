import BaseModal, { BasicModalProps } from './BaseModal';
import styles from './InfoModal.module.css';

interface GameSwitchModalProps extends BasicModalProps {
  onConfirm: () => void;
}

const GameSwitchModal = (props: GameSwitchModalProps) => {
  return (
    <BaseModal
      showModal={props.showModal}
      onClose={props.onClose}
      className={styles.gameSwitchModalContainer}
    >
      <p className={styles.title}>Switching to a new game?</p>
      <p className={styles.description}>
        Your current game will not be saved. Would you like to start a new game?
      </p>
      <div className={styles.gameSwitchControls}>
        <button
          className={`${styles.actionBtn} ${styles.default}`}
          onClick={props.onClose}
        >
          Cancel
        </button>
        <button
          className={`${styles.actionBtn} ${styles.primary}`}
          onClick={props.onConfirm}
        >
          Leave
        </button>
      </div>
    </BaseModal>
  );
};

export default GameSwitchModal;
