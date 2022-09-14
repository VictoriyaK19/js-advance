function arrays(input) {
    let result = '';
    for (let i = 0; i < input.length; i+=2) {
        result += input[i];
        result += ' ';
    }
    console.log(result);
}

    

arrays(['20', '30', '40', '50', '60'])
arrays(['5', '10'])
