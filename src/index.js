import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import GalacticAgeCalculator from './js/galacticage.js';
import PassedGalacticAgeCalculator from './js/passedgalacticage.js';
import YearsYetToPassCalculator from './js/yearsyettopass.js';
window.onload = () => {
  const humanInput = document.getElementById('humanInput');
  const resultDiv = document.getElementById('results');


  humanInput.addEventListener('submit', (e) => {
    e.preventDefault();


    const earthAge = parseFloat(document.getElementById('earthAge').value);
    const passedEarthAge = parseFloat(document.getElementById('passedEarthAge').value);
    const futureEarthAge = parseFloat(document.getElementById('futureEarthAge').value);


    const galacticAgeCalculator = new GalacticAgeCalculator(earthAge, passedEarthAge, futureEarthAge);

    const mercuryAge = galacticAgeCalculator.mercuryYears();
    const venusAge = galacticAgeCalculator.venusYears();
    const marsAge = galacticAgeCalculator.marsYears();
    const jupiterAge = galacticAgeCalculator.jupiterYears();

    const passedGalacticAgeCalculator = new PassedGalacticAgeCalculator(earthAge, passedEarthAge);
    const earthPassed = passedGalacticAgeCalculator.earthYearsPassed();
    const mercuryPassed = passedGalacticAgeCalculator.mercuryYearsPassed();
    const venusPassed = passedGalacticAgeCalculator.venusYearsPassed();
    const marsPassed = passedGalacticAgeCalculator.marsYearsPassed();
    const jupiterPassed = passedGalacticAgeCalculator.jupiterYearsPassed();

    const yearsYetToPassCalculator = new YearsYetToPassCalculator(earthAge, futureEarthAge);
    const earthYearsYetToPass = yearsYetToPassCalculator.earthYearsYetToPass();
    const mercuryYetToPass = yearsYetToPassCalculator.mercuryYearsYetToPass();
    const venusYetToPass = yearsYetToPassCalculator.venusYearsYetToPass();
    const marsYetToPass = yearsYetToPassCalculator.marsYearsYetToPass();
    const jupiterYetToPass = yearsYetToPassCalculator.jupiterYearsYetToPass();

    resultDiv.innerHTML = 
      `<h2>Super Galactic Ages:</h2>
        <p>Earth Age: ${earthAge} years</p>
        <p>Mercury Age: ${mercuryAge.toFixed(2)} years</p>
        <p>Venus Age: ${venusAge.toFixed(2)} years</p>
        <p>Mars Age: ${marsAge.toFixed(2)} years</p>
        <p>Jupiter Age: ${jupiterAge.toFixed(2)} years</p>

        <h2>Super Galactic Passed Years:</h2>
        <p>${earthPassed} Earth years have passed</p>
        <p>${mercuryPassed}</p>
        <p>${venusPassed}</p>
        <p>${marsPassed} </p>
        <p> ${jupiterPassed}</p>

        <h2>Super Galactic Years Yet To Pass:</h2>
        <p>${earthYearsYetToPass}</p>
        <p>${mercuryYetToPass}</p>
        <p>${venusYetToPass}</p>
        <p>${marsYetToPass}</p>
        <p>${jupiterYetToPass}</p>
      `;
  });
};


