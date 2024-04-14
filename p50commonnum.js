// w.a.p to print common numbers from given array using binary search concept to reduce execution time
p=[10,11,12,20,30]
q=[11,20,25,30,33]
str=''
q.sort((n1,n2)=>n1-n2)
p.sort((n1,n2)=>n1-n2)
common=false
i=0
j=0
while(i<p.length && j<q.length){
    if(p[i]==q[j]){
        common=true
        str=str+p[i]+' '
        i++
        j++
    }
    else if(p[i]<q[j]){
        i++
    }
    else{
        j++
    }
}
console.log(common?str:'no common numbers in this array');