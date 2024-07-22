
// TelephoneNumber 클래스에 번호 관련 역할을 부여
class Person {
    constructor() {
      this._telephoneNumber = new TelephoneNumber();
    }
  
    get name() {
      return this._name;
    }
    set name(arg) {
      this._name = arg;
    }
    get officeAreaCode() {
      return this._telephoneNumber.areaCode;
    }
    set officeAreaCode(arg) {
      this._telephoneNumber.areaCode = arg;
    }
    get officeNumber() {
      return this._telephoneNumber.number;
    }
    set officeNumber(arg) {
      this._telephoneNumber.number = arg;
    }
    get telephoneNumber() {
      return this._telephoneNumber.toString();
    }
  }
  

  // 번호 관련 로직 담당
  class TelephoneNumber {
    constructor() {}
  
    get areaCode() {
      return this._areaCode;
    }
    set areaCode(arg) {
      this._areaCode = arg;
    }
    get number() {   // 클래스 내부 함수이므로 전화번호라는 단어는 불필요  단순 함수명으로 변경
      return this._number;
    }
    set number(arg) {
      this._number = arg;
    }
    get telephoneNumber() {
      return `${this.areaCode} ${this.number}`;
    }
    toString() {
      return `${this.areaCode} ${this.number}`;
    }
  }