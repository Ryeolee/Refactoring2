

// 중첩 조건절을 보호 구문으로 바꾼다. 각 조건에 return을 달아서 처리한다.\
function payment(employee) {
    if (employee.isSeparated) {
      return { amount: 0, reasonCode: 'SEP' };
    }
    if (employee.isRetired) {
      return { amount: 0, reasonCode: 'RET' };
    }
  
    return someFinalComputation();
  }
  
