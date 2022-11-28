// employee construction
const Employee = require('./Employee');

// manager construction
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        // number for manager only
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

// module export
module.exports = Manager;