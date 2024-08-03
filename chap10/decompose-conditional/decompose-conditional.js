charge = summer() ? summerCharge() : regularCharge();

// Or

if (summer()) {   // if문의 긴 조건을 함수로 추출
  charge = summerCharge();     // 그의 대한 액션도 함수로 추출
} else {
  charge = regularCharge();       // 그의 대한 액션도 함수로 추출
}

function summer() {
  return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}

function summerCharge() {
  return quantity * plan.summerRate;
}

function regularCharge() {
  return quantity * plan.regularRate + plan.regularServiceCharge;
}