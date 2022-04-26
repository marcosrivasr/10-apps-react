import "./emojiPicker.css";

export default function EmojiButton({ emoji, onClick }) {
  function handleOnClick() {
    onClick(emoji);
  }

  return (
    <button onClick={handleOnClick} className="emojiButton">
      {emoji.symbol}
    </button>
  );
}
