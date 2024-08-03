
// 함수의 조건절 안에 조건절이 있고, 리턴은 하나이다.
function payment(employee) {
    let result;
    if (employee.isSeparated) {
      result = { amount: 0, reasonCode: 'SEP' };
    } else {
      if (employee.isRetired) {
        result = { amount: 0, reasonCode: 'RET' };
      } else {
        result = someFinalComputation();
      }
    }
    return result;
  }
  
