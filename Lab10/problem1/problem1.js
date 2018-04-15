/**
 * Created by Sulav on 7/10/17.
 */
var BankAccount = (function () {
    function BankAccount() {
        this.money = 2000;
    }
    BankAccount.prototype.deposit = function (value) {
        this.money += value;
    };
    return BankAccount;
}());
var MySelf = (function () {
    function MySelf() {
        this.name = "Asaad";
        this.bankAccount = new BankAccount();
        this.hobbies = ["Violin", "Cooking"];
    }
    return MySelf;
}());
var myself = new MySelf();
myself.bankAccount.deposit(3000);
console.log(myself);
