function biggestEl(array){
    array.forEach(printRow);
    function printRow(row) {
        console.log(row);
        
    }


}

console.log(biggestEl([[20, 50, 10],
     [8, 33, 145]]))
console.log(biggestEl([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]))
