import YearsYetToPassCalculator from '../src/js/yearsyettopass.js';

describe('Super Galactic Yet To Pass Planetary Birthdays', () => {
  let humanInput;
  
  beforeEach(() => {
    const earthAge = 27;
    const futureEarthAge = 75;
    humanInput = new YearsYetToPassCalculator(earthAge, futureEarthAge);
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
