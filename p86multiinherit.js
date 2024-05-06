class A{
    methoda(){
        console.log('inside A');
    }
}
class B extends A{
    methodb(){
        console.log('inside B');
    }
}
class C extends B{
    methodc(){
        console.log('inside C');
    }
}

// object for class C 
const obj = new C()

obj.methodc()
obj.methodb()
obj.methoda()