arr=[10,20,30,40,30,20,50,30,60,70,10,40,80]
// w.a.p to print count of each number in given array

nc={}
arr.forEach(n=>n in nc?nc[n]+=1:nc[n]=1)
console.log(nc);