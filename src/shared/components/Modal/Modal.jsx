import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.scss';

const modalRootEl = document.getElementById('modal-root');

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    document.body.addEventListener('keydown', handleClose);
    return () => document.body.removeEventListener('keydown', handleClose);
    // eslint-disable-next-line
  }, []);

  const handleClose = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal}>
        <button className={styles.button} type="button" onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>,
    modalRootEl
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
