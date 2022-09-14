function last(n, k) {

    const array = [1];
    let num = 0;


    for (let i = 1; i < n; i++) {
        let sum = 0;
        if (i < k) {
            sum = array.reduce((a, b) => a + b);
        } else {
            sum = array.slice(i - k).reduce((a, b) => a + b);
        }
        
        array.push(sum);
       
    }
     return(array);

}

last(6, 3)
last(8, 2)
