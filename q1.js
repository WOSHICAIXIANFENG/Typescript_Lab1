/**
 * Created by Samuel on 9/7/2017.
 */
function depositFun(value) {
    this.money += value;
}
var mybankAccount = {
    money: 2000,
    deposit: depositFun
};
var myself = {
    name: "Asaad",
    bankAccount: mybankAccount,
    hobbies: ["Violin", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
console.log(myself.bankAccount);
