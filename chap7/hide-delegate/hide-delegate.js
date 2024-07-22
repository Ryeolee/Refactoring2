class Person {
    constructor(name) {
      this._name = name;
    }
    get name() {
      return this._name;
    }
    set department(arg) {
      this._department = arg;
    }

    // Person을 통해 Department에 모두 접근하는 것을 막는 것이 아니라, 필요한 필드만 조회하고, 중재자로써 
    // Department를 숨기기 위해 사용
    get manager() {
      return this._department.manager;
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
  
  // 클라이언트가 department 클래스의 동작방식을 몰라도 됨.
  manager = aPerson.manager;