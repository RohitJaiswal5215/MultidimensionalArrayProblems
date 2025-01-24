let arr = [
    [1,2],
    [2,3],
    [4,5]
]

let M =3;
let N = 2;

for (let i = 0; i < M; i++) {
  let row = ''; 
  for (let j = 0; j < N; j++) {
    row += (i + j); 
    if (j < N - 1) {
      row += ' '; 
  }
} 
  console.log(row); 
}


