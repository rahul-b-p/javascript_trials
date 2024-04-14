/* w.a.p to find fizz when a number is divisible by 3, buzz when divisible by 5 fizzbuzz when divisible by 15 */

num=301

if(num%15==0){
    console.log('fizz');
    console.log('buzz');
    console.log('fizzbuzz');
}
else if(num%5==0){
    console.log('buzz');
}
else if(num%3==0){
    console.log('fizz');
}
else{
    console.log('this number does not gives any output');
}