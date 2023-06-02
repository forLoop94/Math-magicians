import React, { useState } from 'react';
import calculate from '../logic/calculate';

const CalculatorKeys = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const keyHandler = (e) => {
    const res = calculate({ total, next, operation }, e.target.innerText);
    setTotal(res.total);
    setNext(res.next);
    setOperation(res.operation);
  };
  return (
    <>
      <div className="screen">
        {total}
        {operation}
        {next}
      </div>
      <div className="keys-container">
        <button onClick={keyHandler} type="button" className="keys left-border">AC</button>
        <button onClick={keyHandler} type="button" className="keys">+/-</button>
        <button onClick={keyHandler} type="button" className="keys">%</button>
        <button onClick={keyHandler} type="button" className="keys orange-keys">÷</button>
        <button onClick={keyHandler} type="button" className="keys">7</button>
        <button onClick={keyHandler} type="button" className="keys">8</button>
        <button onClick={keyHandler} type="button" className="keys">9</button>
        <button onClick={keyHandler} type="button" className="keys orange-keys">x</button>
        <button onClick={keyHandler} type="button" className="keys">4</button>
        <button onClick={keyHandler} type="button" className="keys">5</button>
        <button onClick={keyHandler} type="button" className="keys">6</button>
        <button onClick={keyHandler} type="button" className="keys orange-keys">-</button>
        <button onClick={keyHandler} type="button" className="keys">1</button>
        <button onClick={keyHandler} type="button" className="keys">2</button>
        <button onClick={keyHandler} type="button" className="keys">3</button>
        <button onClick={keyHandler} type="button" className="keys orange-keys">+</button>
        <button onClick={keyHandler} type="button" className="keys span-2">0</button>
        <button onClick={keyHandler} type="button" className="keys">.</button>
        <button onClick={keyHandler} type="button" className="keys orange-keys">=</button>
      </div>
    </>
  );
};

export default CalculatorKeys;
