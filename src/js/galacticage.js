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

//   earthYearsYetToPass(){
//     let earthYearsYetToPass = this.futureEarthAge - this.earthAge;
//     return earthYearsYetToPass;
//   }

//   mercuryYearsYetToPass(){
//     let mercuryYearsYetToPass = this.earthYearsYetToPass();
//     return mercuryYearsYetToPass / this.mercuryAge + " Mercury years yet to pass";
//   }

//   venusYearsYetToPass(){
//     let venusYearsYetToPass = this.earthYearsYetToPass();
//     return venusYearsYetToPass / this.venusAge + " Venus years yet to pass";
//   }

//   marsYearsYetToPass(){
//     let marsYearsYetToPass = this.earthYearsYetToPass();
//     return marsYearsYetToPass / this.marsAge + " Mars years yet to pass";
//   }

//   jupiterYearsYetToPass(){
//     let jupiterYearsYetToPass = this.earthYearsYetToPass();
//     return jupiterYearsYetToPass / this.jupiterAge + " Jupiter years yet to pass";
//   }
// }


  