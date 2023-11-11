// import React, { useState } from 'react';

// // ข้อมูลตัวอย่าง (x1, f(x))
// const data = [
//   { x1: 10, fx: 5 },
//   { x1: 15, fx: 9 },
//   { x1: 20, fx: 15 },
//   { x1: 30, fx: 18 },
//   { x1: 40, fx: 22 },
//   { x1: 50, fx: 30 },
//   { x1: 60, fx: 35 },
//   { x1: 70, fx: 38 },
//   { x1: 80, fx: 43 },
// ];

// function LinearRegressionComponent() {
//   const [inputX1, setInputX1] = useState(65);
//   const [result, setResult] = useState(null);

//   // หาค่าเฉลี่ยของ x1 และ fx
//   const x1Mean = data.reduce((acc, val) => acc + val.x1, 0) / data.length;
//   const fxMean = data.reduce((acc, val) => acc + val.fx, 0) / data.length;

//   // หาค่า a1  และ a0 
//   let numerator = 0;
//   let denominator = 0;

//   for (let i = 0; i < data.length; i++) {
//     numerator += (data[i].x1 - x1Mean) * (data[i].fx - fxMean);
//     denominator += (data[i].x1 - x1Mean) ** 2;
//   }

//   const a1 = numerator / denominator;
//   const a0 = fxMean - a1 * x1Mean;

//   // ฟังก์ชันสำหรับคำนวณ f(x) จาก x1
//   function calculateFx(x1Value) {
//     return a0 + a1 * x1Value;
//   }

//   const calculateResult = () => {
//     const x1Value = parseFloat(inputX1);
//     const fxValue = calculateFx(x1Value);
//     setResult(fxValue);
//   };

//   return (
//     <div>

//       <div style={{ marginLeft: '10px' }}>
//         <label>x:</label>
//         <input type="number" value={inputX1} onChange={(e) => setInputX1(e.target.value)} />
//       </div>
//       <button onClick={calculateResult} style={{margin:'5px 20px 0px 20px'}}>Calculate</button>
//       {result !== null && (
//         // <p>ค่า f({inputX1}) คือ {result}</p>
//         <h5 style={{margin:'5px 20px 20px 20px'}}>ค่า f({inputX1}) คือ {result}</h5>
//       )}
//     </div>
//   );
// }

// export default LinearRegressionComponent;

// import React, { useState } from 'react';

// // ข้อมูลตัวอย่าง (x1, f(x))
// const data = [
//   { x1: 10, fx: 5 },
//   { x1: 15, fx: 9 },
//   { x1: 20, fx: 15 },
//   { x1: 30, fx: 18 },
//   { x1: 40, fx: 22 },
//   { x1: 50, fx: 30 },
//   { x1: 60, fx: 35 },
//   { x1: 70, fx: 38 },
//   { x1: 80, fx: 43 },
// ];

// function LinearRegressionComponent() {
//   // สร้าง state สำหรับเก็บค่า x1 และ fx
//   const [inputData, setInputData] = useState(data);

//   const [results, setResults] = useState(Array(9).fill(null));

//   // หาค่าเฉลี่ยของ x1 และ fx
//   const x1Mean = data.reduce((acc, val) => acc + val.x1, 0) / data.length;
//   const fxMean = data.reduce((acc, val) => acc + val.fx, 0) / data.length;

//   // หาค่า a1 และ a0
//   let numerator = 0;
//   let denominator = 0;

//   for (let i = 0; i < data.length; i++) {
//     numerator += (data[i].x1 - x1Mean) * (data[i].fx - fxMean);
//     denominator += (data[i].x1 - x1Mean) ** 2;
//   }

//   const a1 = numerator / denominator;
//   const a0 = fxMean - a1 * x1Mean;

//   // ฟังก์ชันสำหรับคำนวณ f(x) จาก x1 และ fx
//   function calculateFx(x1Value) {
//     return a0 + a1 * x1Value;
//   }

//   const calculateResults = () => {
//     const newResults = inputData.map(({x1}) => calculateFx(x1));
//     setResults(newResults);
//   };  

