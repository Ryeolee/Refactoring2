


function createEmployee(name, type) {
    return new Employee(name, type);
  }


// Employee를 여러 서브 클래스로 두어 구분 후 인스턴스를 반환
function createEmployee(name, type) {
    switch (type) {
        case "engineer": return new Engineer(name);
        case "salesman": return new Salesman(name);
        case "manager":  return new Manager (name);
    }
}
