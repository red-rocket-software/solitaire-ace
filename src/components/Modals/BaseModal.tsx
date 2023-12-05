import { useEffect, useState } from 'react';
import Modal, { Styles } from 'react-modal';
import styles from './BaseModal.module.css';
import CloseButton from '../Buttons/CloseButton';

export interface BasicModalProps extends React.PropsWithChildren {
  showModal: boolean;
  onClose: () => void;
}

interface BasicModalStylesProps {
  className?: string;
  childrenClassName?: string;
}

const BaseModal = (props: BasicModalProps & BasicModalStylesProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(props.showModal);

  useEffect(() => {
    setIsOpen(props.showModal);
  }, [props.showModal]);

  const hideModal = () => {
    setIsOpen(false);
    props.onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      onRequestClose={hideModal}
      className={`${styles.baseModal} ${props.className || ''}`}
    >
      <div className={styles.closeBtn}>
        <CloseButton onClick={props.onClose} />
      </div>
      <div
        className={`${styles.baseModalChildren} ${
          props.childrenClassName || ''
        }`}
      >
        {props.children}
      </div>
    </Modal>
  );
};

const customStyles: Styles = {
  overlay: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.4)',
    zIndex: 9999,
  },
  content: {
    inset: 0,
    outline: 'none',
  },
};

export default BaseModal;
