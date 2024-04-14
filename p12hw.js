// w.a.p to find second largest mong three numbers and display the numbers in descending order

num1=53
num2=32
num3=58

if (num1>num2 && num1>num3) {
    desc1=num1
    if (num2>num3) {
        desc2=num2
        desc3=num3        
    }
    else{
        desc2=num3
        desc3=num2
    }
}
else if (num2>num1 && num2>num3) {
    desc1=num2
    if (num1>num3) {
        desc2=num1
        desc3=num3
    }
    else{
        desc2=num3
        desc3=num1
    }
}
else{
    desc1=num3
    if (num1>num2) {
        desc2=num1
        desc3=num2
    }
    else{
        desc2=num2
        desc3=num3
    }
}
console.log(`Second largest no is ${desc2}`);
console.log('The given numbers in descending order');
console.log('----------------------------------------');
console.log(desc1, desc2, desc3);
