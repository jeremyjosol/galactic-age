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
}
