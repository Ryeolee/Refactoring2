class Employee {
    constructor(name, typeCode) {
      this._name = name;
      this._typeCode = typeCode;
    }
  
    get name() {
      return this._name;
    }
    get type() {
      return Employee.legalTypeCodes[this._typeCode];
    }
    static get legalTypeCodes() {
      return {
        E: 'Engineer',
        M: 'Manager',
        S: 'Salesperson',
      };
    }
  }
  
  // 팩터리 함수
  function createEmployee(name, typeCode) {
    return new Employee(name, typeCode);
  }
  
  function createEngineer(name) {
    return new Employee(name, 'E');
  }
  
  // 다중 생성자 사용 시 팩토리 함수를 통해 함수명으로 가독성을 높인다.
  const candidate = createEmployee(document.name, document.empType);
  const leadEngineer = createEngineer(document.leadEngineer);