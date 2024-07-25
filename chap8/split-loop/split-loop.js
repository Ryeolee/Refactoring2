


// 서로 관련 없는데 같은 반복문을 사용하는 경우는 분리하고 파이프 라인을 함수를 사용한다.
function fn() {
    return `최연소: ${youngestAge()}, 총급여: ${totalSalary}`;
  
    function totalSalary() {
      return people.reduce((total, p) => total + p.salary, 0);
    }
  
    function youngestAge() {
      return Math.min(...people.map((p) => p.age));
    }
  }