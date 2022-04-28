import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext({
  /* Values */
  memory: null,
  operation: null,
  currentValue: 0,
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
    console.log("handleAddNumber");
    if (isReset) {
      const old = value.toString();
      setCurrentValue(parseInt(old));
      setIsReset(false);
    } else {
      const old = currentValue.toString() + value.toString();
      setCurrentValue(parseInt(old));
    }
  }

  function handleDelKey() {
    console.log("handleDelKey");
    let value = currentValue.toString();
  }

  function handleAddOperation(op) {
    if (currentValue) {
      if (operation) {
        //TODO: SOLVE
        getResult();
      } else {
        setOperation(op);
        setMemory(currentValue);
        setCurrentValue(0);
        setIsReset(true);
      }
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
    }
  }

  function clean() {
    setCurrentValue(0);
    setOperation(null);
    setMemory(0);
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
