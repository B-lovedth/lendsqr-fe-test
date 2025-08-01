'use client';
import styles from './logoutModal.module.scss';

interface LogoutModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const LogoutModal=({ onConfirm, onCancel }: LogoutModalProps)=> {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <p>Are you sure you want to logout?</p>
        <div className={styles.actions}>
          <button className={styles.cancel} onClick={onCancel}>Cancel</button>
          <button className={styles.confirm} onClick={onConfirm}>Logout</button>
        </div>
      </div>
    </div>
  );
}
export default LogoutModal;
