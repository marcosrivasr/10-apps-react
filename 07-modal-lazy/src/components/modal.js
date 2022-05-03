import { useRef } from "react";
import styles from "./modal.module.scss";

export default function Modal({ children, title, root }) {
  const ref = useRef(null);
  function handleClose() {
    //document.querySelector("#modal").remove();
    ref.current.classList.add(styles.fadeOut);
    ref.current.addEventListener("animationend", (e) => {
      root.unmount();
    });
  }
  return (
    <div className={styles.modalContainer} ref={ref}>
      <div className={styles.modalView}>
        <div className={styles.modalHeader}>
          <div>{title}</div>
          <div>
            <button onClick={handleClose} className={styles.closeButton}>
              X
            </button>
          </div>
        </div>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
}
