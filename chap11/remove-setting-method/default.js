

class Person {
    get name() {
      return this._name;
    }
    set name(arg) {
      this._name = arg;
    }
    get id() {
      return this._id;
    }
    set id(arg) {
      this._id = arg;
    }
  }
  
  const martin = new Person();
  
  // 인스턴스 생성 후 set 함수를 통해 값 변경을 막하야한다.
  martin.name = '마틴';
  martin.id = '1234';
  // 이름은 객체 생성 후 변경될 수 있지만, id는 변경되면 안된다.