function printElement(array, number) {

    let newArray = new Array(array[0]);

    for (let i = 1 ; i < array.length; i++) {
        
        if (i % number == 0) {
            newArray.push(array[i]);
        }
    }

    console.log(newArray);
}

printElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2);

printElement(['dsa',
    'asd', 
    'test', 
    'tset'], 
    2);

printElement(['1', 
'2',
'3', 
'4', 
'5'], 
6);
