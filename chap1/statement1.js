
/**
 * 
 * @param {*} invoice  공연표
 * @param {*} plays    공연 정보
 * @returns 
 */
export function statement(invoice, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `청구내역 (고객명: ${invoice.customer})\n`;
    const format = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
      .format;
  
    for (let perf of invoice.performances) {
      const play = plays[perf.playID];
      let thisAmount = 0;
  
      switch (play.type) {
        case 'tragedy':
          thisAmount = 40_000;
  
          if (perf.audience > 30) {
            thisAmount += 1_000 * (perf.audience - 30);
          }
          break;
        case 'comedy':
          thisAmount = 30_000;
  
          if (perf.audience > 20) {
            thisAmount += 10_000 + 500 * (perf.audience - 20);
          }
          thisAmount += 300 * perf.audience;
          break;
  
        default:
          throw new Error(`알 수 없는 장르: ${play.type}`);
      }
  
      // 포인트를 적립한다.
      volumeCredits += Math.max(perf.audience - 30, 0);
  
      // 희극 관객 5명마다 추가 포인트를 제공한다.
      if ('comedy' === play.type) {
        volumeCredits += Math.floor(perf.audience / 5);
      }
  
      // 청구 내역을 출력한다.
      result += `${play.name}: ${format(thisAmount / 100)} ${perf.audience}석\n`;
      totalAmount += thisAmount;
    }
    result += `총액 ${format(totalAmount / 100)}\n`;
    result += `적립 포인트 ${volumeCredits}점\n`;
  
    return result;
  }


  // 1. 함수 쪼개기 -> 전체 동작을 나눌 수 있는 부분 찾기

  // statement()
  // amountFor()

  export function statement(invoice, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `청구내역 (고객명: ${invoice.customer})\n`;
    const format = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
      .format;
  
    for (let perf of invoice.performances) {
      const play = plays[perf.playID];
      let thisAmount = amountFor(perf, play)
  
      // 포인트를 적립한다.
      volumeCredits += Math.max(perf.audience - 30, 0);
  
      // 희극 관객 5명마다 추가 포인트를 제공한다.
      if ('comedy' === play.type) {
        volumeCredits += Math.floor(perf.audience / 5);
      }
  
      // 청구 내역을 출력한다.
      result += `${play.name}: ${format(thisAmount / 100)} ${perf.audience}석\n`;
      totalAmount += thisAmount;
    }
    result += `총액 ${format(totalAmount / 100)}\n`;
    result += `적립 포인트 ${volumeCredits}점\n`;
  
    return result;

    function amountFor(aPerformance) {
        let result = 0;
    
        switch (playFor(aPerformance).type) {
          case 'tragedy':
            result = 40_000;
    
            if (aPerformance.audience > 30) {
              result += 1_000 * (aPerformance.audience - 30);
            }
            break;
          case 'comedy':
            result = 30_000;
    
            if (aPerformance.audience > 20) {
              result += 10_000 + 500 * (aPerformance.audience - 20);
            }
            result += 300 * aPerformance.audience;
            break;
    
          default:
            throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
        }
        return result;
      }
  }


  // 2. 필요없는 변수 제거(변수 인라인)
  // 함수에서 동작할 때 값 변환이 없는 변수를 유의하여 불필요한 변수를 제거한다.

  export function statement(invoice, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `청구내역 (고객명: ${invoice.customer})\n`;
    const format = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
      .format;
  
    for (let perf of invoice.performances) {
      // 포인트를 적립한다.
      volumeCredits += Math.max(perf.audience - 30, 0);
  
      // 희극 관객 5명마다 추가 포인트를 제공한다.
      if ('comedy' === play.type) {
        volumeCredits += Math.floor(perf.audience / 5);
      }
  
      // 청구 내역을 출력한다.
      result += `${play.name}: ${format(amountFor(perf)/ 100)} ${perf.audience}석\n`;
      totalAmount += amountFor(perf);
    }
    result += `총액 ${format(totalAmount / 100)}\n`;
    result += `적립 포인트 ${volumeCredits}점\n`;
  
    return result;


    function playFor(aPerformance) {
        return plays[aPerformance.playID];
      }



    function amountFor(aPerformance) {
        let result = 0;
    
        switch (playFor(aPerformance).type) {
          case 'tragedy':
            result = 40_000;
    
            if (aPerformance.audience > 30) {
              result += 1_000 * (aPerformance.audience - 30);
            }
            break;
          case 'comedy':
            result = 30_000;
    
            if (aPerformance.audience > 20) {
              result += 10_000 + 500 * (aPerformance.audience - 20);
            }
            result += 300 * aPerformance.audience;
            break;
    
          default:
            throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
        }
        return result;
      }
  }

