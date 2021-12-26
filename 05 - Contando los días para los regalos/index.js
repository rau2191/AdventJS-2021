function daysToXmas(date){
    const diffTime = new Date('12/25/2021').getTime() - date.getTime();
    const days = Math.ceil(diffTime / (24 * 60 * 60 * 1000));
    return days;
}

const date = new Date('Dec 25, 2021')
console.log(daysToXmas(date)) // 0

const date1 = new Date('Dec 26, 2021')
console.log(daysToXmas(date1)) // -1

const date2 = new Date('Dec 31, 2021')
console.log(daysToXmas(date2)) // -6

const date3 = new Date('Jan 1, 2022 00:00:01')
console.log(daysToXmas(date3)) // -7

const date4 = new Date('Jan 1, 2022 23:59:59')
console.log(daysToXmas(date4)) // -7