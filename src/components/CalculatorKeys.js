// import calculate from '../logic/calculate';

const CalculatorKeys = () => {
  const keyHandler = (e) => {
    console.log(e.target.innerText);
  };
  return (
    <div className="keys-container">
      <button onClick={keyHandler} type="button" className="keys left-border">AC</button>
      <button onClick={keyHandler} type="button" className="keys">+/-</button>
      <button onClick={keyHandler} type="button" className="keys">%</button>
      <button onClick={keyHandler} type="button" className="keys orange-keys">÷</button>
      <button onClick={keyHandler} type="button" className="keys">7</button>
      <button onClick={keyHandler} type="button" className="keys">8</button>
      <button onClick={keyHandler} type="button" className="keys">9</button>
      <button onClick={keyHandler} type="button" className="keys orange-keys">X</button>
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
  );
};

export default CalculatorKeys;
