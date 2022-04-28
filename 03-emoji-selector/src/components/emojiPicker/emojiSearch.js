import styles from "./emojiPicker.module.scss";
export default function EmojiSearch({ onSearch }) {
  return <input className={styles.search} onChange={onSearch} />;
}
