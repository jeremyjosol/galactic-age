export default class GalacticAgeCalculator {
  
  constructor(earthAge){
    this.earthAge = earthAge;
  }

  mercuryYears(){
    const mercuryAge = 0.24;
    return this.earthAge * mercuryAge;
  }

  venusYears(){
    
  }

}