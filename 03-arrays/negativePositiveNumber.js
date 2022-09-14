function proccess(input) {

    const result = [];
    
    for (let num of input) {

        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    for (let num of result) {
        console.log(num)
    }


}

proccess([7, -2, 8, 9])
proccess([3, -2, 0, -1])
