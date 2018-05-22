// let leapYear = (year) => {
//     // if(year%100===0 && year%400!==0) return false
//     // else if (year%4===0) return true

//     return (year%100===0 && year%400!==0) ? false : (year%4===0) ? true : null;
// }

let leapYear = year => year%100===0 && year%400!==0 ? false : (year%4===0) ? true : null;

let arr = [];

for(let i=1600;i<=4000;i+=4){
    arr.push([i,leapYear(i)]);
}

console.log(arr.filter(el=>!el[1]).map(el=>el[0]))



