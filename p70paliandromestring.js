// w.a.p to check whether a given string is paliandrome or not
str='malayalam'

start=0
end=str.length-1

// pal=''
// for(i=end;i>=start;i--){
//     pal+=str[i]
// }
// console.log(pal==str?'its paliandrome':'its not paliandrome');


//                 or

isPaliandrome=true
while(start<end){
    if(str[end]!=str[start]){
        isPaliandrome=false
        break
    }
    start++
    end--
}
console.log(isPaliandrome?'its paliandrome':'its not paliandrome');