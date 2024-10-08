
// 1. 이 두 함수는 반복되는 로직을 가지고 있다. 

function tenPercentRaise(aPerson) {
    aPerson.salary = aPerson.salary.multiply(1.1);
  }
  
function fivePercentRaise(aPerson) {
    aPerson.salary = aPerson.salary.multiply(1.05);
}

 


// ---------------------------------------------

// 2. bottomBand, middleBand, topBand 위 세 개 함수의 로직이 반복됨. 위 세 함수를 하나로 묶기.

function baseCharge(usage) {
    if (usage < 0) return usd(0);
    const amount = bottomBand(usage) * 0.03 + middleBand(usage) * 0.05 + topBand(usage) * 0.07;
    return usd(amount);
}

function bottomBand(usage) {
    return Math.min(usage, 100);
}

function middleBand(usage) {
    return usage > 100 ? Math.min(usage, 200) - 100 : 0;
}

function topBand(usage) {
    return usage > 200 ? usage - 200 : 0;
}