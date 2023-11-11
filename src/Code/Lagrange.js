import React, { useState } from "react";
import { evaluate } from "mathjs"; 


<div>
    <form>
        <label>
            input f(x)
        </label>
    </form>
</div>

// function Lagrange  {
//     const [func, setFunc] = useState("");
//     const [x, setX] = useState("");
//     const [result, setResult] = useState([]);

    
// }

// function Lagrange (i,point){
//     var result =1;
//     var x_i = point[i].x;
//     for (var j=point.length; j--;){
//         if(i!=j){
//             result *= x_i - point[j].x;
//         }
//     }
//     return result;
// }

// function horner(array, x_scale, y_scale){
//     function recur(x,i,array){
//         if(i==0){returnx*array[0];}
//         else{ return array[i] + x*recur(x, --i,array);}

//     }
//     return function(x){
//         return recur(x*x_scale, array.length-1,array)*y_scale;
//     };
// }
// return(
//     <div>

//     </div>
// )

