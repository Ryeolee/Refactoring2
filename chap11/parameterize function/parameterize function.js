
// 1번의 두 함수를 인수를 추가하여 하나의 함수로 통합ㄴ
function raise(aPerson, factor) {
    aPerson.salary = aPerson.salary.multiply(1 + factor);
  }
  
 
// ---------------------------------------------------

// 2번 함수의 세 개를 withinBand로 묶는다. 
function baseCharge(usage) {
    if (usage < 0) return usd(0);
    const amount =
        withinBand(usage, 0, 100) * 0.03 + withinBand(usage, 100, 200) * 0.05 + withinBand(usage, 200, Infinity) * 0.07;
    return usd(amount);
}
  

function withinBand(usage, bottom, top) {
    return usage > bottom ? Math.min(usage, top - bottom) : 0;
}



