


// 클라이언트1
const aReading1 = acquireReading()
const baseCharge = baseRate(aReading1.month, aReading1.year) * aReading1.quantity;


// 클라이언트1.1
const rawReading11 = acquireReading();
const aReading11 = new Reading(rawReading11);
const baseCharge11 = aReading11.baseCharge;   // 위 처럼 get 함수를 사용 시 필드인시 함수호출인지 알 수 없다. 이를 단일 접근 원칙으로 한다.



// 클라이언트 2
const aReading2 = acquireReading()
const base = (baseRate(aReading2.month, aReading2.year) * aReading2.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(aReading2.year));



// 클라이언트 3
const rawReading3 = acquireReading()
const aReading3 = new Reading(rawReading3);
const taxableCharge3 = aReading3.taxableCharge;