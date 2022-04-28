import { useAppContext } from "./calculatorState";

export default function Screen() {
  const calculator = useAppContext();

  return (
    <div className="calculatorScreen">
      <div>
        Memory: {calculator.memory} Op: {calculator.operation}
      </div>
      <div className="calculatorCurrentValue">{calculator.currentValue}</div>
    </div>
  );
}
