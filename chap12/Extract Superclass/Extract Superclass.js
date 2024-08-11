

// 필드 name, annualConst 함수가 공통됨.
class Department {
    get totalAnnualCost() {}
    get name() {}
    get headCount() {}
  }
  
  class Employee {
    get annualCost() {}
    get name() {}
    get id() {}
  }


// -----------------------------------------------------------------

class Party {
    get name() {}
    get annualCost() {}
  }
  
  class Department extends Party {
    constructor(name, id, monthlyCost){
        super(name)
        this._id=id;
        this._monthlyCost=monthlyCost
    }
    get annualCost() {}
    get headCount() {}
  }
  
  class Employee extends Party {
    constructor(name, staff){
        super(name)
        this._staff=staff;
       
    }
    get annualCost() {}
    get id() {}
  }

