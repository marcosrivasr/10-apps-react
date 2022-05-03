import styles from "./itemsContainer.module.css";
export default function ItemsContainer({ children }) {
  return <div className={styles.itemsContainer}>{children}</div>;
}
