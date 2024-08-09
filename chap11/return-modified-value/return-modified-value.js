const totalAscent = calculateAscent();
const totalTime = calculateTime();
const totalDistance = calculateDistance();

const pace = totalTime / 60 / totalDistance;


// 함수에 반환 값을 추가하여 함수의 결과가 어떤 연산을 했는지 표현한다.
function calculateAscent() {
  let result = 0;

  for (let i = 1; i < ProcessingInstruction.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;
    result += verticalChange > 0 ? verticalChange : 0;
  }
  return result;
}