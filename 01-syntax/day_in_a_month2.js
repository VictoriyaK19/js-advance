function day(month, year) {
    let days;

    if (month == 1 || 3 || 5 || 7 || 9 || 11) {
        days = 31;
    } else {
        days = 30;
        if (year % 4 == 0) {
            days = 28;
        }
    }   
    return days;
}

console.log(day(1, 2012))
console.log(day(2, 2021))
