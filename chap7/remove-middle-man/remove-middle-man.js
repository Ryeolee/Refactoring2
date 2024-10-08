class Person {
    constructor(name) {
      this._name = name;
    }
    get name() {
      return this._name;
    }

    // 이렇게 모두 Department를 제공해준다
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
  
  // department 정보가 필요할 때마다 클라이언트가 직접 접근해줌
const aPerson = new Person("aaa")
manager = aPerson._department.manager;