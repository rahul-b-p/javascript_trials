fruits = ['apple', 'orange', 'strawberry', 'kiwi', 'pinapple']
console.log(fruits);
console.log('--------------------------------------');

//for
for (index=0;index<fruits.length;index++) {
    console.log(fruits[index])
} 
console.log('--------------------------------------');

// in
for(let i in fruits){
    console.log(fruits[i]);
}
console.log('--------------------------------------');

// of
for (let i of fruits) {
    console.log(i);
}
