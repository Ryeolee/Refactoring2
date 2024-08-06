

class Order {

    get finalPrice() {
      const basePrice = this.quantity * this.itemPrice;
      return this.discountPrice(basePrice);
    }
  
    get discountLevel() {
      return this.quantity > 100 ? 2 : 1;
    }
  
    // 위 함수에서 조건을 나눠 discountLevel 함수로 로직 구현
    discountPrice(basePrice) {
      switch (this.discountLevel) {
        case 1:
            return basePrice * 0.95;
        case 2:
            return basePrice * 0.9;
      }
    }
}  