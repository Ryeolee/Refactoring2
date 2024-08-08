


class ChargeCalculator {
    constructor(customer, usage, provider) {
      this._customer = customer;
      this._usage = usage;
      this._provider = provider;
    }


    // 복잡한 로직이 아닌 때는 함수로 변경하는 것도 좋은 생각
    get baseCharge() {
      return this._customer.baseRate * this._usage;
    }
    get charge() {
      return this.baseCharge + this._provider.connectionCharge;
    }
  }
  
  const monthCharge = new ChargeCalculator(customer, usage, provider).charge;