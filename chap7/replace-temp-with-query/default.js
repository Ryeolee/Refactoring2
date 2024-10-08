class Order {
    constructor(quantity, item) {
      this._quantity = quantity;
      this._item = item;
    }
  
    get price() {
      var basePrice = this._quantity * this._item.price;   //  함수 로직에서 변하지 않는 변수 
      var discountFactor = 0.98;
  
      if (basePrice > 1000) {
        discountFactor = -0.03;
      }
  
      return basePrice * discountFactor;
    }
  }