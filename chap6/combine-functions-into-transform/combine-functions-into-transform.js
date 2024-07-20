// 출력 정보는 여러 곳에서 사용될 수 있는데, 그러다 보면 이 정보가 사용되는 곳마다 같은 도출 로직이 반복되기도 한다.
// 변환 함수는 원본 데이터를 입력받아서 필요한 정보를 모두 도출한 뒤, 각각을 출력 데이터의 필드에 넣어 반환한다.

// 원본 데이터가 코드 안에서 갱신될 때는 클래스로 묶는 편이 낫다.
// 변환 함수로 묶으면 가공한 데이터를 새로운 레코드에 저장하므로, 원본 데이터가 수정되면 일관성이 깨질 수 있다.


function base(aReading) {} 
function taxableCharge(aReading) {}


// 여러 반복되는 로직을 한 번에 묶는다. 그러므로 중복 코드를 줄일 수 있다.
function enrichReading(argReading) { 
    const aReading = _.cloneDeep(argReading);   // 깊은 복사 라이브러리
    aReading.baseCharge = base(aReading); 
    aReading.taxableCharge = taxableCharge(aReading); 
    return aReading; 
}

// 클라이언트
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = aReading.taxableCharge;
