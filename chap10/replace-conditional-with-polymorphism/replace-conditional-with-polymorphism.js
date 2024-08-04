


function plumages(birds) {
    return new Map(birds.map((b) => createBird(b)).map((bird) => [bird.name, bird.plumage]));
  }
  
  function speed(birds) {
    return new Map(birds.map((b) => createBird(b)).map((bird) => [bird.name, bird.airSpeedVelocity]));
  }
  

  // 각 경우의 따라 클래스를 실행
  function createBird(bird) {
    switch (bird.type) {
      case 'EuropeanSwallow':
        return new EuropeanSwallow(bird);
      case 'AfricanSwallow':
        return new AfricanSwallow(bird);
      case 'NorwegianBlueParrot':
        return new NorwegianBlueParrot(bird);
      default:
        return new Bird(bird);
    }
  }
  

  // 최상위 함수
  class Bird {
    constructor(birdObject) {
      Object.assign(this, birdObject);
    }
  
    get plumage() {
      return '알 수 없다';
    }
    get airSpeedVelocity() {
      return null;
    }
  }
  
  // 각 클래스로 나눔으로써 각 로직을 구분할 수 있고, 수정에는 막혀있고, 확장에는 열려있게 된다.

  // 해당 경우의 수/ 서브 클래스
  class EuropeanSwallow extends Bird {
    get plumage() {
      return '보통이다';
    }
    get airSpeedVelocity() {
      return 35;
    }
  }

  // 해당 경우의 수/ 서브 클래스
  class AfricanSwallow extends Bird {
    get plumage() {
      return this.numberOfCoconuts > 2 ? '지쳤다' : '보통이다';
    }
    get airSpeedVelocity() {
      return 40 - 2 * this.numberOfCoconuts;
    }
  }

  // 해당 경우의 수/ 서브 클래스
  class NorwegianBlueParrot extends Bird {
    get plumage() {
      return this.voltage > 100 ? '그을렸다' : '예쁘다';
    }
    get airSpeedVelocity() {
      return this.isNailed ? 0 : 10 + this.voltage / 10;
    }
  }