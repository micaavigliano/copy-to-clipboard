import { useRef, useState, useEffect } from "react";
import "./App.css";
import Copy from "./component/Copy";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (inputRef.current) {
      console.log("entra?");
      setInputValue(inputRef.current.value);
    }
  }, [inputRef]);

  const handleChange = () => {
    if (inputRef.current) {
      setInputValue(inputRef.current.value);
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <Copy text={inputValue} />
    </>
  );
}

export default App;
