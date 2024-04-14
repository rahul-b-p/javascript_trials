//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name
console.log('employee name is: ');
employee.forEach(emp => {console.log( emp[1])})
console.log('----------------------------------------');

//print total numbers of employee
console.log(`total number of employee is: ${employee.length}`);
console.log('----------------------------------------');

//print developer employee details
console.log('Details of Developers');
employee.filter(emp=>emp[2]=='developer').forEach(developer=>{console.log(developer);})
console.log('----------------------------------------');

// print details of employee Laisha
console.log('details of Laisha');
Laisha=employee.find(emp=>emp[1]=='Laisha')
console.log(Laisha);
console.log('----------------------------------------');

// print employee with salary greater than 30000
console.log('employee with salary greater than 30000');
employee.filter(emp=>emp[4]>30000).forEach(pro=>console.log(pro[1]))
console.log('----------------------------------------');

//sort employee based on their salary in descending order
console.log('employee based on their salary order');
SalarySort=employee.sort((emp1,emp2)=>emp1[4]-emp2[4])
console.log(SalarySort);
console.log('----------------------------------------');

//sort employee based on their experience in ascending order

console.log('----------------------------------------');

// print the employ name whose have the higest salary

console.log('----------------------------------------');

// total salary expence of the company
