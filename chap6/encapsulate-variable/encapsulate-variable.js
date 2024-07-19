

let defaultOwnerData = {firstName: '마틴', lastName:"파울러"};

// getter 함수를 이용해 값 할당
spaceship.owner = defaultOwner();

// setter 함수를 이용해 값 할당
defaultOwner = setDefaultOwner({ firstName: '레베카', lastName: '파슨스' });

// getter 함수를 만들 때, 기존 데이터를 복사해서 가져온다.
export function defaultOwner() {
    return Object.assign({}, defaultOwnerData);
}
  
export function setDefaultOwner(arg) {
defaultOwnerData = arg;
}


// 인스턴스를 활용한 레코드 캡슐화하기
export function defaultOwner1() { return new Peron(defaultOwnerData);}
export function setDefaultOwner1() { defaultOwnerData=arg;}
class Peron{
    constructor(data){
        this._lastName=data.lastName;
        this._firstName=data.firstName;
    }

    get lastName(){return this._lastName;}
    get firstName(){return this._firstName;}
}

