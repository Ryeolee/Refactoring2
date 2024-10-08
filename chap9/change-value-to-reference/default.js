

// Order 객체 자체가 Customer에 따라 가변이 됨.
class Order {
    constructor(data) {
      this._number = data.number;
      this._customer = new Customer(data.customer); // Customer 객체는 그대로 둠.
    }
  
    get customer() {
      return this._customer;
    }
  }
  
  class Customer {
    constructor(id) {
      this._id = id;
    }
  
    get id() {
      return this._id;
    }
  }