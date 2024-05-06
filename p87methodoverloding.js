class A{
    methodA(){
        console.log('Inside A');
    }
    methodA(n){
        this.n1=n
        console.log(`Inside A with an argument ${this.n1}`);
    }
    methodA(n,m){
        console.log(`Inside A with arguments ${n},${m}`);
    }
}
const obj = new A()
obj.methodA()
obj.methodA(1)
obj.methodA(1,2)