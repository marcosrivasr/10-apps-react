import { useAppContext } from "./calculatorState";

export default function Button({ type, value }) {
  const calculator = useAppContext();

  function handleOnClick() {
    switch (type) {
      case "number":
        console.log(value);
        calculator.addNumber(parseInt(value));
        break;

      case "operator":
        calculator.addOperation(value);
        break;

      case "action":
        calculator.executeAction(value);
        break;
    }
  }
  return (
    <button className="calculatorButton" onClick={handleOnClick}>
      {value}
    </button>
  );
}
