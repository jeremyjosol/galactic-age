import GalacticAgeCalculator from './galacticage.js';

export default class YearsYetToPassCalculator extends GalacticAgeCalculator {
  constructor(earthAge, futureEarthAge){
    super(earthAge);
    this.futureEarthAge = futureEarthAge;
  }

  earthYearsYetToPass(){
    let earthYearsYetToPass = this.futureEarthAge - this.earthAge;
    return earthYearsYetToPass;
  }

  mercuryYearsYetToPass(){
    let mercuryYearsYetToPass = this.earthYearsYetToPass();
    return mercuryYearsYetToPass / this.mercuryAge;
  }

  venusYearsYetToPass(){
    let venusYearsYetToPass = this.earthYearsYetToPass();
    return venusYearsYetToPass / this.venusAge;
  }

  marsYearsYetToPass(){
    let marsYearsYetToPass = this.earthYearsYetToPass();
    return marsYearsYetToPass / this.marsAge;
  }

  jupiterYearsYetToPass(){
    let jupiterYearsYetToPass = this.earthYearsYetToPass();
    return jupiterYearsYetToPass / this.jupiterAge;
  }
}