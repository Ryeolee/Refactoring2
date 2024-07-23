class Customer {
    constructor(name, discountRate) {
      this._name = name;
      // this._discountRate = discountRate;
      this._contract = new CustomerContract(dateToday());  // 순서를 바꿔야함.
      this._setDiscountRate(discountRate);
    }
  
    get discountRate() {
      return this._discountRate;
    }
    _setDiscountRate(aNumber) {   //  CustomerContrac필드에 값을 세팅
      this._contract._discountRate = aNumber;
    }
    becomePreferred() {
      this._setDiscountRate(this.discountRate + 0.03);
    }
    applyDiscount(amount) {
      return amount.subtract(amount.multiply(this.discountRate));
    }
  }
  
  class CustomerContract {
    constructor(startDate, discountRate) {
      this._startDate = startDate;
      this._discountRate = discountRate;
    }
  
    get discountRate() {
      return this._discountRate;
    }
    set discountRate(arg) {
      this._discountRate = arg;
    }
  }