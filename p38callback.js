// call back function

function greet(name,callback){
    console.log(`hai ${name}`);
    callback()
}

function callme(){
    console.log(`I am a call back function`);
}
greet(`peter`,callme)



console.log(`..........................`);
//eg2:

setTimeout(() => {
    console.log(`hello`);
}, 5000);

