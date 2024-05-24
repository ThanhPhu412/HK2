"use strict";
class Employee {
    constructor(name, company, phone) {
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
    setEmployee(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
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
