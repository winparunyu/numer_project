import React, { useState } from 'react';

function lagrangePolynomialInterpolation(x, fx, xi) {
    const n = x.length;
    let result = 0;

    for (let i = 0; i < n; i++) {
        let term = fx[i];
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                term *= (xi - x[j]) / (x[i] - x[j]);
            }
        }
        result += term;
    }

    return result;
}

function InterpolationComponent() {
    const [inputX, setInputX] = useState([0,40000,80000]);
    const [inputFX, setInputFX] = useState([9.81,9.6879, 9.5682]);
    const [inputXI, setInputXI] = useState(42235);
    const [interpolationValue, setInterpolationValue] = useState(0);

    const calculateInterpolation = () => {
        const Value = lagrangePolynomialInterpolation(inputX, inputFX, inputXI);
        setInterpolationValue(Value);
    };

    return (
        <div>
            {/* <h1>Interpolation Value</h1> */}
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginLeft: '10px' }}>
                    <label>x:</label>
                    <input type="text" value={inputX.join(',')} onChange={(e) => setInputX(e.target.value.split(',').map(Number))} />
                </div>
                <div style={{ marginRight: '20px' , marginLeft: '10px'}}>
                    <label>fx:</label>
                    <input type="text" value={inputFX.join(',')} onChange={(e) => setInputFX(e.target.value.split(',').map(Number))} />
                </div>
                <div>
                    <label>xi:</label>
                    <input type="text" value={inputXI} onChange={(e) => setInputXI(Number(e.target.value))} />
                </div>
            </div>
            <button onClick={calculateInterpolation} style={{margin:'5px 20px 0px 20px'}}>Calculate</button>
            <h5 style={{margin:'5px 20px 0px 20px'}}>Interpolation value at x = {inputXI} : fx = {interpolationValue}</h5>
            
        </div>
    );
}

export default InterpolationComponent;
