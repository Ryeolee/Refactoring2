

class Person {
    constructor(id) {
      this._id = id;
    }
  
    get name() {
      return this._name;
    }
    set name(arg) {
      this._name = arg;
    }
    get id() {
      return this._id;
    }
  }

// set 함수를 없애고 인스턴스 생성을 통해 값 변경을 막는다.
const martin = new Person('1234');
  
martin.name = '마틴';