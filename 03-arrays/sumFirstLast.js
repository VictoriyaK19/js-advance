function sumFistLast(input) {

    let firstNum = input[0];
    let lastNum = input[input.length - 1];
    let sum = Number(firstNum) + Number(lastNum);
    return sum;

}

console.log(sumFistLast(['20', '30', '40']))
console.log(sumFistLast(['5', '10']))
