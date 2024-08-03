function disabilityAmount(anEmployee) {
    if (isNotEligibleForDisability()) {       // 결과가 같은 조건문을 하나로 합친다.
      return 0;
    }
  
    function isNotEligibleForDisability() {
      return anEmployee.seniority < 2 || anEmployee.monthsDisabled > 12 || anEmployee.isPartTime;
    }
  }
  
  function factor() {
    if (anEmployee.onVacation && anEmployee.seniority > 10) {
      return 1;
    }
    return 0.5;
  }