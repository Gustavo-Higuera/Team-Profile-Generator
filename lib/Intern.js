const Employee = require('./Employee');

class Intern extends Employee {
  constructor(school) {
    super(this.name, this.id, this.email, this.role)
    this.school = school;
    this.role = 'Intern';
  }
  
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;