//   return (
//     <div>
//       {inputData.map((data, index) => (
//         <div key={index} style={{ marginLeft: '10px' }}>
//           <label>x1:</label>
//           <input
//             type="number"
//             value={data.x1}
//             onChange={(e) => {
//               const newX1Value = parseFloat(e.target.value);
//               setInputData((prevData) =>
//                 prevData.map((item, i) => (i === index ? { ...item, x1: newX1Value } : item))
//               );
//             }}
//           />
//           <label>fx:</label>
//           <input
//             type="number"
//             value={data.fx}
//             onChange={(e) => {
//               const newFxValue = parseFloat(e.target.value);
//               setInputData((prevData) =>
//                 prevData.map((item, i) => (i === index ? { ...item, fx: newFxValue } : item))
//               );
//             }}
//           />
//         </div>
//       ))}
//       <button onClick={calculateResults} style={{ margin: '5px 20px 0px 20px' }}>
//         Calculate
//       </button>
//       {results.every((result) => result !== null) && (
//         <div style={{ margin: '5px 20px 20px 20px' }}>
//           {results.map((result, index) => (
//             <h5 key={index}>ค่า f({inputData[index].x1}, {inputData[index].fx}) คือ {result}</h5>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default LinearRegressionComponent;

// import React, { useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import Chart from 'chart.js/auto';


// const LinearRegressionComponent = () => {
//   const [inputData, setInputData] = useState([]);
//   const [results, setResults] = useState(Array(0).fill(null));
//   const [n, setN] = useState(0);
//   const [formular_graph, setformular_graph] = React.useState([]);
//   const [datax, setdatax] = React.useState([]);
//   const [dataxy, setdataxy] = React.useState([]);
//     // const [X, setX] = React.useState()
//     // const [Y, setY] = React.useState()
//   const [XY, setXY] = React.useState([])

//   const x1Mean = inputData.reduce((acc, val) => acc + val.x1, 0) / inputData.length;
//   const fxMean = inputData.reduce((acc, val) => acc + val.fx, 0) / inputData.length;

//   let numerator = 0;
//   let denominator = 0;

//   for (let i = 0; i < inputData.length; i++) {
//     numerator += (inputData[i].x1 - x1Mean) * (inputData[i].fx - fxMean);
//     denominator += (inputData[i].x1 - x1Mean) ** 2;
//   }

//   const a1 = numerator / denominator;
//   const a0 = fxMean - a1 * x1Mean;

//   function calculateFx(x1Value) {
//     return a0 + a1 * x1Value;
//   }

//   const calculateResults = () => {
//     const newResults = inputData.map(({ x1 }) => calculateFx(x1));
//     setResults(newResults);

//     const graphData = inputData.map(({ x1 }, index) => ({ x: x1, y: newResults[index] }));
//     setformular_graph(graphData);

  
//   };

  
//   //   const calculateResult = () => {
// //     const x1Value = parseFloat(inputX1);
// //     const fxValue = calculateFx(x1Value);
// //     setResult(fxValue);
// //   };

//   const handleNChange = (e) => {
//     const newN = parseInt(e.target.value, 10);
//     setN(newN);
//     setInputData(Array.from({ length: newN }, () => ({ x1: 0, fx: 0 })));
//     setResults(Array(newN).fill(null));
//   };

//   const label = ["data","fomular","XY"]
//     const data = {
//         labels: datax,
//         datasets: [
//             {
//                 label: label[0],
//                 data: dataxy,
//                 type: 'scatter',
//                 fill: false,
//                 backgroundColor: "rgba(75,192,192,1)",
//                 borderColor: "rgba(75,192,192,1)"
//             },
//               {
//                 label: label[1],
//                 data: formular_graph,
//                 fill: false,
//                 backgroundColor: "rgba(255,0,0,1)",
//                 borderColor: "rgba(255,0,0,1)"
//              },
//               {
//               label: label[2],
//               type: 'scatter',
//               data:XY,
//               fill: false,
//               backgroundColor: "black",
//               borderColor: "black"
//               }

//         ],
//         options: {
//           responsive: true,
//           title: {
//             display: true,
//             text: 'Mode: index, intersect = false'
//           },
//           tooltips: {
//             mode: 'index',
//           }
//         }
//     };

//     const config = {
//       type: 'line',
//       data: data,
//     };

    

  
  

