function equal(matrix) {

    let count = 0;

    for (let y = 0; y < matrix[0].length; y++) {

        for (let i = 0; i < matrix.length; i++) {
            if (i < matrix.length - 1) {
                if (matrix[i][y] == matrix[i + 1][y]) {
                count += 1;

            }
            }
            if (y < matrix[0].length - 1) {
                if (matrix[i][y] == matrix[i][y + 1]) {
                count += 1;

            }
            }
            
        }

    }
    console.log(count);
}



equal([['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']]);

equal([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]);