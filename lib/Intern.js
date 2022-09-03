const Employee = require('./Employee');

class Intern extends Employee {
  constructor(obj) {
    super(obj);

    this.role = 'Intern';
    this.school = obj.school;
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;