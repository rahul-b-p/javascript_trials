// input: 2 3 4 5 6
// output 24 369 4936  61725

// 2*12 3*123 4*1234


input=3
i=1
str=''
output=0
while (i<=input) {
    str= str+i
    i++
}
output=input*str
console.log(output);


// 2+22 3+33+333

input=4
n=input
i=1
output=0
while (i<=n) {
    output=output+input
    input=n+(input*10)
    i++   
}
console.log(output);