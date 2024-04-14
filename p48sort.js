arr=[10,22,12,3,2,4,100]
// w.a.p to print array in ascending and descending order

a=arr.sort((n1,n2)=>n1-n2)
console.log('array in ascending order');
console.log(a);
console.log('-----------------------------------');
b=arr.sort((n1,n2)=>n2-n1)
console.log('array in descending order');
console.log(b);