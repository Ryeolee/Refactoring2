
/**
 * 로직이 길어서 가독성이 떨어질 경우 로직을 변수화하여 처리
 * @param {*} order 
 * @returns 
 */
function price(order) {
    const basePrice = order.quantity * order.itemPrice;
    const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    const shipping = Math.min(basePrice * 0.1, 100);
  
    // 가격 = 기본가격 - 수량할인 + 배송비
    return basePrice - quantityDiscount + shipping;
  }


/**
 * 클래스를 통해 클래스 함수를 만들어 사용 가능
 */
class Order {
    constructor(aRecord){
        this._data = aRecord
    }

    get quantity(){return this._data.quantity;}
    get itemPrice(){return this._data.itemPrice;}
    get price(){return this.basePrice - this.quantityDiscount + this.shipping;}
    get basePrice(){return this.quantity * this.itemPrice;}
    get quantityDiscount(){return  Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;}
    get shipping(){return  Math.min(basePrice * 0.1, 100);}
  }