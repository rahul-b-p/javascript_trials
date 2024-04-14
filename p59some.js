// w.a.p to check whether is there any number > 13 and exist in given array

a=[10,12,15,13,25,2,3,5]

greater=a.some(n=>n>13)
console.log(greater?'yes':'no');