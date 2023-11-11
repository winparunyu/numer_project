import React, { useState } from "react";
import { evaluate } from "mathjs";

const Secant = () => {
  const [func, setFunc] = useState("");
  const [xi, setXi] = useState("");
  const [xiMinusOne, setXiMinusOne] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let iterations = 0;
    let xiNum = parseFloat(xi);
    let xiMinusOneNum = parseFloat(xiMinusOne);
    let fxi = evaluate(func.replace(/x/g, xiNum));
    let fxim1 = evaluate(func.replace(/x/g, xiMinusOneNum));
    let errorPercentage = 100;

    const results = [
      { iteration: iterations, xi: xiNum, fxi: fxi, error: errorPercentage },
      {
        iteration: iterations + 1,
        xi: xiMinusOneNum,
        fxi: fxim1,
        error: errorPercentage,
      },
    ];

    while (iterations < 2 || errorPercentage > 0.000001) {
      const nextXi = xiNum - ((fxi * (xiMinusOneNum - xiNum)) / (fxim1 - fxi));
      const nextFxi = evaluate(func.replace(/x/g, nextXi));
      errorPercentage = Math.abs((nextXi - xiNum) / nextXi) * 100;

      xiMinusOneNum = xiNum;
      xiNum = nextXi;
      fxim1 = fxi;
      fxi = nextFxi;
      iterations++;

      results.push({
        iteration: iterations + 1,
        xi: xiNum,
        fxi: fxi,
        error: errorPercentage.toFixed(6),
      });
    }

    setResult(results);
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <label>
          Input f(x)
          <input type="text" value={func} onChange={(e) => setFunc(e.target.value)} />
        </label>     
        <label>
          Input xi-1
          <input type="text" value={xiMinusOne} onChange={(e) => setXiMinusOne(e.target.value)} />
        </label>
        <label>
          Input xi
          <input type="text" value={xi} onChange={(e) => setXi(e.target.value)} />
        </label>
        <br></br>
        <button type="submit">Calculate</button>
      </form>
      {result.length > 0 && (
        <table border={1}>
            <thead>
                <tr>
                    <th>Iteration</th>
                    <th>xi</th>
                    <th>f(xi)</th>
                    <th>Error</th>
                </tr>
            </thead>
            <tbody>
                {result.map((r) => (
                    <tr key={r.iteration}>
                        <td>{r.iteration}</td>
                        <td>{r.xi.toFixed(4)}</td>
                        <td>{r.fxi.toFixed(4)}</td>
                        <td>{r.error}%</td>
                    </tr>
                ))}
            </tbody>
        </table>
        )}
    </div>
    
    );
};

export default Secant;