// 코드에서 바로 컬렉션에 접근하는게 아닌 클래스나 모듈을 통해 
// 외부에서 접근 가능한 인터페이스를 만들어 정해진 방법에 의해서만 
// 컬렉션을 읽거나 수정하거나 할 수 있도록 만드는걸 컬렉션 캡슐화로 볼 수 있다.

// Person 클래스를 통해 Course 클래스를 조절한다.
class Person {
    constructor(name) {
      this._name = name;
      this._courses = [];
    }
  
    get name() {
      return this._name;
    }
    get courses() {
      return this._courses.slice();
    }
    set courses(aList) {
      this._courses = aList.slice(); // 얕은 복사
    }
    addCourse(aCourse) {               // 얕은 복사에 수정할 수 있다.
      this._courses.push(aCourse);
    }

    removeCourse(
      aCourse,
      fnIfAbsent = () => {
        throw new RangeError();
      }
    ) {
      const index = this._courses.indexOf(aCourse);
  
      if (index === -1) fnIfAbsent();
      else this._courses.splice(index, 1);
    }
  }
  
  class Course {
    constructor(name, isAdvanced) {
      this._name = name;
      this._isAdvanced = isAdvanced;
    }
  
    get name() {
      return this._name;
    }
    get isAdvanced() {
      return this._isAdvanced;
    }
  }
  
  const aPerson = new Person('kim');
  const numAdvancedCourses = aPerson.courses.filter((c) => c.isAdvanced.length);
  
  for (const name of readBasicCourseNames(filename)) {
    aPerson.addCourse(new Course(name, false))
  }