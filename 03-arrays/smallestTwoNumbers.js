function smallest(array) {

    let smallest = array[0];
    let position = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] < smallest) {
            smallest = array[i];
            position = i;
        }
    }
    let array2 = array.splice(position, 1);
    let num1 = smallest;
    smallest = array[0];

    for (let i = 0; i < array.length; i++) {

        if (array[i] < smallest) {
            smallest = array[i];
            position = i;
        }
    }
    
    let num2 = smallest;
    console.log(num1, num2);
    
}

smallest([30, 15, 50, 5])
smallest([3, 0, 10, 4, 7, 3])
