pattern='ABCBBCAACB'
// w.a.p to find first recursive letter

rec=pattern.split('').find((c1,c2)=>c1=c2)
console.log(rec);

console.log('---------------------------------------------------');
// using object
character= Array.from(pattern)
obj1={}
for(char of character){
    if (char in obj1) {
        console.log(char);
        break
    }
    else{
        obj1[char]=1
    }
}