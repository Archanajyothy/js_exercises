class Account {
    constructor(fname,lname,acc_no,balance,address,place) {
      this.fname = fname;
      this.lname = lname;
      this.acc_no = acc_no;
      this.balance = balance;
      this.address = address;
      this.place = place;
    }
    get fullname() {
        return this.getFullName();
      }

    // getFullName(){
    //     return this.fname +" "+this.lname;
    // }
    depositAmt = (amt) => {
        this.balance = this.balance + amt
        console.log('Available balance is '+ this.balance);
    }
    withdraw = (amt) => {
        this.balance = this.balance - amt
        console.log(`You have withdrawn ${amt}. 
Available balance is ${this.balance}`);
    }
    checkBal = () => {
        console.log(`Available balance is ${this.balance}`);
    }
    moneyTransfer = (amt) => {
        this.balance = this.balance - amt
        console.log("Balance is ", this.balance);
    }
}

Account.prototype.getFullName = function () {
    return this.fname + " " + this.lname;
};

const acc = new Account("Archana", "J", 1234567, 10000, "Thottathil veedu", "Kollam")
console.log(acc.fullname)
acc.depositAmt(1000)
acc.withdraw(100)
acc.checkBal()
acc.moneyTransfer(200)



