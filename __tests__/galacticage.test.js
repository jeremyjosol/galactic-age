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
  const passedEarthAge = 10;
//test 6 pass
  test('it should return the difference of two parameters', () => {
  const ageDifference = earthAge - passedEarthAge;
  expect(ageDifference).toEqual(17);
  });
//test 7 pass
  test('it should return the difference of two parameters and divide it by mercuryYears', () => {
  const ageDifference = earthAge - passedEarthAge;
  let humanInput = new GalacticAgeCalculator(ageDifference);
  const passedBirthday = humanInput.mercuryYears();
  expect(passedBirthday).toEqual(70.83333333333334);
  });
//test 8 pass
  test('it should return the correct amount of earthYearsPassed when called', () => {
  let humanInput = new GalacticAgeCalculator(earthAge, passedEarthAge);
  const earthYearsPassed = humanInput.earthYearsPassed();
  expect(earthYearsPassed).toEqual(17);
  });
});

describe('Super Galactic Passed Planetary Birthdays', () => {
  let humanInput;
  const earthAge = 27;
  const passedEarthAge = 10;

  beforeEach(() => {
    humanInput = new GalacticAgeCalculator(earthAge, passedEarthAge);
  });
//test 9 pass
  test('it should return the correct amount of mercuryYearsPassed when called', () => {
    humanInput = new GalacticAgeCalculator(earthAge, passedEarthAge);
    const mercuryYearsPassed = humanInput.mercuryYearsPassed();
    expect(mercuryYearsPassed).toEqual(70.83333333333334 + " Mercury years have passed");
  });
//test 10 pass
  test('it should return the correct amount of venusYearsPassed when called', () => {
    const venusYearsPassed = humanInput.venusYearsPassed();
    expect(venusYearsPassed).toEqual(27.419354838709676 + " Venus years have passed");
  });
//test 11
  test('it should return the correct amount of marsYearsPassed when called', () => {
    const marsYearsPassed = humanInput.marsYearsPassed();
    expect(marsYearsPassed).toEqual(9.042553191489363 + " Mars years have passed");
  });

});

