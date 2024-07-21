const organization = new Organization({ name: '에크미 구스베리', country: 'GB' });  // 현재는 싱글톤 패턴을 사용

function getOrganization() {       // 의존성 주입 사용
  return organization;
}

class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }

  set name(aString) {
    this._name = aString;
  }

  get name() {
    return this._name;
  }

  set country(aCountryCode) {
    this._country = aCountryCode;
  }

  get country() {
    return this._country;
  }
}

result += `<h1>${getOrganization().name}</h1>`;   // 의존성 주입 사용
getOrganization().name = 'newName';

class CustomerData {
  constructor(data) {
    this._data = data;
  }

  setUsage(customerId, year, month, amount) {                  // typesript에서는 set함수를 private으로 무력화 시켜 외부에서 접근하지 못하도록 함.
    this._data[customerId].usages[year][month] = amount;
  }

  get rawData() {
    return this._data.cloneDeep(this._data);       // get를 통해 가져간 값을 set로 변화해 값이 변화하는 것을 대비해서 깊은 복사를 실행
  }

  usage(customerId, year, month) {
    return this._data[customerId].usages[year][month];
  }
}