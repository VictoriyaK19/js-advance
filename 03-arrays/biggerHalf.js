/* function biggerHalf(array) {

    let num = Number(array[0]);
    let times = Math.round(array.length/2);
    let result = [];
    let position = 0;
    

    for (let y = 0; y < times; y++) {

        for (let i = 0; i < array.length; i++) {

            if (Number(array[i]) > num) {
                num = array[i];
                position = i;                
            }
        }
        array.splice(position, 1);
        result.push(num);
        
        num = Number(array[0]);
        
    }
    
    result.sort((a, b) => a - b);
    return(result);

}*/

function biggerHalf(array) {
    array.sort((a, b) => a - b);
    
    let length = Math.floor(array.length/2);
    return(array.splice(length, array.length));
}

console.log(biggerHalf([4, 7, 2, 5]))
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]))

