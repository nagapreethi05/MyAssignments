const isPrime=function(num){
    if(num<2){
        return false;
    }
    if(num==2){
        return true;
    }
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
const findPrimes=function(min,max,cb){
    let primes=[];
    let low=min;
    let high=Math.min(low+100,max);
    let id=setInterval(()=>{
        for(let i=low;i<high;i++){
            if(isPrime(i)){
                primes.push(i);
            }
        }
        low=high;
        high=Math.min(low+100,max);
        if(low>=max){
            clearInterval(id);
            cb(primes);
        }
    },100);
}
function test(min,max){
    findPrimes(min,max,primes=>console.log(primes));

}
test(2,1000);
test(2,100);