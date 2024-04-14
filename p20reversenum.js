// w.a.p to find reverse of given number using while loop

num=123
sum=0
console.log(`given num  is ${num}`);
while(num>0){
    d=num%10
    sum=sum*10+d
    num=Math.floor(num/10)
}
console.log(`reverse of given num is ${sum}`);