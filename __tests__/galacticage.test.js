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
//test 4 pass
  test('it should convert earthAge when the marsYears function is called and return the correct number in marsAge', () => {
    const marsAge = humanInput.marsYears();
    expect(marsAge).toEqual(50.76);
});
//test 5 pass
  test('it should convert earthAge when the jupiterYears function is called and return the correct number in jupiterAge', () => {
    const jupiterAge = humanInput.jupiterYears();
    expect(jupiterAge).toEqual(320.21999999999997);
});
});

describe('Super Galactic Passed Birthdays', () => {
  let humanInput;
  const earthAge = 27;
  const pastEarthAge = 10;
//test 6
  test('it should return the difference of two parameters');
  const ageDifference = earthAge - pastEarthAge;
  expect(ageDifference).toEqual(17);
  
});