// w.a.p to print pairs whose sum is 7 using binary concept
b=[2,3,4,5]
sum=7
low=0
up=b.length-1
isPresent=false
while(low<up){
    temp=b[low]+b[up]
    if(temp==sum){
        isPresent=true
        console.log(`(${b[low]},${b[up]})`);
        low++
    }
    else if(temp>sum){
        up--
    }
    else{
        low++
    }
}
!isPresent && console.log('no pair');