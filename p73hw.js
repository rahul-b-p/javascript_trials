student= {
    rollno : 21,
    name : 'ben',
    age : 19,
    gender : 'male'
}

// add date of birth of student
student.dob='10/12/2004'
console.log(student);

// add marks of subject physics and chemistry to the student in 100
student.physics=55
student.chemistry=60
student.maths=70

console.log(student);

// calculate percentage mark of student obtained and add into given object

sub=['physics','chemistry','maths']
total=0
sub.forEach(item=> item in student?total+=student[item]:total=total)
per=(total/300)*100
student.percentage=per
console.log(student);

// remove age and gender of student
delete student.age
delete student.gender
console.log(student);

// update students physics mark and percentage obtained after revaluation 
student.physics+=8
total+=8
per=(total/300)*100
student.percentage=per
console.log(student);

// print student name and percentage obtained

console.log(`${student.name} : ${student.percentage}`);
