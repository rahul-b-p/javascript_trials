expence= [12000,24000,35000,10000,54000,40000]

// find lowest expence
low=expence[0]
for(let i of expence){
    if(i<low){
        low=i
    }
}
console.log(`lowest expence is ${low}`);

// find highest expence
high=expence[0]
for(let i of expence){
    if(i>high){
        high=i
    }
}
console.log(`highest expence is ${high}`);

// find total expence
sum=0
for(let i of expence){
    sum+=i
}
console.log(`total expence is ${sum}`);