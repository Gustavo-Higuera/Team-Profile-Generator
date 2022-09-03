const Employee = require('./Employee');

class Manager extends Employee {
  constructor(obj) {
    super(obj);

    this.role = 'Manager';
    this.officeNum = obj.officeNum;
  }

  getOfficeNum() {
    return this.officeNum;
  }
}

module.exports = Manager;