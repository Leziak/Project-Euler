const prime = (num) => {
    let arr= [] ;
    let count = 1;
    while(arr.length<num){
        count++;
        if(isPrime(count)) arr.push(count);
    }
    return arr[num-1];
}

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num !== 1;
}

console.log(prime(10001));
