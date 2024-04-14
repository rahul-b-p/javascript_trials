// input=[4,5,6]
// output=[11,10,9]

input=[4,5,6]
output=[]
diff=7
for (let i of input) {
    output.push(i+diff)
    diff-=2
}
console.log(output);


        //or

// input=[4,5,6]
// sum=0
// output=[]
// for(num of input){
//     sum=sum+num
// }
// for(num of input){
//     output.push(sum-num);
// }
// console.log(output);