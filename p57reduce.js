a=[10,11,2,7,3,6,1]

// w.a.p to find the highest of given array
highest=a.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(highest);

// w.a.p to find the lowest of given array
lowest=a.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(lowest);

// w.a.p to find the sum of given array
sum=a.reduce((n1,n2)=>n1+n2)
console.log(sum);

