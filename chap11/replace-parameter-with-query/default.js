

// 함수 중 if-else 로직을 함수로 추출하기
class Order {
    get finalPrice() {
      const basePrice = this.quantity * this.itemPrice;
      let discountLevel;
  
      if (this.quantity > 100) discountLevel = 2;
      else discountLevel = 1;
  
      return this.discountPrice(basePrice, discountLevel);
    }
  
    discountPrice(basePrice, discountLevel) {
      switch (discountLevel) {
        case 1:
          return basePrice * 0.95;
        case 2:
      }
      
    }
}