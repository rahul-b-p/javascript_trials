// w.a.p to check whether a number is paliandrome or note

num=123321
check=num
rev=0
rem=0
while(num>0){
    rem=num%10
    rev=rev*10+rem
    num=Math.floor(num/10)
}
if (check==rev) {
    console.log(`given number ${check} is paliandrome`);
} 
else {
    console.log(`given number ${check} is not paliandrome`);
}