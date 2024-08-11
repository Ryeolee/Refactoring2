class Person {
    get genderCode() {return "X";}
  }
  class Male extends Person {
    get genderCode() {return "M";}
  }
  class Female extends Person {
    get genderCode() {return "F";}
  }


//--------------------------------------------------------------

// 서브 클래스를 사용하지 않고 사용.

  class Person {
    get genderCode() {return this._genderCode;}
  }

  function createPerson(aRecord){
    switch(aRecord.gener){
        case 'M': return new Person(aRecord.name, "M");
        case 'F': return new Person(aRecord.name, "F");
        default: return new Person(aRecord.name,"X" )
    }
  }
