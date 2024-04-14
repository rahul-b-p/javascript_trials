fruits=['apple','orange','mango','grapes','jackfruit','kiwi','pinapple']

//w.a.p to find mango from given array

mango=fruits.find(f=>f=='mango')
console.log(mango);

//w.a.p to find is there mango present in array
b=fruits.includes('mango')
console.log(b?'yes':'no');
