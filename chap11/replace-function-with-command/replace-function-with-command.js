


// execute를 객체 안의 캡슐화로 보호, 생성자 매개변수를 통해 값을 전달
function score(candidate, medicalExam, scoringGuide) {
    return new Scorer(candidate, medicalExam, scoringGuide).execute;
  }
  
  class Scorer {
    constructor(candidate, medicalExam, scoringGuide) {
      this._candidate = candidate;
      this._medicalExam = medicalExam;
      this._scoringGuide = scoringGuide;
    }
  
    execute() {
      this._result = 0;
      this._healthLevel = 0;
      this._hightMedicalRiskFlag = false;
  
      this.scoreSmoking();
      this._certificationGrade = 'regular';
      if (this._scoringGuide.stateWithLowCertification(this._candidate.originState)) {
        this._certificationGrade = 'low';
        this._result -= 5;
      }
      // ...
  
      this._result -= Math.max(this._healthLevel - 5, 0);
      return this._result;
    }
  
    scoreSmoking() {
      if (this._medicalExam.isSmoker) {
        this._healthLevel += 10;
        this._hightMedicalRiskFlag = true;
      }
    }
  }
