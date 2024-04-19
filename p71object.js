// array
// [id, name, designation, location, salary, experience]

arr=[1000,'Neel','developer','kochi',25000,3]


employee={
    id:1000,
    name:'Neel',
    designation:'developer',
    location:'kochi',
    salary:25000,
    age:35
}

console.log(typeof(arr));
console.log(typeof(employee));

console.log('---------------------------------------------');
// print employee details

// console.log(arr);

console.log(employee);

console.log('---------------------------------------------');

// to print designation of employee
console.log('designation of employee');

// console.log(arr[2]);
console.log(employee['designation']);

console.log('---------------------------------------------');

// to print name of the employee
console.log('salary of the employee');

// console.log(arr[4]);
console.log(employee.salary);

console.log('---------------------------------------------');

// how to access a key from an Object
//-------------------------------------
for(let key in employee){
    console.log(key);
}

console.log('---------------------------------------------');

// w.a.p to check find whether 'emplocation' key is present in given object

// isPresent=false
// for(let key in employee){
//     if (key=='emplocation') {
//         isPresent=true
//         break;
//     }
// }
// console.log(isPresent?'given key is present':'the given key is not present');


//                    or


// if ('emplocation' in employee) {
//     console.log('present');
// }
// else{
//     console.log('not present');
// }

//                    or

console.log(`emplocation key is ${'emplocation' in employee?'present':'not present'}`);

console.log('---------------------------------------------');

// add expereince into given objext

employee["experience"]=3
console.log(employee);

console.log('---------------------------------------------');

// check 'gender' key in the given object employee. if present print 'yes' else add gender key to the given object with value as male


'gender' in employee?console.log('yes'):(employee['gender']='male',console.log(employee))

console.log('---------------------------------------------');

// update age of employee into 40

console.log('updated age of employee');
employee.age+=5
console.log(employee.age);

console.log('---------------------------------------------');

// delete age from employee

delete employee.age
console.log(employee);