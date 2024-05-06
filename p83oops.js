// write methods for solving given questions

class Bank{
    //property
    accountDetails={
        1000:{acno:1000,username:'userone',password:'userone',balance:50000},
        1001:{acno:1001,username:'usertwo',password:'usertwo',balance:5000},
        1002:{acno:1002,username:'userthree',password:'userthree',balance:10000},
        1003:{acno:1003,username:'userfour',password:'userfour',balance:6000},
    }

    //validate a given account number
    validate(acno){
        return acno in this.accountDetails?'Account Valid':'Invalid Account'
    }

    //authenticate the account(acc no , password)
    authenticate(acno,pswd){
        if(this.validate(acno)){
            if(this.accountDetails[acno].password==pswd){
                console.log('Authentication successful');
            }
            else{
                console.log('Invalid Password');
            }
        }
        else{
            console.log('Invalid Account');
        }
    }


    //check the balance
    balance(acno,pswd){
        if(this.validate(acno)){
            if(this.accountDetails[acno].password==pswd){
                console.log(`Current balance of ${acno} is ${this.accountDetails[acno].balance}`);
            }
            else{
                console.log('invalid password');
            }
        }
        else{
            console.log('invalid account number');
        }
    }

    //fund transfer
    fundTransfer(fromAcno,toAcno,fpswd,amount){
        if(this.validate(fromAcno) && this.validate(toAcno)){
            if(this.accountDetails[fromAcno].password==fpswd){
                if(this.accountDetails[fromAcno].balance>=amount){
                    console.log(`Current balance of ${fromAcno} is ${this.accountDetails[fromAcno].balance} and Current balance of ${toAcno} is ${this.accountDetails[toAcno].balance} before transaction`);
                    this.accountDetails[fromAcno].balance-=amount
                    this.accountDetails[toAcno].balance+=amount
                    console.log(`Current balance of ${fromAcno} is ${this.accountDetails[fromAcno].balance} and Current balance of ${toAcno} is ${this.accountDetails[toAcno].balance} after transaction`);
                }
                else{
                    console.log('insufficient balance');
                }
            }
            else{
                console.log('Invaid password');
            }
        }
        else{
            console.log('invalid Account Numbers');
        }
    }

}

const user1 = new Bank()
console.log(user1.validate(1004));
console.log('--------------------------');
user1.authenticate(1000,'userone')
console.log('-------------------------');
user1.balance(1000,'userone')
console.log('-------------------------');
user1.fundTransfer(1000,1001,'userone',100)