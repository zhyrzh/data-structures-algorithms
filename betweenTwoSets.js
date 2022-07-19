function getGCD(a, b){
    // Using Euclidean Algorithm
    if(b === 0){
        return a
    }    
    return getGCD(b, a % b)
}

function getLCM(a, b){
    return Math.abs(a*b/getGCD(a, b))
}

function getTotalX(a, b) {
    // Write your code here
    let numResult = 0;
    
    let gcd = b[0]
    for(let i=1; i <= b.length - 1; i++){
        if(a[i] !== undefined){
            gcd = getGCD(gcd, b[i])
        }
    }
    
    let lcm = a[0]
    for(let i = 1; i <= a.length - 1; i++){
        if(a[i] !== undefined){
            lcm = getLCM(lcm, a[i])
        }
    }
    
    let multiple = 0;
    while(multiple <= gcd){
        console.log(multiple, "multiple")
        multiple += lcm
        if(gcd % multiple === 0){
            numResult++
        }
    }
    
    return numResult
}

// const res1 = getTotalX([2], [2, 30, 12])
// const res2 = getTotalX([3,9,6], [36, 72])
const gcdTest = getGCD(6, 7)
console.log(gcdTest)
