

// -23이라는 숫자로 에러를 전파, 다른 곳에서도 에러가 전파된다.
function localShippingRules(country) {
    const data = countryData.shippingRules[country];
  
    if (data) return new ShippingRules(data);
    else return -23;
  }
  
function calculateShippingCosts(anOrder) {
    //관련 없는 코드
    const shippingRules = localShippingRules(anOrder.country);

    if (shippingRules < 0) return shippingRules; // 오류 전파
    // 더 관련 없는 코드
}
  
  const status = calculateShippingCosts(orderData);
  if (status < 0) errorList.push({ order: orderData, errorCode: status });