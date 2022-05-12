import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext({
  /* Values */
  memory: null,
  operation: null,
  currentValue: 0,
  isDecimal: false,
  history: [],
  /* Methods */
  addNumber: (value) => {},
  addOperation: (operation) => {},
  getResult: () => {},
  addToHistory: (calculus) => {},
});

export default function CalculatorState({ children }) {
  const [memory, setMemory] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [operation, setOperation] = useState(null);
  const [history, setHistory] = useState([]);
  const [isReset, setIsReset] = useState(true);
  const [isDecimal, setIsDecimal] = useState(false);
  const [decimalValue, setDecimalValue] = useState(0);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    function handleKeydown(e) {
      e.preventDefault();
      console.log(e.key);
      if (e.key === "Backspace") {
        handleDelKey();
      }
    }
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  function handleAddNumber(value) {
    debugger;
    if (isReset) {
      if (value === ".") {
        setIsDecimal(true);
      } else {
        const dot = isDecimal ? "." : "";
        const old = currentValue.toString() + dot + value.toString();

        setCurrentValue(parseFloat(old));
        setIsReset(false);
        setIsDecimal(false);
      }
    } else {
      if (value === ".") {
        setIsDecimal(true);
      } else {
        const dot = isDecimal ? "." : "";
        const old = currentValue.toString() + dot + value.toString();
        setIsDecimal(false);
        setCurrentValue(parseFloat(old));
      }
    }
  }

  function handleDelKey() {
    console.log("handleDelKey");
    setCurrentValue(parseInt(currentValue / 10));
  }

  function handleAddOperation(op) {
    if (currentValue) {
      if (operation) {
        //TODO: SOLVE
        getResult();
        setIsReset(true);
        setOperation(op);
        setIsDecimal(false);
      } else {
        setOperation(op);
        setMemory(currentValue);
        setCurrentValue(0);
        setIsReset(true);
        setIsDecimal(false);
      }
    }
  }

  function addDecimal() {
    debugger;
    if (currentValue.toString().indexOf(".") > 0) {
    } else {
      handleAddNumber(".");
    }
  }

  function handleAction(action) {
    switch (action) {
      case "=":
        getResult();
        break;
      case "AC":
        clean();
        break;
      case "+/-":
        changeSign();
        break;
      case "<=":
        handleDelKey();
        break;
      case ".":
        addDecimal();
        break;
      default:
    }
  }

  function getResult() {
    debugger;
    let result = 0;
    if (currentValue && operation && memory) {
      switch (operation) {
        case "+":
          result = parseFloat(currentValue) + parseFloat(memory);
          break;
        case "-":
          result = parseFloat(memory) - parseFloat(currentValue);
          break;
        case "x":
          result = parseFloat(currentValue) * parseFloat(memory);
          break;
        case "/":
          result = parseFloat(memory) + parseFloat(currentValue);
          break;
      }

      setCurrentValue(result);
      setOperation(null);
      setMemory(result);
      setIsReset(true);
      setIsDecimal(false);
    }
  }

  function clean() {
    setCurrentValue(0);
    setOperation(null);
    setMemory(0);
    setIsDecimal(false);
  }

  function changeSign() {
    const old = currentValue * -1;
    setCurrentValue(old);
  }

  return (
    <AppContext.Provider
      value={{
        memory,
        operation,
        currentValue,
        history: [],
        isDecimal,
        addNumber: handleAddNumber,
        addOperation: handleAddOperation,
        executeAction: handleAction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
