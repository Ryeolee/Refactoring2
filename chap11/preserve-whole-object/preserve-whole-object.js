

// withinRange함수를 호출 시 하나의 객체를 넘겨주어 매개변수를 줄인다.
if (aPlan.withinRange(aRoom.daysTempRange)) {
    alert.push('방 온도가 지정범위를 벗어났습니다.');
  }
  
  class HeatingPlan {
    withinRange(aNumberRange) {
      return aNumberRange.low >= this._temperatureRange.low && aNumberRange.high <= this._temperatureRange.high;
    }
}  