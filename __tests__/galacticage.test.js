// import Constructor from './../src/javascript.js';
// Super Galactic Age Calculator


describe('Super Galactic Age Calculator', () => {

  test('it should return the correct number passed into the parameter of a humanInput object', () => {
    let humanInput = new GalacticAgeCalculator(27) 
    expect(humanInput.age).toEqual(27);

});
});