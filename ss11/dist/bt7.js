"use strict";
// class Account {
//     protected accountNumber: number;
//     protected balance: number;
//     constructor(accountNumber: number, balance: number) {
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//     }
//     deposit(amount: number): void {
//         if (amount <= 0) {
//             console.log("Số tiền phải dương không được âm.");
//             return;
//         }
//         this.balance += amount;
//         console.log(`Gửi tiền ${amount} Số dư mới ${this.balance}.`);
//     }
//     withdraw(amount: number): void {
//         if (amount <= 0) {
//             console.log("Số tiền rút");
//             return;
//         }
//         if (amount > this.balance) {
//             console.log("Không đủ tiền");
//             return;
//         }
//         this.balance -= amount;
//         console.log(`Rút tiền ${amount} Số dư mới ${this.balance}.`);
//     }
//     getBalance(): number {
//         return this.balance;
//     }
// }
// class SavingsAccount extends Account {
//     private interestRate: number;
//     constructor(accountNumber: number, balance: number, interestRate: number) {
//         super(accountNumber, balance);
//         this.interestRate = interestRate;
//     }
//     calculateInterest(): number {
//         return this.balance * (this.interestRate / 100);
//     }
//     printMonthlyInterest(): void {
//         console.log(`Lãi hàng tháng là: ${this.calculateInterest()}.`);
//     }
// }
// let newAccount = new SavingsAccount(200, 60000, 4);
// // In ra tiền lãi hàng tháng trong tài khoản đó
// newAccount.printMonthlyInterest();
// // Gửi thêm tiền vào tài khoản
// newAccount.deposit(500);
// // In lại xem tiền lãi hàng tháng có tăng không
// newAccount.printMonthlyInterest();
