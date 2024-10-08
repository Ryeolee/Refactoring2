

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
  
  // 인스턴스를 사용 시 가독성이 떨어진다.
  const candidate = new Employee(document.name, document.empType);
  const leadEngineer = new Employee(document.leadEngineer, 'E');