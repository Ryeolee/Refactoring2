checkForMiscreants(people);

function checkForMiscreants(people) {  // 플래그를 삭제하며, 두 조건 발견 시 return을 통해 함수를 종료한다.
  for (const p of people) {
      if (p === '조커') {
        sendAlert();
        return;
      }
      if (p === '사루만') {
        sendAlert();
        return;
      }
    
  }
}

// Or

function checkForMiscreantsAlt(people) {
  if (people.some((p) => ['조커', '사루만'].includes(p))) sendAlert();   //집합 연산을 통한 코드 간소화
}