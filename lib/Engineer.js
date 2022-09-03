const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(obj) {
    super(obj);

    this.role = 'Engineer';
    this.github = obj.github;
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;