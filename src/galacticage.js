export default class GalacticAgeCalculator {
  
  constructor(earthAge, passedEarthAge, futureEarthAge){
    this.earthAge = earthAge;
    this.passedEarthAge = passedEarthAge;
    this.futureEarthAge = futureEarthAge;
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
    let earthYearsPassed = this.earthAge - this.passedEarthAge;
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

  jupiterYearsPassed(){
    let jupiterYearsPassed = this.earthYearsPassed();
    return jupiterYearsPassed / this.jupiterAge + " Jupiter years have passed";
  }

  earthYearsYetToPass(){
    let earthYearsYetToPass = this.futureEarthAge - this.earthAge;
    return earthYearsYetToPass;
  }

  mercuryYearsYetToPass(){
    let mercuryYearsYetToPass = this.earthYearsYetToPass();
    return mercuryYearsYetToPass / this.mercuryAge + " Mercury years yet to pass";
  }

  venusYearsYetToPass(){
    let venusYearsYetToPass = this.earthYearsYetToPass();
    return venusYearsYetToPass / this.venusAge + " Venus years yet to pass";
  }

  marsYearsYetToPass(){
    let marsYearsYetToPass = this.earthYearsYetToPass();
    return marsYearsYetToPass / this.marsAge + " Mars years yet to pass";
  }

  jupiterYearsYetToPass(){
    let jupiterYearsYetToPass = this.earthYearsYetToPass();
    return jupiterYearsYetToPass / this.jupiterAge + " Jupiter years yet to pass";
  }
}


  