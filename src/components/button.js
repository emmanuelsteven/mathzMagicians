import React, { useState, useEffect } from 'react';
import calculate from '../logic/calculate';

const Buttons = () => {
  const [calc, setCalc] = useState({
    total: 0,
    next: '',
    operation: '',
  });

  useEffect(() => {
    const { total, next, operation } = calc;
    const output = document.querySelector('.result');
    if (next !== null) {
      output.value = next;
    } else if (operation !== null) {
      output.value = operation;
    } else if (total !== null) {
      output.value = total;
    } else {
      output.value = '0';
    }
  }, [calc]);

  const handleClick = (event) => {
    if (event.target.textContent === 'AC') {
      const output = document.querySelector('.result');
      output.value = 0;
    }
    const result = calculate(calc, event.target.textContent);
    setCalc({ ...calc, ...result });
  };

  return (
    <div className="calApp">
      <div className="renderResult">
        <input className="result" placeholder="0" dir="rtl" />
      </div>
      <div className="calInputs">
        <div className="inputs">
          <button type="button" onClick={handleClick}>AC</button>
          <button type="button" onClick={handleClick}>+/-</button>
          <button type="button" onClick={handleClick}>%</button>
          <button type="button" className="mathSigns" onClick={handleClick}>÷</button>
        </div>
        <div className="inputs">
          <button type="button" onClick={handleClick}>7</button>
          <button type="button" onClick={handleClick}>8</button>
          <button type="button" onClick={handleClick}>9</button>
          <button type="button" className="mathSigns" onClick={handleClick}>x</button>
        </div>
        <div className="inputs">
          <button type="button" onClick={handleClick}>4</button>
          <button type="button" onClick={handleClick}>5</button>
          <button type="button" onClick={handleClick}>6</button>
          <button type="button" className="mathSigns" onClick={handleClick}>-</button>
        </div>
        <div className="inputs">
          <button type="button" onClick={handleClick}>1</button>
          <button type="button" onClick={handleClick}>2</button>
          <button type="button" onClick={handleClick}>3</button>
          <button type="button" className="mathSigns" onClick={handleClick}>+</button>
        </div>
        <div className="inputs secondgrid">
          <button type="button" onClick={handleClick}>0</button>
          <button type="button" onClick={handleClick}>.</button>
          <button type="button" className="mathSigns" onClick={handleClick}>=</button>
        </div>
      </div>
    </div>
  );
};
export default Buttons;
