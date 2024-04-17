//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
console.log('district having Highest +ve case');
highestpc=covid_data.reduce((p1,p2)=>p1[2]>p2[2]?p1:p2)
console.log(highestpc[1]);
console.log('--------------------------------------');


//2. district having Highest 1st dose vaccine
console.log('district having Highest 1st dose vaccine');
hfdv=covid_data.reduce((c1,c2)=>c1[5]>c2[5]?c1:c2)
console.log(hfdv[1]);
console.log('--------------------------------------');


//3. district having lowest death rate
console.log('district having lowest death rate');
ldr=covid_data.reduce((d1,d2)=>d1[3]<d2[3]?d1:d2)
console.log(ldr[1]);
console.log('--------------------------------------');


//4. sort data with +ve case in descending order
console.log('sort data with +ve case in descending order');
covid_data.sort((c1,c2)=>c2[2]-c1[2]).forEach(item=> {console.log(item[1]);})
console.log('--------------------------------------');


//5. is district with +ve cases > 15000
posc=covid_data.some(poscase=>poscase[2]>15000)
console.log(posc?'There are districts with +ve cases > 15000':'There are no districts with +ve cases > 15000' );
console.log('--------------------------------------');


//6. sort data with 1st dose vaccine ascending order
console.log('sort data with 1st dose vaccine ascending order');
covid_data.sort((c1,c2)=>c1[5]-c2[5]).forEach(item=> {console.log(item[1]);})
console.log('--------------------------------------');


//7. Print Thrissur details
console.log('Details of Thrissur');
thrissur=covid_data.find(dist=>dist[1]=='Thrissur')
console.log(thrissur);
console.log('--------------------------------------');


//8. Print total number of positive cases
console.log('total number of positive cases');
// sum=0
// covid_data.forEach(item=> {sum=sum+item[2]})
sum=covid_data.map(pc=>pc[2]).reduce((pvc1,pvc2)=>pvc1+pvc2)
console.log(sum);
console.log('--------------------------------------');


//9. Print total number of curred cases
console.log('total number of curred cases');
sum=covid_data.map(cc=>cc[4]).reduce((cc1,cc2)=>cc1+cc2)
console.log(sum);
console.log('--------------------------------------');


//10. Print curred cases in Idukki
console.log('curred cases in Idukki');
idukki=covid_data.find(dist=>dist[1]=='Idukki')
console.log(idukki[4]);
console.log('--------------------------------------');