//   return (
//     <div>
//       <label>Enter the value of n:</label>
//       <input type="text" value={n} onChange={handleNChange} style={{marginBottom:'20px'}}/>
//       {inputData.map((data, index) => (
//         <div key={index} style={{ marginLeft: '10px' }}>
//           <label>x1:</label>
//           <input
//             type="text"
//             value={data.x1}
//             onChange={(e) => {
//               const newX1Value = parseFloat(e.target.value);
//               setInputData((prevData) =>
//                 prevData.map((item, i) => (i === index ? { ...item, x1: newX1Value } : item))
//               );
//             }}
//           />
//           <label>fx:</label>
//           <input type="text" value={data.fx} onChange={(e) => {
//               const newFxValue = parseFloat(e.target.value);
//               setInputData((prevData) =>
//                 prevData.map((item, i) => (i === index ? { ...item, fx: newFxValue } : item))
//               );
//             }}
//           />
//         </div>
//       ))}
//       <button onClick={calculateResults} style={{ margin: '5px 20px 20px 20px' }}>
//         Calculate
//       </button>
//       {results.every((result) => result !== null) && (
//         <div style={{ margin: '5px 20px 20px 20px' }}>
//           {results.map((result, index) => (
//             <h5 key={index}>
//               ค่า f({inputData[index].x1}) คือ {result}
//             </h5>
//           ))}
          
          
//         </div>
//       )}

//       <div><Line data={data} /></div>
      
//        {/* <div><Line data={data} options={options} /></div> */}

//     </div>
    
//   );
// };

// export default LinearRegressionComponent;



import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const LinearRegressionComponent = () => {
  const [inputData, setInputData] = useState([]);
  const [results, setResults] = useState(Array(0).fill(null));
  const [n, setN] = useState(0);

  const x1Mean = inputData.reduce((acc, val) => acc + val.x1, 0) / inputData.length;
  const fxMean = inputData.reduce((acc, val) => acc + val.fx, 0) / inputData.length;

  let numerator = 0;
  let denominator = 0;

  for (let i = 0; i < inputData.length; i++) {
    numerator += (inputData[i].x1 - x1Mean) * (inputData[i].fx - fxMean);
    denominator += (inputData[i].x1 - x1Mean) ** 2;
  }

  const a1 = numerator / denominator;
  const a0 = fxMean - a1 * x1Mean;

  function calculateFx(x1Value) {
    return a0 + a1 * x1Value;
  }

  const calculateResults = () => {
    const newResults = inputData.map(({ x1 }) => calculateFx(x1));
    setResults(newResults);
  };

  const handleNChange = (e) => {
    const newN = parseInt(e.target.value, 10);
    setN(newN);
    setInputData(Array.from({ length: newN }, () => ({ x1: 0, fx: 0 })));
    setResults(Array(newN).fill(null));
  };

  const data = {
    labels: inputData.map(({ x1 }) => x1),
    datasets: [
      {
        label: 'result',
        data: inputData.map(({ x1 }) => a0 + a1 * x1),
        backgroundColor:'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'fx',
        data: inputData.map(({fx}) => fx),
        backgroundColor:'rgba(255,0,0,1)',
        borderColor: 'rgba(255,0,0,1)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <label>Enter the value of n:</label>
      <input type="text" value={n} onChange={handleNChange} style={{ marginBottom: '20px' }} />
      {inputData.map((data, index) => (
        <div key={index} style={{ marginLeft: '10px' }}>
          <label>x1:</label>
          <input
            type="text"
            value={data.x1}
            onChange={(e) => {
              const newX1Value = parseFloat(e.target.value);
              setInputData((prevData) =>
                prevData.map((item, i) => (i === index ? { ...item, x1: newX1Value } : item))
              );
            }}
          />
          <label>fx:</label>
          <input
            type="text"
            value={data.fx}
            onChange={(e) => {
              const newFxValue = parseFloat(e.target.value);
              setInputData((prevData) =>
                prevData.map((item, i) => (i === index ? { ...item, fx: newFxValue } : item))
              );
            }}
          />
        </div>
      ))}
      <button onClick={calculateResults} style={{ margin: '5px 20px 20px 20px' }}>
        Calculate
      </button>
      {results.every((result) => result !== null) && (
        <div style={{ margin: '5px 20px 20px 20px' }}>
          {results.map((result, index) => (
            <h5 key={index}>
              ค่า f({inputData[index].x1}) คือ {result}
            </h5>
          ))}
        </div>
      )}

      <div>
        <Line data={data} />
      </div>
    </div>
  );
};

export default LinearRegressionComponent;

