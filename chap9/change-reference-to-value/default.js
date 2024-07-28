class Person {
    constructor() {
      this._telephoneNumber = new TelephoneNumber();  // 참조로 인한 것이므로, 내부 객체는 그대로 둔 채 그 객체의 속성만 갱신
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
  }
  
  class TelephoneNumber {
    get areaCode() {
      return this._areaCode;
    }
    set areaCode(arg) {
      this._areaCode = arg;
    }
    get number() {
      return this._number;
    }
    set number(arg) {
      this._number = arg;
    }
  }