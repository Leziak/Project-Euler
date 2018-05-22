//1000 a^^3+b^^3=c^^3+d^^3;

let primes = (num) => {
    let res = [];
    for(let j=2;j<=num;j++){
        if(num%j===0 && j%2!==0 && j%3!==0){
            if(isPrime(j)) res.push(j);
        }
    }
    return res;
}

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num !== 1;
}

console.log(primes(6008514751));