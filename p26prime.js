// w.a.p to print given no. is prime number or not
//prime numbers have two factors 1& itself

num=7
rem=0
div=0
isPrime= true
if (num!=1) {
    for(i=2;i<num;i++){
        rem=num%i
        if (rem==0) {
            isPrime= false
            break;
        }
    }
}
else{
    isPrime= false
}
isPrime?console.log('its a prime number'):console.log('its not a prime number');
