class Party {}

class Employee extends Party {
  constructor(name, id, monthlyCost) {
    super();
    this._id = id;
    this._name = name;
    this._monthlyCost = monthlyCost;
  }
}





// 서브 클래스들에서의 공통 데이터, 로직이 있다. 이것이 생성자에 있다면, super()를 통해 접근한다.
class Party {
    constructor(name){
      this._name = name;
    }
  }
  
class Employee extends Party {
    constructor(name, id, monthlyCost) {
        super(name);
        this._id = id;
        this._monthlyCost = monthlyCost;
    }
}
 