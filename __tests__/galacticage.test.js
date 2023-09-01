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
//test 11 pass
  test('it should return the correct amount of marsYearsPassed when called', () => {
    const marsYearsPassed = humanInput.marsYearsPassed();
    expect(marsYearsPassed).toEqual(9.042553191489363 + " Mars years have passed");
  });
//test 12 pass
  test('it should return the correct amount of jupiterYearsPassed when called', () => {
    const jupiterYearsPassed = humanInput.jupiterYearsPassed();
    expect(jupiterYearsPassed).toEqual(1.4333895446880272 + " Jupiter years have passed")
  });
});

describe('Super Galactic Yet To Pass Planetary Birthdays', () => {
  let humanInput;
  
  beforeEach(() => {
    const earthAge = 27;
    const futureEarthAge = 75;
    humanInput = new GalacticAgeCalculator(earthAge, undefined, futureEarthAge);
  });
//test 13 pass
  test('it should return the correct amount of earthYearsYetToPass when called', () => {
    const earthYearsYetToPass = humanInput.earthYearsYetToPass();
    expect(earthYearsYetToPass).toEqual(48);
  });
//test 14 pass
  test('it should return the correct amount of mercuryYearsYetToPass when called', () => {
    const mercuryYearsYetToPass = humanInput.mercuryYearsYetToPass();
    expect(mercuryYearsYetToPass).toEqual(200 + " Mercury years yet to pass");
  });
//test 15 pass
  test('it should return the correct amount of venusYearsYetToPass when called', () => {
    const venusYearsYetToPass = humanInput.venusYearsYetToPass();
    expect(venusYearsYetToPass).toEqual(77.41935483870968 + " Venus years yet to pass");
  });
//test 16 pass
  test('it should return the correct amount of marsYearsYetToPass when called', () => {
    const marsYearsYetToPass = humanInput.marsYearsYetToPass();
    expect(marsYearsYetToPass).toEqual(25.531914893617024 + " Mars years yet to pass");
  });
//test 17 pass
  test('it should return the correct amount of jupiterYearsYetToPass when called', () => {
    const jupiterYearsYetToPass = humanInput.jupiterYearsYetToPass();
    expect(jupiterYearsYetToPass).toEqual(4.0472175379426645 + " Jupiter years yet to pass");
  });
});


