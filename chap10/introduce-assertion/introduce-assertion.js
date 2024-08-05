class Customer {
    applyDiscount(aNumber) {
      if (!this.discountRate) {
        return aNumber;
      } else {
        return aNumber - this.discountRate * aNumber;
      }
    }
    set discountRate(aNumber) {
      assert(aNumber === null || this.discountRate >= 0);  // 값의 유효성 검사를 할 수 있다.
      this._discountRate = aNumber;
    }
  }