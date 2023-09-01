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
    expect(mercuryAge).toEqual(112.5);
});
//test 3 pass
  test('it should convert earthAge when the venusYears function is called and return the correct number in venusAge', () => {
    const venusAge = humanInput.venusYears();
    expect(venusAge).toEqual(43.54838709677419);
});
//test 4 pass
  test('it should convert earthAge when the marsYears function is called and return the correct number in marsAge', () => {
    const marsAge = humanInput.marsYears();
    expect(marsAge).toEqual(14.361702127659575);
});
//test 5 pass
  test('it should convert earthAge when the jupiterYears function is called and return the correct number in jupiterAge', () => {
    const jupiterAge = humanInput.jupiterYears();
    expect(jupiterAge).toEqual(2.2765598650927488);
});
});

describe('Super Galactic Passed Birthdays', () => {
  const earthAge = 27;
  const pastEarthAge = 10;
//test 6 pass
  test('it should return the difference of two parameters', () => {
  const ageDifference = earthAge - pastEarthAge;
  expect(ageDifference).toEqual(17);
});
//test 7
  test('it should return the difference of two parameters and multiply it by mercuryYears', () => {
  const ageDifference = earthAge - pastEarthAge;
  let humanInput = new GalacticAgeCalculator(ageDifference);
  const passedBirthdays = humanInput.mercuryYears()




  

});

});