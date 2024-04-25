//[id, name, designation, location, salary, experience]

// [1000,'Neel','developer','kochi',25000,3]

// oops

class Employee{
    // property
    empName
    empDesig
    empLocation
    empSalary
    // constructors
    constructor(eName,eDesig,eLoc,esal){
        this.empName=eName,
        this.empDesig=eDesig,
        this.empLocation=eLoc,
        this.empSalary=esal
    }
    // methods
    display(){
        console.log(`Employee Name is ${this.empName}`);
    }
}
const Obj= new Employee('Neel','Developer','Kochi',25000)
Obj.display()
const Obj2= new Employee('max','hr','Calicut',30000)
Obj2.display()