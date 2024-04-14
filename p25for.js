// w.a.p to print no. from 1 t0 25 using for loop

for (i=1; i<=25; i++) {
    console.log(i);   
}

console.log('----------------------------');
// w.a.p to print factorial

input=4
fact=1
for(i=1; i<=input; i++) {
    fact=fact*i 
}
console.log(`${input}!=${fact}`);

console.log('----------------------------');
// w.a.p to itrate a pgm till 10 and print til 5


for(i=1; i<=10; i++){
    console.log(i);
    if (i>=5) {
        break;
    }
}

