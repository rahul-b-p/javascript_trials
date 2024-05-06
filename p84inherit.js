// class
class Parent{
    display(){
        console.log('this is Child Class of Parent Class');
    }
}
class Child extends Parent{

}
// object
const obj = new Child()
obj.display()