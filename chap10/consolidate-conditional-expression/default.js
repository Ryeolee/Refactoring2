function disabilityAmount(anEmployee) {       // 결과가 같은 조건문들이 널려있다.
    if (anEmployee.seniority < 2) return 0;            
    if (anEmployee.monthsDisabled > 12) return 0;
    if (anEmployee.isPartTime) return 0;
  }
  
