function days(month, year) {
    let newMonth = month + 1;
    let newYear = year;
    if (newMonth == 13) {
        newMonth == 12;
        newYear ++;
    }
    const date1 = new Date(`${month}, 1, ${year}`)
    const date2 = new Date(`${newMonth}, 1, ${newYear}`)
    return((date2 - date1)/1000/3600/24)
}



console.log(days(1, 2012))
console.log(days(2, 2021))
