

export function statement(invoice, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `청구내역 (고객명: ${invoice.customer})\n`;
    for (let perf of invoice.performances) {

        volumeCredits += volumeCreditsFor(perf)

        // 청구 내역을 출력한다.
        result += `${play.name}: ${format(amountFor(perf)/ 100)} ${perf.audience}석\n`;
        totalAmount += amountFor(perf);
    }
    result += `총액 ${format(totalAmount / 100)}\n`;
    result += `적립 포인트 ${volumeCredits}점\n`;
  
    return result;
}

function format(aNumber){
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(aNumber);
}


function volumeCreditsFor(perf){
      let result = 0;
      result += Math.max(perf.audience - 30, 0);
  
      // 희극 관객 5명마다 추가 포인트를 제공한다.
      if ('comedy' === play.type) {
        result += Math.floor(perf.audience / 5);
      }
      return result;
}

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


