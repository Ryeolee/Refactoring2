

// 각 조건문 후 반복되는 함수 setOffAlarms()가 있다.
function alertForMiscreant(people) {
    for (const p of people) {
      if (p === '조커') {
        setOffAlarms();
        return ' 조커';
      }
      if (p === '사루만') {
        setOffAlarms();
        return ' 사루만';
      }
    }
    return '';
  }
  
  const found = alertForMiscreant(people);