import { useState } from "react";
import "./App.css";
import { useEffect } from "react";


function App() {
  const [display, setDisplay] = useState(0)
  const [calculation, setCalculation] = useState("");


  function appendValue(e){
    let newValue = e.target.value;
    let newCalculation = calculation+ newValue;
    setCalculation(newCalculation)
    setDisplay(newCalculation)
  }

  function evaluate(e){
    let answer = eval(calculation)
    setDisplay(String(answer))
    setCalculation(answer)
  }

  function del(e){
    let displayLength = display.length
    let newValue = display.slice(0,displayLength-1);
    if (!newValue){
      setDisplay(0);
      setCalculation("")
      return
    }
    setDisplay(newValue);
    setCalculation(newValue)
  }

  function clear(e){
    setDisplay(0);
    setCalculation("");
  }

  return (
    <>
      <div className="mainDivContainer min-h-fit w-1/2 m-auto mt-24 text-center bg-yellow-100 rounded-3xl p-4">
        MyCalculator
        <div className="calculator Container my-5">
          <div className="displaySection overflow-x-scroll my-2 p-4 bg-[#0F172A] text-white rounded-xl w-1/2 m-auto">{display}</div>
          <div className="buttonContainer w-fit grid grid-cols-4 grid-rows-4 gap-4 m-auto ">
            <button className="w-12 h-12 rounded-xl bg-white" value="1" onClick={appendValue}>1</button>
            <button className="w-12 h-12 rounded-xl bg-white" value="2" onClick={appendValue}>2</button>
            <button className="w-12 h-12 rounded-xl bg-white" value="3" onClick={appendValue}>3</button>
            <button className="w-12 h-12 rounded-xl bg-white" value="+" onClick={appendValue}>+</button>
            <button className="w-12 h-12 rounded-xl bg-white" value="4" onClick={appendValue}>4</button>
            <button className="w-12 h-12 rounded-xl bg-white" value="5" onClick={appendValue}>5</button>
            <button className="w-12 h-12 rounded-xl bg-white" value="6" onClick={appendValue}>6</button>
            <button className="w-12 h-12 rounded-xl bg-white" value="-" onClick={appendValue}>-</button>
            <button className="w-12 h-12 rounded-xl bg-white" value="7" onClick={appendValue}>7</button>
            <button className="w-12 h-12 rounded-xl bg-white" value="8" onClick={appendValue}>8</button>
            <button className="w-12 h-12 rounded-xl bg-white" value="9" onClick={appendValue}>9</button>
            <button className="w-12 h-12 rounded-xl bg-white" value="*" onClick={appendValue}>x</button>
            <button className="w-12 h-12 rounded-xl bg-white" value="0" onClick={appendValue}>0</button>
            <button className="w-12 h-12 rounded-xl bg-white" value="." onClick={appendValue}>.</button>
            <button className="w-12 h-12 rounded-xl bg-white" value="=" onClick={evaluate}>=</button>
            <button className="w-12 h-12 rounded-xl bg-white" value="/" onClick={appendValue}>/</button>
            <button className="w-12 h-12 rounded-xl bg-white" onClick={del}>del</button>
            <button className="w-12 h-12 rounded-xl bg-white" onClick={clear}>Clear all</button>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
