// w.a.p to check whether a given number armstrong or not
// numbers that equal to the sum of their on  digits rise to no. of digits


num=1634
temp=num
check=num
sum=0
count=0
rem=0
// power=(num+'').length
while (temp>0) {
    temp=Math.floor(temp/10)
    count++
}
while (num>0) {
    rem=num%10
    sum=sum+(rem**count/*power*/)
    num=Math.floor(num/10)
}
check==sum?console.log(`given number ${check} is an armstrong number`):console.log(`given number ${check} is not an armstrong number`)