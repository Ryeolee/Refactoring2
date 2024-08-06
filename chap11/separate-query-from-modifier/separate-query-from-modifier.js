

// 특정 조건을 걸어 그것이 아닐 경우 반복되는 함수를 실행하도록 한다.
function alertForMiscreant(people) {
    if (findMiscreant(people) !== '') setOffAlarms();
  }
  

// 반복 함수 제거
function findMiscreant(people) {
for (const p of people) {
    if (p === '조커') {
    return ' 조커';
    }
    if (p === '사루만') {
    return ' 사루만';
    }
}
return '';
}

const found = findMiscreant(people);
alertForMiscreant(people);