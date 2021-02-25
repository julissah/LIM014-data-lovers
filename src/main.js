import { 
countries,    
searchCountries,
athletesGold,
searchAthletes,
orderAlpha,
athletesAll,
inputTeam,
} from './data.js';

import data from './data/athletes/athletes.js';
import dataFlag from './data/athletes/flag.js';

addEventListener('DOMContentLoaded', () => {
const dataRio = data.athletes.map(athletes =>athletes) //data athletes
const dataCountriesFlag = dataFlag.map(dataFlag => dataFlag) //data countries flag
const dataCountriesNoc = data.athletes.map(athletes => athletes.noc) //data athletes noc
const arrayMedalGold = dataRio.filter(athletes => athletes.medal === 'Gold')
const sport = dataRio.map(athletes => athletes.sport)
const dataCountriesTeam = data.athletes.map(athletes => athletes.team) //data athletes team

countries(dataCountriesNoc,dataCountriesFlag);
searchCountries(dataCountriesFlag);
athletesGold(arrayMedalGold)
searchAthletes(dataRio,arrayMedalGold)
filterSport(sport,dataRio)
filterAlpha(arrayMedalGold)
filterTeam(dataCountriesTeam,dataRio)
inputTeam(dataCountriesTeam);
  
})
// Filter Sport
const filterSport = (sport,dataRio) => {
document.getElementById("sportRio").addEventListener("change", (event) => {
  const textSport = sportRio.value;
  const sportUser = sport.includes(textSport)
  if(sportUser == true) {
    const sportFilter = dataRio.filter(athletes => athletes.sport === textSport)  
    athletesAll(sportFilter);
  } else {
    athletesAll(dataRio);
  }
  return textSport;
});
}

// Filter A-Z / Z-A
const filterAlpha = (arrayMedalGold) => {
  const alpha = document.getElementById("orderAlpha");
  const resultText = document.getElementById("result");
  alpha.addEventListener("change", (e) => {
    const arrayOrder = e.target.value;
    orderAlpha(arrayOrder, arrayMedalGold);
  });
}

// Filter Team
const filterTeam = (dataCountriesTeam,dataRio) => {
  document.getElementById("teamRio").addEventListener("change", (event) => {
    const textTeam = teamRio.value;
    const teamUser = dataCountriesTeam.includes(textTeam)
    console.log(teamUser);
    console.log(dataCountriesTeam);
    if(teamUser == true) {
      const teamFilter = dataRio.filter(athletes => athletes.team === textTeam)
      athletesAll(teamFilter);
    } else {
      athletesAll(dataRio);
    }
    return textTeam;
  });
  }
  








