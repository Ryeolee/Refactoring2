class Employee {
}

class Salesman extends Employee {
  private String name;
}

class Engineer extends Employee {
  private String name;
}

class Employee {
  protected String name;
}

class Salesman extends Employee {
}

class Engineer extends Employee {
}

// 서브 클래스 필드에 공통으로 쓰이는 것은 상위 클래스 필드로 올린다.
