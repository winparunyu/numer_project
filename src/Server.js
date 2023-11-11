const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
const cors = require("cors");
app.use(cors());const port = process.env.PORT || 5000;

const LinearAPI = require("./Code/LinearAPI");
app.use("/", LinearAPI);
app.listen(port, () => console.log("Backend server live on " + port));
module.exports = app;

// //Root_of_Equations
// app.use("/", BisectionAPI);
// app.use("/", FalsePositionAPI);
// app.use("/", NewtonRaphsonAPI);
// app.use("/", OnePoint);
// app.use("/", Secant);
// //Linear_Algebraic_Equations
// app.use("/", CramerRuleAPI);
// app.use("/", LUDecomposeAPI);
// //Interpolation
// app.use("/",NewtondivideAPI);
// app.listen(port, () => console.log("Backend server live on " + port));
// module.exports = app;
 