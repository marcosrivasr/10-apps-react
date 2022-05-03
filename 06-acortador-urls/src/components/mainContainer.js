import styles from "./mainContainer.module.css";
export default function MainContainer({ children }) {
  return <div className={styles.mainContainer}>{children}</div>;
}
