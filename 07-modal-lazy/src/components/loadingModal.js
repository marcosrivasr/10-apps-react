import styles from "./modal.module.scss";

export default function LoadingModal() {
  return (
    <div className={styles.loadingView}>
      <div className={styles.loadingContainer}>Loading...</div>
    </div>
  );
}
