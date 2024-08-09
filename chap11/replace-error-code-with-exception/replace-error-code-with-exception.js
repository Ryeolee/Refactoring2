

class OrderProcessingError extends Error {
    constructor(errorCode) {
      super(`주문처리 오류: ${errorCode}`);
      this.code = errorCode;
    }
    get name() {
      return 'OrderProcessingError';
    }
  }
  

  // 클래스를 만들고, 예외 시 에러를 발생시킨다. -> 에러가 발생한 곳에서 에러를 끝낸다.
  function localShippingRules(country) {
    const data = countryData.shippingRules[country];
  
    if (data) return new ShippingRules(data);
    else throw new OrderProcessingError(-23);
  }
  
  function calculateShippingCosts(anOrder) {
    //관련 없는 코드
    const shippingRules = localShippingRules(anOrder.country);
    // 더 관련 없는 코드
  }
  
  try {
    calculateShippingCosts(orderData);
  } catch (e) {
    if (e instanceof OrderProcessingError) {
      errorList.push({ order: orderData, errorCode: e.code });
    } else {
      throw e;
    }
  }