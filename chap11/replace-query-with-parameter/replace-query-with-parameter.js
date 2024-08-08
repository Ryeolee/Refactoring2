

const thermostat = {
    selectedTemperature: 15,
    currentTemperature: 20,
  };
  // 호출부에서 전역객체의 값을 통해 처리한다.
  if (thePlan.targetTemperature(thermostat.selectedTemperature) > thermostat.currentTemperature) setToHeat();
  else if (thePlan.targetTemperature(thermostat.selectedTemperature) < thermostat.currentTemperature) setToCool();
  else setOff();
  
  class HeatingPlan {
    targetTemperature(selectedTemperature) { // 함수가 전역 변수에 의존하는 것을 막는다.
      if (selectedTemperature > this._max) return this._max;
      else if (selectedTemperature < this._min) return this._min;
      else return selectedTemperature;
    }
  }