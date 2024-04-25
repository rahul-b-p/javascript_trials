// student

class Student{
    // propertey
    RollNo
    SName
    Sstanderd
    Sdob
    Smark

    // constructors
    constructor(rollno,name,standerd,dob,mark){
        this.RollNo=rollno,
        this.SName=name,
        this.Sstanderd=standerd,
        this.Sdob=dob,
        this.Smark=mark
    }

    // methods
    tenthStud(){
        if(this.Sstanderd==10){
            console.log(`${this.SName} is in 10th grade`);
        }
    }
    aboveSixty(){
        if(this.Smark>60){
            console.log(`${this.SName} has above 60 marks`);
        }
    }
    
}
const s1= new Student(23,'Sam',10,'10/12/2008',70)
s1.tenthStud()
s1.aboveSixty()
const s2= new Student(12,'Babu',7,'17/11/2011',60)
s2.tenthStud()
s2.aboveSixty()
const s3= new Student(17,'Emma',10,'12/3/2009',50)
s3.tenthStud()
s3.aboveSixty()