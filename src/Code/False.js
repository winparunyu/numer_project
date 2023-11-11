import React, { useState } from "react";

const FalsePosition = () => {
  const [xl, setXl] = useState("");
  const [xr, setXr] = useState("");
  const [func, setFunc] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let iterations = 1;
    let xlNum = parseFloat(xl);
    let xrNum = parseFloat(xr);
    let fl = eval(func.replace(/x/g, xlNum));
    let fr = eval(func.replace(/x/g, xrNum));
    let xm = (xlNum * fr - xrNum * fl) / (fr - fl);
    let fm = eval(func.replace(/x/g, xm));
    let errorPercentage = "";

    let results = [
      {
        iteration: 0,
        xl: xlNum,
        xr: xrNum,
        xm: xm,
        f_xl: fl,
        f_xr: fr,
        f_xm: fm,
        error: errorPercentage,
      },
    ];

    while (iterations <= 20) {
      if (Math.sign(fm) === Math.sign(fl)) {
        xlNum = xm;
        fl = fm;
      } else {
        xrNum = xm;
        fr = fm;
      }

      let prevXm = xm;
      xm = (xlNum * fr - xrNum * fl) / (fr - fl);
      fm = eval(func.replace(/x/g, xm));
      errorPercentage = Math.abs(((xm - prevXm) / xm) * 100).toFixed(4);

      results.push({
        iteration: iterations,
        xl: xlNum,
        xr: xrNum,
        xm: xm,
        f_xl: fl,
        f_xr: fr,
        f_xm: fm,
        error: errorPercentage,
      });

      iterations++;
    }

    setResult(results);
  };

  return (
    
    <div>

      <form onSubmit={handleSubmit}>
        <label>
          Input f(x)
          <input type="text" value={func} onChange={(e) => setFunc(e.target.value)} />
        </label><label>
            Input XL  

          <input type="text" value={xl} onChange={(e) => setXl(e.target.value)} />
        </label>
        <label>
          Input XR
          <input type="text" value={xr} onChange={(e) => setXr(e.target.value)} />
        </label>

        <br />
        <button type="submit">Calculate</button>
      </form>
      {result.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Iteration</th>
              <th>XL</th>
              <th>XR</th>
              <th>XM</th>
              <th>f(XL)</th>
              <th>f(XR)</th>
              <th>f(XM)</th>
              <th>  Error </th>
            </tr>
          </thead>
          <tbody>
            {result.map((r) => (
              <tr key={r.iteration}>
                <td>{r.iteration}</td>
                <td>{r.xl.toFixed(6)}</td>
                <td>{r.xr.toFixed(6)}</td>
                <td>{r.xm.toFixed(6)}</td>
                <td>{r.f_xl.toFixed(6)}</td>
                <td>{r.f_xr.toFixed(6)}</td>
                <td>{r.f_xm.toFixed(6)}</td>
                <td>{r.error}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
};

export default FalsePosition;