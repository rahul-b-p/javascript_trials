// w.a.p to print given pattern

// # # # #
// # # # #
// # # # #
// # # # #

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=4;col++){
        str=str+'# '
    }
    console.log(str);
}

console.log('---------------------------------');

// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=4;col++){
        str=str+row+' '
    }
    console.log(str);
}

console.log('---------------------------------');

// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=4;col++){
        str=str+col+' '
    }
    console.log(str);
}


console.log('---------------------------------');

// 1
// 2 2
// 3 3 3
// 4 4 4 4

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=row;col++){
        str=str+row+' '
    }
    console.log(str);
}

console.log('---------------------------------');

// 1
// 1 2
// 1 2 3
// 1 2 3 4

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=row;col++){
        str=str+col+' '
    }
    console.log(str);
}

console.log('---------------------------------');
// * * * *
// * * * 
// * *
// *

for(row=1;row<=4;row++){
    str=''
    for(col=4;col>=row;col--){
        str=str+'* '
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
