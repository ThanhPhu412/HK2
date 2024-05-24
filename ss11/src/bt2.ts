class Employee {
    public name: string;
    protected company: string;
    protected phone: number;  // Changed from private to protected
    
    constructor(name: string, company: string, phone: number) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printInfo() {
        console.log(`Name: ${this.name} Company: ${this.company} Phone: ${this.phone}`);
    }

    getEmployee() {
        return {
            name: this.name,
            company: this.company,
            phone: this.phone
        };
    }

    setEmployee(name: string, company: string, phone: number) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
}

class Manager extends Employee {
    public teamSize: number;

    constructor(name: string, company: string, phone: number, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }

    printInfo() {
        // Overriding the printInfo method to include all information
        console.log(`Name: ${this.name} Company: ${this.company} Phone: ${this.phone} TeamSize: ${this.teamSize}`);
    }
}

// Example usage:
const manager = new Manager("Hào", "IT", 9818979371, 10);
manager.printInfo();
