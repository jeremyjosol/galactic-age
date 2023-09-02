import GalacticAgeCalculator from './galacticage.js';

export default class PassedGalacticAgeCalculator extends GalacticAgeCalculator {
  constructor(earthAge, passedEarthAge){
    super(earthAge);
    this.passedEarthAge = passedEarthAge;
  }

  earthYearsPassed(){
    let earthYearsPassed = this.earthAge - this.passedEarthAge;
    return earthYearsPassed;
  }

  mercuryYearsPassed(){
    let mercuryYearsPassed = this.earthYearsPassed();
    return mercuryYearsPassed / this.mercuryAge;
  }

  venusYearsPassed(){
    let venusYearsPassed = this.earthYearsPassed();
    return venusYearsPassed / this.venusAge; 
  }

  marsYearsPassed(){
    let marsYearsPassed = this.earthYearsPassed();
    return marsYearsPassed / this.marsAge;
  }

  jupiterYearsPassed(){
    let jupiterYearsPassed = this.earthYearsPassed();
    return jupiterYearsPassed / this.jupiterAge;
  }
}