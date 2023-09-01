// Super Galactic Age Calculator
import GalacticAgeCalculator from './../src/galacticage.js';

describe('Super Galactic Age Calculator', () => {
  let humanInput;
//test 1 pass
  test('it should return the correct number passed into the parameter of a humanInput object', () => {
    const humanInput = new GalacticAgeCalculator(27); 
    expect(humanInput.earthAge).toEqual(27);
});

  beforeEach(() => {
    const earthAge = 27;
    humanInput = new GalacticAgeCalculator(earthAge);
});
//test 2 pass
  test('it should convert earthAge when the mercuryYears function is called and return the correct number in mercuryAge', () => {
    const mercuryAge = humanInput.mercuryYears(); 
    expect(mercuryAge).toEqual(6.4799999999999995);
});
//test 3 pass
  test('it should convert earthAge when the venusYears function is called and return the correct number in venusAge', () => {
    const venusAge = humanInput.venusYears();
    expect(venusAge).toEqual(16.74);
});
//test 4
  test('it should convert earthAge when the marsYears function is called and return the correct number in marsAge', () => {
    const marsAge = humanInput.marsYears();
    expect(marsAge).toEqual(50.76);
});

});