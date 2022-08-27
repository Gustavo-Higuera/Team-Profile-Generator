const Employee = require('./Employee');

class Manager extends Employee{
  constructor(officeNumber){
    super(this.name, this.id, this.email, this.role)
    this.officeNumber = officeNumber;
    this.role = 'Manager';
  }

  getRole(){
    return this.role;
  }
}

module.exports = Manager;