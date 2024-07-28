
// 클래스 생성자를 통해서 name => title로 바꿀 수 있다.
class Organization {
    constructor(data) {
      this._title = data.title;
      this._country = data.country;
    }
  
    get title() {
      return this._title;
    }
    set title(aString) {
      this._title = aString;
    }
    get country() {
      return this._country;
    }
    set country(aCountryCode) {
      this._country = aCountryCode;
    }
  }
  
  const organization = new Organization({ title: '애크미 구스베리', country: 'GB' });