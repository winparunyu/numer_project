import React, { useState } from 'react';

const NewtonDivide = () => {
  const [xInput, setXInput] = useState([5, 6, 9, 11]);
  const [yInput, setYInput] = useState([12, 13, 14, 16]);
  const [cValue, setCValue] = useState('6');
  const [result, setResult] = useState('');

  const handleChangeX = (event) => {
    const xArray = event.target.value.split(',').map((x) => Number(x));
    setXInput(xArray);
  };

  const handleChangeY = (event) => {
    const yArray = event.target.value.split(',').map((y) => Number(y));
    setYInput(yArray);
  };

  const handleChangeC = (event) => {
    setCValue(Number(event.target.value));
  };

  const calculateDivDiff = (divDiff, i=0, j=0) => {
    if (j === 0) {
      divDiff[i][j] = yInput[i];
    } else {
      calculateDivDiff(divDiff, i + 1, j - 1);
      calculateDivDiff(divDiff, i, j - 1);
      divDiff[i][j] =
        (divDiff[i + 1][j - 1] - divDiff[i][j - 1]) / (xInput[i + j] - xInput[i]);
    }
  };

  const calculateNewtonDivide = () => {
    let n = xInput.length;
    let divDiff = new Array(n);
    for (let i = 0; i < n; i++) {
      divDiff[i] = new Array(n - i);
    }
    calculateDivDiff(divDiff, 0, n - 1);

    let result = divDiff[0][0];
    let product = 1;
    for (let i = 1; i < n; i++) {
      product *= cValue - xInput[i - 1];
      result += divDiff[0][i] * product;
    }

    setResult(result);

    console.log('xInput:', xInput);
    console.log('yInput:', yInput);
    console.log('cValue:', cValue);
    console.log('divDiff:', divDiff);
    console.log('result:', result);
  };

  return (
    <div>
      <h1>Newton Divide Calculator</h1>
      <div>
        <label>Enter x </label>
        <input type="text" value={xInput} onChange={handleChangeX} />
      </div>
      <div>
        <label>Enter y </label>
        <input type="text" value={yInput} onChange={handleChangeY} />
      </div>
      <div>
        <label>Enter c </label>
        <input type="number" value={cValue} onChange={handleChangeC} />
      </div>
      <button onClick={calculateNewtonDivide}>Calculate</button>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};



export default NewtonDivide;
