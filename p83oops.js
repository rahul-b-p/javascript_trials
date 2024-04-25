// write methods for solving the given questions

class Bank{
    // Property
    accountDetails={
        1000:{acno:1000,username:'userone',password:'userone',balance:50000},
        1001:{acno:1001,username:'usertwo',password:'usertwo',balance:5000},
        1002:{acno:1002,username:'userthree',password:'userthree',balance:10000},
        1003:{acno:1003,username:'userfour',password:'userfour',balance:6000}
    }

    // Methods

    //  validate the account no
    accnoValidate(acno){
        return acno in this.accountDetails?true:false
    }

    // authenticate the account
    accAuthenticate(acno,paswrd){
        this.accval=this.accnoValidate(acno)
        if(this.accval){
            this.accountDetails.password==paswrd?true:false
        }
    }

    // check the balance

    // fund transfer
}
const user1 = new Bank()
console.log(user1.accnoValidate(1004)?'Valid Account':'Invalid Account');
console.log(user1.accAuthenticate(1000,'userone')?'Welocome to Bank':'Authentication Failed');

