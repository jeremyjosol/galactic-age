// Super Galactic Age Calculator
import GalacticAgeCalculator from './../src/galacticage.js';

describe('Super Galactic Age Calculator', () => {
  let humanInput;

// pass
  test('it should return the correct number passed into the parameter of a humanInput object', () => {
    const humanInput = new GalacticAgeCalculator(27); 
    expect(humanInput.earthAge).toEqual(27);
});
// pass

  beforeEach(() => {
    const earthAge = 27;
    humanInput = new GalacticAgeCalculator(earthAge);
    

});

  test('it should convert earthAge when the mercuryYears function is called and return the correct number in mercuryAge', () => {
    // const earthAge = 27;
    // const humanInput = new GalacticAgeCalculator(earthAge);
    const mercuryAge = humanInput.mercuryYears(); 
    expect(mercuryAge).toEqual(6.4799999999999995);
});

//   test('it should convert earthAge when the venusYears function is called and return the correct number in venusAge', () => {
//     const earthAge = 27;

// });

});