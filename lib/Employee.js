class Employee {
  constructor(obj) {
    this.name = obj.name;
    this.id = obj.id;
    this.email = obj.email;
    this.role = 'Employee';
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Employee;