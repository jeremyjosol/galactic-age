import PassedGalacticAgeCalculator from './../src/js/passedgalacticage.js';

describe('PassedGalacticAgeCalculator', () => {
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
  let humanInput = new PassedGalacticAgeCalculator(ageDifference);
  const passedBirthday = humanInput.mercuryYears();
  expect(passedBirthday).toEqual(70.83333333333334);
  });
//test 8 pass
  test('it should return the correct amount of earthYearsPassed when called', () => {
  let humanInput = new PassedGalacticAgeCalculator(earthAge, passedEarthAge);
  const earthYearsPassed = humanInput.earthYearsPassed();
  expect(earthYearsPassed).toEqual(17);
  });
});

describe('Super Galactic Passed Planetary Birthdays', () => {
  let humanInput;
  const earthAge = 27;
  const passedEarthAge = 10;

  beforeEach(() => {
    humanInput = new PassedGalacticAgeCalculator(earthAge, passedEarthAge);
  });
//test 9 pass
  test('it should return the correct amount of mercuryYearsPassed when called', () => {
    humanInput = new PassedGalacticAgeCalculator(earthAge, passedEarthAge);
    const mercuryYearsPassed = humanInput.mercuryYearsPassed();
    expect(mercuryYearsPassed).toEqual(70.83333333333334);
  });
//test 10 pass
  test('it should return the correct amount of venusYearsPassed when called', () => {
    const venusYearsPassed = humanInput.venusYearsPassed();
    expect(venusYearsPassed).toEqual(27.419354838709676);
  });
//test 11 pass
  test('it should return the correct amount of marsYearsPassed when called', () => {
    const marsYearsPassed = humanInput.marsYearsPassed();
    expect(marsYearsPassed).toEqual(9.042553191489363);
  });
//test 12 pass
  test('it should return the correct amount of jupiterYearsPassed when called', () => {
    const jupiterYearsPassed = humanInput.jupiterYearsPassed();
    expect(jupiterYearsPassed).toEqual(1.4333895446880272)
  });
});