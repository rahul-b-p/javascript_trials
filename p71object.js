// array
// [id, name, designation, location, salary, experience]

arr=[1000,'Neel','developer','kochi',25000,3]


employee={
    id:1000,
    name:'Neel',
    designation:'developer',
    location:'kochi',
    salary:25000,
    experience:3
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
