/**
 * Created by Samuel on 9/7/2017.
 */

interface DepositFun {
    (value: number);
}

interface BankAccount {
    money : number;
    deposit: DepositFun;
}

function depositFun(value: number) {
    this.money += value;
}

interface People {
    name : string;
    bankAccount : BankAccount;
    hobbies: string[];
}

let mybankAccount: BankAccount = {
    money: 2000,
    deposit: depositFun
}

let myself: People = {
    name: "Asaad",
    bankAccount: mybankAccount,
    hobbies: ["Violin", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);
console.log(myself.bankAccount);