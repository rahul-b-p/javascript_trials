class A {
    methoda(){
        console.log('First');
    }
}
class B extends A {
    methoda(){
        console.log('Second');
    }
    methoda(){
        console.log('Third');
    }
}
// object for class B 
const obj = new B()
obj.methoda()