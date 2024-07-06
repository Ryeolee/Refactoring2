const invoices = require('../invoices.json');
const play = require('../plays.json');




/**
 * ## 리팩토링 순서
 * 1. 반복문 쪼개기
 * 2. 문장 슬라이드하기
 * 3. 함수 추출하기
 * 4. 변수 인라인하기
 * @param {*} invoice 
 * @param {*} plays 
 * @returns 
 */
function statement(invoice, plays) {
    return renderPainText(invoice, plays)


    function renderPainText(invoice, plays){
        let result = `청구내역 (고객명: ${invoice.customer})\n`;
        for (let perf of invoice.performances) {
            // 청구 내역을 출력한다.
            result += `${playFor(perf).name}: ${usd(amountFor(perf))} ${perf.audience}석\n`;
        }
     
        result += `총액 ${usd(totalAmount())}\n`;
        result += `적립 포인트 ${totalVolumeCedits()}점\n`;
        return result;
    }
    
    
    function totalAmount(){
        let result = 0;
        for (let perf of invoice.performances) {
            result += amountFor(perf);
        }
    
        return result;
    
    }
    
    function totalVolumeCedits(){
        let volumeCredits = 0;
        for (let perf of invoice.performances) {
            volumeCredits += volumeCreditsFor(perf)
        }
        return volumeCredits;
    }
    
    
    
    function usd(aNumber){
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(aNumber/100);
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
}





statement(invoices[0], play);