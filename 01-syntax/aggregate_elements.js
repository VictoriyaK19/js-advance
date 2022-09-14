function aggregate(numbers) {
    let result1 = 0;
    let result2 = 0;
    let result3 = '';

    for (num of numbers) {
        result1 += num;
        result2 += 1/num;
        result3 += String(num);
    }

    console.log(result1)
    console.log(result2)
    console.log(result3)
    
}

aggregate([1, 2, 3])
