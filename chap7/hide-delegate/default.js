class Person {
    constructor(name) {
      this._name = name;
    }
    get name() {
      return this._name;
    }

    // Department 클래스를 가져옴 -> 클라이언트가 직접 Person을 통해 Department에 접근할 수 있음.
    get department() {
      return this._department;
    }
    set department(arg) {
      this._department = arg;
    }
  }
  
  class Department {
    get chargeCode() {
      return this._chargeCode;
    }
    set chargeCode(arg) {
      this._chargeCode = arg;
    }
    get manager() {
      return this._manager;
    }
    set manager(arg) {
      this._manager = arg;
    }
  }
  
  // 클라이언트
  const aPerson = new Person('aa');
  manager = aPerson.department.manager;