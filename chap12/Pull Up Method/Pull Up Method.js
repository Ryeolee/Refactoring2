class Employee {}

class Salesman extends Employee {
  get name() {}
}

class Engineer extends Employee {
  get name() {}
}




// 서브 클래스의 있는 공통 로직의 함수가 있을 경우 함수를 상위 클래스에 올린다.
class Employee {
    get name() {}
  }
  
  class Salesman extends Employee {}
  class Engineer extends Employee {}
  

