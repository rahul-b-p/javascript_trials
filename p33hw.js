// HW
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

for(row=1;row<=5;row++){
    str=''
    for(col=5;col>=1;col--){
       col>row?str+=' ':str+='* '
    }
    console.log(str);
}
for(row=1;row<=4;row++){
    str=''
    for(spa=1;spa<=row;spa++){
        str+=' '
    }
    for(col=4;col>=row;col--){
         str+='* '
    }
    console.log(str);  
}