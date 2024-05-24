class Account {
    protected accountNumber: number;
    protected balance: number;

    constructor(accountNumber: number, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            console.log("Số tiền phải dương không được âm.");
            return;
        }
        this.balance += amount;
        console.log(`Gửi tiền ${amount}. Số dư mới: ${this.balance}.`);
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Số tiền rút phải dương.");
            return;
        }
        if (amount > this.balance) {
            console.log("Không đủ tiền.");
            return;
        }
        this.balance -= amount;
        console.log(`Rút tiền ${amount}. Số dư mới: ${this.balance}.`);
    }

    getBalance(): number {
        return this.balance;
    }
}

class SavingsAccount extends Account {
    private interestRate: number;

    constructor(accountNumber: number, balance: number, interestRate: number) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    calculateInterest(): number {
        return this.balance * (this.interestRate / 100);
    }

    printMonthlyInterest(): void {
        console.log(`Lãi hàng tháng là: ${this.calculateInterest()}.`);
    }
}

class CheckingAccount extends Account {
    private overdraftLimit: number;

    constructor(accountNumber: number, balance: number, overdraftLimit: number) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Số tiền rút phải dương.");
            return;
        }
        if (amount > this.balance + this.overdraftLimit) {
            console.log("Vượt quá hạn mức cho phép.");
            return;
        }
        this.balance -= amount;
        console.log(`Rút tiền ${amount}. Số dư mới: ${this.balance}.`);
    }
}

// Tạo tài khoản SavingsAccount và kiểm tra lãi suất
let newSavingsAccount = new SavingsAccount(200, 60000, 4);

// In ra tiền lãi hàng tháng trong tài khoản đó
newSavingsAccount.printMonthlyInterest();

// Gửi thêm tiền vào tài khoản
newSavingsAccount.deposit(500);

// In lại xem tiền lãi hàng tháng có tăng không
newSavingsAccount.printMonthlyInterest();

// Tạo tài khoản CheckingAccount và kiểm tra hạn mức thấu chi
let newCheckingAccount = new CheckingAccount(300, 500, 1000);

// Rút quá số tiền trong tài khoản nhưng trong hạn mức thấu chi cho phép
newCheckingAccount.withdraw(800); // Nên thành công, số dư mới: -300

// Rút vượt quá hạn mức thấu chi
newCheckingAccount.withdraw(1000); // Nên thất bại, vượt quá hạn mức cho phép

// Rút tiền trong phạm vi hạn mức thấu chi
newCheckingAccount.withdraw(700); // Nên thành công, số dư mới: -1000
