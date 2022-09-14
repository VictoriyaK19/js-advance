function previousDay(year, month, day) {

    const date1 = new Date(year + '-' + month + '-' + day);
    const date2 =new Date(date1 - 1000*3600*24)
    const d = (date2.getFullYear() + '-' + (date2.getMonth()+1) + '-' + date2.getDate())
    console.log(d);
}

previousDay(1955, 12, 10)
