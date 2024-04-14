// 1
// 0 1
// 1 0 1
// 0 1 0 1

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=row;col++){
        (row+col)%2==0?str=str+1+' ':str=str+0+' '
    }
    console.log(str);
}

console.log('------------------------------------------');

