products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
console.log('product names');
products.forEach(item=>{console.log(item.pName)})
console.log('-------------------------------------------------');

//2. print all mobile details whose display is lcd
console.log('mobile details whose display is lcd');
products.filter(item=>item.display=='lcd').forEach(item=>{console.log(item)})
console.log('-------------------------------------------------');

//3. print 5g mobile phone name
console.log('5g mobile phone names');
products.filter(item=>item.band=='5g').forEach(item=>{console.log(item.pName)})
console.log('-------------------------------------------------');

//4. sort mobile based on price
console.log('sort mobile based on price');
products.sort((p1,p2)=>p1.price-p2.price).forEach(item=>{console.log(`${item.pName} : ${item.price}`)})
console.log('-------------------------------------------------');

//5. print costly mobile
costly=products.reduce((c1,c2)=>c1.price>c2.price?c1:c2)
console.log(`Costly Mobile is ${costly.pName} and its price is ${costly.price}`);
console.log('-------------------------------------------------');

//6. print low cost mobile
costly=products.reduce((c1,c2)=>c1.price<c2.price?c1:c2)
console.log(`Low Mobile is ${costly.pName} and its price is ${costly.price}`);
console.log('-------------------------------------------------');