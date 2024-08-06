


const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;


// withinRange함수를 호출할 때, low, high 두 가지로 나누어 함수를 호출할 수 있다.
if (aPlan.withinRange(low, high)) {
  alert.push('방 온도가 지정범위를 벗어났습니다.');
}

class HeatingPlan {
  withinRange(bottom, top) {
  }
}