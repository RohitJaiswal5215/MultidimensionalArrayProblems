function printZigZag(matrix) {
    let N = matrix.length 
    let M = matrix[0].length 
  
    for (let i = 0; i < N; i++) {
      if (i % 2 === 0) {        
        for (let j = M - 1; j >= 0; j--) {
          console.log(matrix[i][j] + " ")
        }
      } 
      else {        
        for (let j = 0; j < M; j++) {
         console.log(matrix[i][j] + " ")
        }
      }
    }
    console.log(); 
  }  
  
  let matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 1],
    [6, 4, 5, 2, 3],
    [7, 8, 9, 1, 2],
  ]

  printZigZag(matrix)