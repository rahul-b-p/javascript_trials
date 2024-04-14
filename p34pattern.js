// * * * * *
//   *   *
//     *
//   *   *
// * * * * *


for(row=1;row<=5;row++){
    str=''
    for(col=1;col<=5;col++){
        col==row||col+row==6||row==1||row==5?str+='* ':str+='  '
    }
    console.log(str);
}