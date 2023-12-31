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
}