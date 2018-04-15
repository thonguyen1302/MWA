/**
 * Created by Sulav on 7/10/17.
 */

class BankAccount {
    money: number = 2000;
    deposit(value: number):void {
        this.money += value;
    }
}

class MySelf {
    name: string = "Asaad";
    bankAccount: BankAccount = new BankAccount();
    hobbies: string[] = ["Violin", "Cooking"];
}

let myself = new MySelf();
myself.bankAccount.deposit(3000);
console.log(myself);