export default class GalacticAgeCalculator {
  
  constructor(earthAge, passedEarthAge){
    this.earthAge = earthAge;
    this.passedEarthAge = passedEarthAge;
    this.mercuryAge = 0.24;
    this.venusAge = 0.62;
    this.marsAge = 1.88;
    this.jupiterAge = 11.86;
  }

  mercuryYears(){
    return this.earthAge / this.mercuryAge;
  }

  venusYears(){
    return this.earthAge / this.venusAge;
  }

  marsYears(){
    return this.earthAge / this.marsAge;
  }

  jupiterYears(){
    return this.earthAge / this.jupiterAge;
  }

  earthYearsPassed(){
    let earthYearsPassed = this.earthAge - this.passedEarthAge
    return earthYearsPassed;
  }

  mercuryYearsPassed(){
    let mercuryYearsPassed = this.earthYearsPassed();
    return mercuryYearsPassed / this.mercuryAge + " Mercury years have passed";
  }

  venusYearsPassed(){
    let venusYearsPassed = this.earthYearsPassed();
    return venusYearsPassed / this.venusAge + " Venus years have passed";
  }

  marsYearsPassed(){
    let marsYearsPassed = this.earthYearsPassed();
    return marsYearsPassed / this.marsAge + " Mars years have passed";
  }
}


  