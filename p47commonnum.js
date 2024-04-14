// w.a.p to print common numbers from given array
p=[10,11,12,20,30]
q=[10,20,25,30,33]
op=[]
common=false
for(let i of p){
    for(let j of q){
        if (i==j){
            common=true
            // console.log(i);
            op.push(j)   
        }
    }
}
console.log(common?op:'no common numbers in this array');