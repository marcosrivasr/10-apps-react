import "./modal.css";

export default function Modal({ children, title }) {
  function handleClose() {
    document.querySelector("#modal").remove();
  }
  return (
    <div className="modalContainer">
      <div className="modalView">
        <div className="modalHeader">
          <div>{title}</div>
          <div>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
        <div className="modalContent">{children}</div>
      </div>
    </div>
  );
}
