// w.a.p to print given pattern
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *


for(row=1;row<=5;row++){
    str=''
    for(col=1;col<=row;col++){
        str=str+'* '
    }
    console.log(str);
}
for(row=1;row<=4;row++){
    str=''
    for(col=4;col>=row;col--){
        str=str+'* '
    }
    console.log(str);  
}


console.log('---------------------------------');
//    *
//   * *
//  * * *
// * * * *



for(row=1;row<=4;row++){
    str=''
    for(col=4;col>=1;col--){
       col>row?str=str+' ': str=str+'* '
    }
    console.log(str);
}


console.log('---------------------------------');
//       *
//     * *
//   * * *
// * * * *


for(row=1;row<=4;row++){
    str=''
    for(col=4;col>=1;col--){
        col>row?str=str+'  ':str=str+'* '  
    }
    console.log(str);
}

console.log('---------------------------------');
//       *
//     *   *
//   *       *
// * * * * * * *

for(row=1;row<=4;row++){
    str=''
    for(col=7;col>=1;col--){
        col+row==5||col-row==3||row==4?str=str+'* ':str=str+'  '
    }
    console.log(str);
}

console.log('---------------------------------');
// * * * * *
// *       *
// *       *
// *       *
// * * * * *
for(row=1;row<=5;row++){
    str=''
    for(col=1;col<=5;col++){
        row==1||col==1||row==5||col==5?str=str+'* ':str=str+'  '
    }
    console.log(str);
}

console.log('---------------------------------');
