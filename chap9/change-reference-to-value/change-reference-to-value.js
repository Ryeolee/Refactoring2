class Person {
    get officeAreaCode() {
      return this._telephoneNumber.areaCode;
    }
    set officeAreaCode(arg) {
      this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber);  // 하나의 인스턴스로 만들어 불변으로 만들어버림.
    }  // 값을 다루므로,  내부 객체를 통째로 대체
    get officeNumber() {
      return this._telephoneNumber.number;
    }
    set officeNumber(arg) {
      this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg); // 하나의 인스턴스로 만들어 불변으로 만들어버림.
    }
  }
  
  // 불변 객체로 만듬
  class TelephoneNumber {
    constructor(areaCode, number) {
      this._areaCode = areaCode;
      this._number = number;
    }
    get areaCode() {
      return this._areaCode;
    }
    get number() {
      return this._number;
    }
    equals(other) {
      if (!(other instanceof TelephoneNumber)) return false;
      return this.areaCode === other.areaCode && this.number === other.number;
    }
  }