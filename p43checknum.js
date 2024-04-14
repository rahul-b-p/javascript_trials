arr=[10,11,12,3,2,4]
// w.a.p to check whether 2 is present or not

isPresent=false
SearchItem=2
for(let i of arr){
    if(i==SearchItem){
        isPresent=true
        break
    }
}
console.log(isPresent?'present':'not preesent');