// W A P to find the sum of two numbers using function

//function definition

function add(n1,n2){
    const sum=n1+n2
    console.log(`Sum of ${n1} and ${n2} is ${sum}`);
}

//function call

add(20,30)
add(50,30)



console.log(`..........................`);
//W A P to find the given number is positive or negative using function



function pn(num){
    return num>0?`Positive Number`:`Negative Number`
}

console.log(pn(-52));


console.log(`..........................`);
//W A P to find the given number is Odd or Even using function



function OddOrEven(a){
    if(a%2==0){
        console.log(`Even`);
    }
    else{
        console.log(`Odd`);
    }
}
OddOrEven(10)


console.log(`..........................`);
//W A P to find cube of a given number

function cube(a1){
    val= a1**3
    console.log(`Cube of given number is ${val}`);
}

cube(3)



