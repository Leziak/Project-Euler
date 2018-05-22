let palindromeProduct = (num) => {
    let res  = [];
    for(let i=100;i<=num;i++){
        for(let j=100;j<=num;j++){
            if((i*j).toString()===(i*j).toString().split('').reverse().join('')) res.push(i*j);
        }
    }
    // return res.sort((a,b)=>b-a)[0];
    return Math.max(...res);
}

console.log(palindromeProduct(999));