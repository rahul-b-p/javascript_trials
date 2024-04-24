accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log(`total no of accounts = ${accounts.length}`);
console.log('------------------------------------------------------------------');

//2. print account number whose ac_type is savings
console.log('account number whose ac_type is savings');
accounts.filter(acc=>acc.ac_type=='savings').forEach(item=>{console.log(item.acno)})
console.log('------------------------------------------------------------------');

//3.print the balance of accnount number 1000
console.log('balance of accnount number 1000');
ac=accounts.find(acc=>acc.acno==1000)
console.log(ac.balance);
console.log('------------------------------------------------------------------');
//4. print all gpay transactions
console.log('all gpay transactions');
accounts.map(element => element.transaction).flat().filter(tns=>tns.mode=='gpay').forEach(item=>{console.log(item);})
console.log('-------------------------------------------------------------------------------------------');

//5. print all transaction whose amount > 5000
console.log('all transaction whose amount > 5000');
accounts.map(element => element.transaction).flat().filter(tns=>tns.amount>5000).forEach(item=>{console.log(item);})
console.log('-------------------------------------------------------------------------------------------');


//6. print credit transaction of account 1002
console.log('credit transaction of account 1002');
accounts.map(element => element.transaction).flat().filter(tns=>tns.to==1002).forEach(item=>{console.log(item);})
console.log('-------------------------------------------------------------------------------------------');

//7. print debit transaction of account 1002
console.log('debit transaction of account 1002');
// accounts.filter(element=>element.acno==1002).map(item=>item.transaction).flat().forEach(item=>{console.log(item);})
//                   or
accounts.find(element=>element.acno==1002).transaction.forEach(item=>{console.log(item);})
console.log('-------------------------------------------------------------------------------------------');

//8. print transaction history of 1002
console.log('transaction history of 1002');
history={}
credit=accounts.map(element => element.transaction).flat().filter(tns=>tns.to==1002)
debit=accounts.find(element=>element.acno==1002).transaction
history['credit']=credit
history['debit']=debit
console.log(history);
// spread(...) to combine array 
// transHistory=[...credit,...debit]
// console.log(transHistory);
console.log('-----------------------------------------------------------------------------------------');

//9. print highest balance account details
console.log('highest balance account details');
acc=accounts.reduce((c1,c2)=>c1.balance>c2.balance?c1:c2)
console.log(acc);