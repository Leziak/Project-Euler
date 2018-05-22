const pythagoreanTriplet = (num) => {
    for(let i=1;i<1000;i++){
        for(let j=1;j<1000;j++){
            if(isInt(Math.pow(i,2)+Math.pow(j,2)) && (i + j + Math.sqrt(Math.pow(i,2)+Math.pow(j,2))===1000)) {
                return [i,j,Math.sqrt(Math.pow(i,2)+Math.pow(j,2))].reduce((a,b)=>a*b)
            }
        }
    }
    
}

const isInt = n => parseInt(n) === n;

console.log(pythagoreanTriplet(1000))