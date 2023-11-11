import React, { useState } from "react";

function NewtonRaphson() {
  const [func, setFunc] = useState("");
  const [x, setX] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Define the function to evaluate
    const f = (x) => eval(func);

    // Define the derivative of the function
    const df = (x) => {
      const h = 0.0001;
      return (f(x + h) - f(x - h)) / (2 * h);
    };

    // Perform iterations
    let xi = parseFloat(x);
    let iterations = 0;
    let error = 100;
    let tempResult = [];

    while (iterations < 20 && error > 0.000001) {
      const xiPlus1 = xi - f(xi) / df(xi);
      error = Math.abs((xiPlus1 - xi) / xiPlus1);
      tempResult.push({
        iteration: iterations + 1,
        xi: xi,
        "f(xi)": f(xi),
        "f'(xi)": df(xi),
        "xi+1": xiPlus1,
        error: error.toFixed(6),
      });
      xi = xiPlus1;
      iterations++;
    }

    setResult(tempResult);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
            Input f(x)
          <input type="text" value={func} onChange={(e) => setFunc(e.target.value)} />
        </label>
        <label>
          Starting value of x
          <input type="text" value={x} onChange={(e) => setX(e.target.value)} />
        </label>
        <br></br>
        <button type="submit">Calculate</button>
      </form>
      {result.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Iteration</th>
              <th>xi</th>
              <th>f(xi)</th>
              <th>f'(xi)</th>
              <th>xi+1</th>
              <th>Error</th>
            </tr>
          </thead>
          <tbody>
            {result.map((r) => (
              <tr key={r.iteration}>
                <td>{r.iteration}</td>
                <td>{r.xi.toFixed(4)}</td>
                <td>{r["f(xi)"].toFixed(4)}</td>
                <td>{r["f'(xi)"].toFixed(4)}</td>
                <td>{r["xi+1"].toFixed(4)}</td>
                <td>{r.error}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default NewtonRaphson;