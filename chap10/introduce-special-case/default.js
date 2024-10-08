class Site {
    constructor(customer) {
        this._customer = customer;
    }
  
    get customer() {
      return this._customer;
    }
  }
  
  class Customer {
    constructor() {}
  
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
  }
    // 클라이언트의 aCUstomer === '미확인 고객' 위 조건이 반복되므로 하나로 묶는다.


  // client1
  const aCustomer = site.customer;
  let customerName;
  if (aCUstomer === '미확인 고객') { 
    customerName = '거주자';
  } else {
    customerName = aCustomer.name;
  }
  
  // client2
  const plan = aCustomer === '미확인 고객' ? registry.billingPlans.basic : aCustomer.billingPlan;
  
  // client3
  if (aCustomer !== '미확인 고객') {
    aCustomer.billingPlan = newPlan;
  }
  
  // client4
  const weeksDelinquent = aCustomer === '미확인 고객' ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;