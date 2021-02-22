import { 
countries,    
searchCountries,
athletesGold,
searchAthletes,
orderAlpha,

} from './data.js';

import data from './data/athletes/athletes.js';
import dataFlag from './data/athletes/flag.js';
// import athletes from './data/athletes/athletes.js';

addEventListener('DOMContentLoaded', () => {
const dataRio = data.athletes.map(athletes =>athletes) //data athletes
const dataCountriesFlag = dataFlag.map(dataFlag => dataFlag) //data countries flag
const dataCountriesNoc = data.athletes.map(athletes => athletes.noc) //data athletes noc
const arrayMedalGold = dataRio.filter(athletes => athletes.medal === 'Gold')


countries(dataCountriesNoc,dataCountriesFlag);
searchCountries(dataCountriesFlag);
athletesGold(arrayMedalGold)
searchAthletes(dataRio,arrayMedalGold)
// orderAlpha(arrayMedalGoldName)
// console.log(dataCountries,dataCountriesFlag)

const alpha = document.getElementById("orderAlpha");
const resultText = document.getElementById("result");
console.log(alpha);
alpha.addEventListener("change", (e) => {
    const arrayOrder = e.target.value;
    orderAlpha(arrayOrder, arrayMedalGold);
    console.log(arrayOrder)
  });
})



// Filtro de Ordenar




