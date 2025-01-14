
import React, { useState } from 'react';
import './Calclt.css';

const Calclt = () => {
  const [display, setDisplay] = useState('');


  const handleClick = (value) => {
    if (value === 'C') {
      setDisplay('');
    } else if (value === '=') {
      try {
        
        setDisplay((prev) => {
          const result = eval(prev);
          return result.toString();
        });
      } catch {
        setDisplay('Error');
      }
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display || '0'}</div>
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+'].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className="button"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calclt;
