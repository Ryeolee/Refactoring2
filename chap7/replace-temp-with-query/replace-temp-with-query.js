class Order {
    constructor(quantity, item) {
      this._quantity = quantity;
      this._item = item;
    }
  
    
    // 최종 값 함수
    get price() {
      return this.basePrice * this.discountFactor;
    }
  

    // 변하지 않는 변수를 함수로 추출
    get basePrice() {
      return this._quantity * this._item.price;
    }
  
    // 할인 로직 추출
    get discountFactor() {
      var discountFactor = 0.98;
  
      if (this.basePrice > 1000) {
        discountFactor = -0.03;
      }
      return discountFactor;
    }
  }