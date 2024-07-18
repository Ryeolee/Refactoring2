// 함수 이름 바꾸기 -> 간단한 절차
function circum(radius) {
    return 2 * Math.PI * radius;
    }

// 함수 이름 바꾸기 -> 간단한 절차
function circumference(radius) {
return 2 * Math.PI * radius;
}

class Book {
  constructor() {
    this._reservations = [];
  }
  // 매개변수 추가하기
  addReservation(customer) {
    this.zz_addReservation(customer, false);
  }

  // 매개변수 추가하기
  zz_addReservation(customer, isPriority) {
    // 새로 추가한 매개변수를 사용하는지 확인
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}


// 매개변수를 속성으로 바꾸기
function inNewEngland(aCustomer){
    return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}

// 매개변수를 속성으로 바꾸기
const newEnglanders = someCustomers.filter((c) => isNewEngland(c.address.statusCode));
function isNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}