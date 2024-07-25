
// 문맥이 비슷한 문장끼리 묶는다.
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retrieveOrder();
let charge;