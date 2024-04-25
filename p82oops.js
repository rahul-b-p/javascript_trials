class Student{

    // constructor
    constructor(id,name,mark){
        this.stid=id,
        this.sname=name,
        this.smark=mark,
        this.display()
    }

    // methods
    display(){
        console.log(`Student ID:${this.stid}   Name:${this.sname}    Mark:${this.smark}`);
    }
}

const s1 = new Student(1,'abdu',100)
const s2 = new Student(2,'abi',90)
const s3 = new Student(3,'abu',95)