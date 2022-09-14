function solve(matrix) {
    const last = matrix.length;
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < matrix.length; i++) {
        sum1 += matrix[i][i];
        sum2 += matrix[i][last - i - 1];
    
    }
    console.log(`${sum1} ${sum2}`);
}

solve([[20, 40], 
        [10, 60]]);

solve([[3, 5, 17],
        [-1, 7, 14],
        [1, -8, 89]]);





/*
let arr = [[4, 5, 6],
            [6, 5, 4],
            [5, 5, 5]];

for (let row of arr) {
    console.log(row.join(' '));
}
*/

