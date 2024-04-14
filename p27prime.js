// w.a.p to print all prime numbers b/w 2 to 50

for(i=2; i<=50; i++){
    let flag=0
    for(j=2;j<i;j++){
        if(i%j==0){
            flag=1;
            break;
        }
    }
    if (flag==0) {
        console.log(i);
    }
}