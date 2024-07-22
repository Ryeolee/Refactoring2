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

    // 매니저 조회와 유사한 함수들이 많을 경우 결국 숨기지 않고 모두를 다 보여둔다. 이럴 경우 중재자를 없앤다.
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
  
  // department 정보가 필요할 때마다 서버가 대신 접근해줌
  const aPerson = new Person("aaa")
  manager = aPerson.manager;