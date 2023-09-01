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

