const highlyDivisibleTriangularNumber = (num) => {
    let arr = [],
        count = 0,
        triangle = 0;
    for(let i=1;i<=num;i++){
        count = 0;
        triangle = 0;
        for(let k=1;k<=i;k++){
            triangle+=k;
        }
        for(let j=1;j<=triangle;j++){
            if(triangle%j===0){
                count++
            }
        if(count>500) return triangle;
        }
    }
}


console.log(highlyDivisibleTriangularNumber(1000000000)) 



