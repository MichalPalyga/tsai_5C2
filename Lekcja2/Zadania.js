isPrimeFlag = true
function isPrime(n) {
    if(n<2){
        isPrimeFlag = false
    }
    for (let i = 0; i<n; i++) {
        if (n%i===0) {
            isPrimeFlag = false;
            break
        } 
        isPrimeFlag = true
        
    }
    return isPrimeFlag;
}

console.log(isPrime(9))