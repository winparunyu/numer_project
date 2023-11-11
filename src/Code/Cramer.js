    // import React, { useState } from "react";
    // // Function to calculate the determinant of a matrix

    // function determinant(matrix) {
    //     if (matrix.length !== matrix[0].length) {
    //       throw new Error("Matrix is not square");
    //     }
    //     if (matrix.length === 1) {
    //       return matrix[0][0];
    //     }
    //     if (matrix.length === 2) {
    //       return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    //     }
    
    //     let det = 0;
    //     for (let i = 0; i < matrix.length; i++) {
    //       det += matrix[0][i] * cofactor(matrix, 0, i);
    //     }
    //     return det;
    //   }
    
    //   // Function to calculate the cofactor of a matrix
    //   function cofactor(matrix, row, col) {
    //     const subMatrix = matrix
    //       .filter((_, r) => r !== row)
    //       .map((row) => row.filter((_, c) => c !== col));
    //     return determinant(subMatrix) * (row + col) % 2 === 0 ? 1 : -1;
    //   }
    
    //   // Function to solve a system of linear equations using Cramer's Rule
    //   function cramerRule(coeffMatrix, constants) {
    //     const n = coeffMatrix.length;
    //     const result = [];
    
    //     const detA = determinant(coeffMatrix);
    
    //     for (let i = 0; i < n; i++) {
    //       const modifiedMatrix = coeffMatrix.map((row, j) =>
    //         j === i ? constants : row
    //       );
    //       const detModified = determinant(modifiedMatrix);
    //       result.push(detModified / detA);
    //     }
    
    //     return result;
    //   }
    
    //   // Example usage
    //   const coefficients = [
    //     [2, -1, 3],
    //     [1, 2, 1],
    //     [3, 1, 4],
    //   ];
    // export default cramerRule;
    //   const constants = [7, 8, 21];
    
    //   const solution = cramerRule(coefficients, constants);
    //   console.log("Solution:", solution);
