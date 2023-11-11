// import React from 'react';
// import math from 'mathjs';


// const data = [
//     { x1: 10, fx: 5 },
//     { x1: 15, fx: 9 },
//     { x1: 20, fx: 15 },
//     { x1: 30, fx: 18 },
//     { x1: 40, fx: 22 },
//     { x1: 50, fx: 30 },
//     { x1: 60, fx: 35 },
//     { x1: 70, fx: 38 },
//     { x1: 80, fx: 43 },
// ];

// const xValues = data.map(item => item.x);
// const yValues = data.map(item => [item.fx]);

// const degree = 2;
// const result = math.polyfit(xValues, yValues, degree);

// const a2 = result[0][0];
// const a1 = result[1][0];
// const a0 = result[2][0];

// function calculateFx(xValue) {
//     return a0 + a1 * xValue + a2 * xValue ** 2;
// }

// const xValue = 65;
// const fx56 = calculateFx(xValue);

// function PolynomialRegressionComponent() {
//     return (
//         <div>
//             <h1>Polynomial Regression</h1>
//             <p>ค่า f(65) คือ {fx56}</p>
//         </div>
//     );
// }

// export default PolynomialRegressionComponent;


