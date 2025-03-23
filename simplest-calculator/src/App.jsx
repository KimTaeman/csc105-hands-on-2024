import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [result, setResult] = useState(0);
  const [inputValue, setInput] = useState("");

  const handleInputChange = (e) => {
      setInput(e.target.value);
  }

  const add = () => {
    setResult(result + Number(inputValue));
  }

  const subtract = () => {
    setResult(result - Number(inputValue));
  }

  const multiply = () => {
    setResult(result * Number(inputValue));
  }

  const divide = () => {
    setResult(result / Number(inputValue));
  }

  return (
    <div className="AppContainer">
      <h1>Simple Calculator</h1>
      <p>Result: {result}</p>
      <input type="number" value={inputValue} onChange={handleInputChange} placeholder="Enter a number"/>
      <div className="btnsWrapper">
        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
        <button onClick={multiply}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={() => setInput("")}>Reset Input</button>
        <button style={{backgroundColor: "red"}} onClick={() => setResult(0)}>Reset Result</button>
      </div>
    </div>
  )
}

export default App;
