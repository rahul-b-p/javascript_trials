// w.a.p to display all armstrong no.s b/w 8-500

for(num=8;num<=500;num++){
    power=(num+'').length //to get no. of digits
    rem=0
    sum=0
    temp=num
    if(power!=1){
        while (temp>0) {
            rem=temp%10
            sum=sum+(rem**power)
            temp=Math.floor(temp/10)
        }
    }
    else{
        sum=0
    }
    if(num==sum){
        console.log(num);
    }
}