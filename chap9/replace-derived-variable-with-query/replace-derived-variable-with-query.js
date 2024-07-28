class ProductionPlan {
    constructor(production) {
      this._production = production;
      this._adjustments = [];
    }
  
    applyAdjustment(anAdjustment) {
      this._adjustments.push(anAdjustment);  // 하나의 역할을 함.
    }
  
    // get 함수에 로직을 추가
    get production() {
      return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
    }
  }