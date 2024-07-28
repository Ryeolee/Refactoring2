class ProductionPlan {
    constructor(production) {
      this._production = production;
      this._adjustments = [];
    }
  
    get production() {
      return this._production;
    }

    // 두 가지 역할을 함.
    applyAdjustment(anAdjustment) {
      this._adjustments.push(anAdjustment);
      this._production += anAdjustment.amount;
    }
  }
  