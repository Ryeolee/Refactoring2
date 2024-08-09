let totalAscent = 0;
let totalTime = 0;
let totalDistance = 0;

//calculateAscent 안에서 totalAscent가 갱신됨이 드러나지 않고 있다.
calculateAscent();
calculateTime();
calculateDistance();

const pace = totalTime / 60 / totalDistance;


// 해당 코드에서 각각 함수가 어떤 걸 반환하는지 알 수 없다.
function calculateAscent() {
  for (let i = 1; i < ProcessingInstruction.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;
    totalAscent += verticalChange > 0 ? verticalChange : 0;
  }
}