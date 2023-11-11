import logo from './logo.svg';
import './App.css';
// import bisection from './Code/bisection';
import Bisection from './Code/Bisection';
import False from './Code/False';
import Newton from './Code/Newton';
import Secant from './Code/Secant';
import Lagange_Polynomial from './Code/Lagange_Polynomial';
import Newton_Polynomial from './Code/Newton_Polynomial';
// import Spline_Linear from './Code/Spline_Linear';
// import Least_Squares_Linear from './Code/Least_Squares_Linear';

import Linear from './Code/Linear';
import LinearOld from './Code/LinearOld';
// import Least_Squares_Polynomial from './Code/Least_Squares_Polynomial';
import Lineartest from './Code/Lineartest';

import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div class="style">
       <h2>Bisection</h2>
       <Bisection />
       <h2>False Position</h2>
       <False/>
       <h2>Newton</h2>
       <Newton/>
       <h2>Secant</h2>
       <Secant/>
       <h2>Lagange_Polynomial</h2>
      <Lagange_Polynomial/>

      <h2>Newton_Polynomial</h2>
      <Newton_Polynomial/>

      <h2>lineartest</h2>
      <Lineartest/>

      <h2>Route</h2>
      <Routes>
        <Route path="/LinearOld" element={<LinearOld/>}/>
      </Routes>
      

      {/* <h2>Spline_Linear</h2>
      <Spline_Linear/> */}

      {/* <h2>Least_Squares_Linear</h2>
      <Least_Squares_Linear/> */}

      <h2>Linear</h2>
      <Linear/>

      <h2>LinearOld</h2>
      <LinearOld/>
      {/* 
      <h2>Least_Squares_Polynomial</h2>
      <Least_Squares_Polynomial/> */}


    </div>
    
  );
}

export default App;
