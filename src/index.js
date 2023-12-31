import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import GalacticAgeCalculator from './js/galacticage.js';
import PassedGalacticAgeCalculator from './js/passedgalacticage.js';
import YearsYetToPassCalculator from './js/yearsyettopass.js';

window.onload = () => {
  const humanInput = document.getElementById('humanInput');
  const results = document.getElementById('results');
  const results2 = document.getElementById('results2');
  const results3 = document.getElementById('results3');

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
    const earthYearsPassed = passedGalacticAgeCalculator.earthYearsPassed();
    const mercuryYearsPassed = passedGalacticAgeCalculator.mercuryYearsPassed();
    const venusYearsPassed = passedGalacticAgeCalculator.venusYearsPassed();
    const marsYearsPassed = passedGalacticAgeCalculator.marsYearsPassed();
    const jupiterYearsPassed = passedGalacticAgeCalculator.jupiterYearsPassed();

    const yearsYetToPassCalculator = new YearsYetToPassCalculator(earthAge, futureEarthAge);
    const earthYearsYetToPass = yearsYetToPassCalculator.earthYearsYetToPass();
    const mercuryYetToPass = yearsYetToPassCalculator.mercuryYearsYetToPass();
    const venusYetToPass = yearsYetToPassCalculator.venusYearsYetToPass();
    const marsYetToPass = yearsYetToPassCalculator.marsYearsYetToPass();
    const jupiterYetToPass = yearsYetToPassCalculator.jupiterYearsYetToPass();

    results.innerHTML = 
      `<h2>Current years:</h2>
        <p>Earth Age: ${earthAge} years.</p>
        <p>Mercury Age: ${mercuryAge.toFixed(2)} years.</p>
        <p>Venus Age: ${venusAge.toFixed(2)} years.</p>
        <p>Mars Age: ${marsAge.toFixed(2)} years.</p>
        <p>Jupiter Age: ${jupiterAge.toFixed(2)} years.</p>`;
    
    results2.innerHTML =
      `<h2>Years Passed:</h2>
        <p>${earthYearsPassed} Earth years have passed.</p>
        <p>${mercuryYearsPassed.toFixed(2)} Mercury years have passed.</p>
        <p>${venusYearsPassed.toFixed(2)} Venus years have passed.</p>
        <p>${marsYearsPassed.toFixed(2)} Mars years have passed.</p>
        <p> ${jupiterYearsPassed.toFixed(2)} Jupiter years have passed.</p>`;
      
    results3.innerHTML =
      `<h2>Years Yet To Pass:</h2>
        <p>${earthYearsYetToPass.toFixed(2)} Earth years yet to pass.</p>
        <p>${mercuryYetToPass.toFixed(2)} Mercury years yet to pass.</p>
        <p>${venusYetToPass.toFixed(2)} Venus years yet to pass.</p>
        <p>${marsYetToPass.toFixed(2)} Mars years yet to pass.</p>
        <p>${jupiterYetToPass.toFixed(2)} Jupiter years yet to pass.</p>`;
  });
};


