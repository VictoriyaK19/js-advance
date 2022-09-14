function stars(input) {

    if (typeof input != 'number') {
        input = 5;
    }

    let result = '';

    for (let i = 0; i < input; i++) {
        result += '* '; 
    }
    for (let i = 0; i < input; i++) {
        console.log(result);
    }

}   

stars(1)
stars(2)
stars(5)
stars(' ')
