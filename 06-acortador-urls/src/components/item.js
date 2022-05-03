import styles from "./item.module.css";

export default function Item({ item }) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemInfoContainer}>
        <span className={styles.itemInfoTag}>URL:</span>
        <span>{item.url}</span>
      </div>
      <div className={styles.itemInfoContainer}>
        <span className={styles.itemInfoTag}>Short URL:</span>
        <span>
          <a href={`http://localhost:3000/u/${item.shortUrl}`} target="_blank">
            http://localhost:3000/u/{item.shortUrl}
          </a>
        </span>
      </div>
      <div className={styles.itemInfoContainer}>
        <span className={styles.itemInfoTag}>Views:</span>
        <span>{item.views.toString()} views</span>
      </div>
    </div>
  );
}
