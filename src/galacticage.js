export default class GalacticAgeCalculator {
  
  constructor(earthAge){
    this.earthAge = earthAge;
  }

  mercuryYears(){
    const mercuryAge = 0.24;
    return this.earthAge * mercuryAge;
  }

  venusYears(){
    const venusAge = 0.62;
    return this.earthAge * venusAge;
  }

  marsYears(){
    const marsAge = 1.88;
    return this.earthAge * marsAge;
  }

  jupiterYears(){
    const jupiterAge = 11.86;
    return this.earthAge * jupiterAge;
  }
}