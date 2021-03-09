import {
countries,    
searchCountries,
athletesGold,
searchAthletes,
orderAlpha,
// athletesAll,
inputTeam,
inputGenderFilter,
sports,
events,
filterTeam,
filterSport,

} from './data.js';

import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';
import dataFlag from './data/athletes/flag.js';
import pictograms from './data/athletes/pictograms.js';

addEventListener('DOMContentLoaded', () => {
const dataRio = data.athletes.map(athletes =>athletes) //data athletes
const dataCountriesFlag = dataFlag.map(dataFlag => dataFlag) //data countries flag
const dataPictograms = pictograms.pictograms.map(pictograms => pictograms);
const dataCountriesNoc = data.athletes.map(athletes => athletes.noc) //data athletes noc
const arrayMedalGold = dataRio.filter(athletes => athletes.medal === 'Gold')
const sport = dataRio.map(athletes => athletes.sport)
const dataCountriesTeam = data.athletes.map(athletes => athletes.team) //data athletes team

// athletesAll(dataRio);
countries(dataRio,dataCountriesFlag);

// searchCountries(dataRio);
athletesGold(arrayMedalGold);
searchAthletes(dataRio,arrayMedalGold);
filterSport(sport,dataRio);
filterAlpha(dataRio);
filterTeam(dataCountriesTeam,dataRio);
inputTeam(dataCountriesTeam);
filterGender(dataRio);
sports(dataPictograms);
})



// Filter A-Z / Z-A
const filterAlpha = (arrayMedalGold) => {
  const alpha = document.getElementById("orderAlpha");
  const resultText = document.getElementById("result");
  alpha.addEventListener("change", (e) => {
    const arrayOrder = e.target.value;
    console.log(arrayOrder)
    orderAlpha(arrayOrder, arrayMedalGold); 
  });
}



  // Filter Gender
const filterGender = dataRio => {
    document.getElementById("genderRio").addEventListener("change", (event) => {
    const textTeam = genderRio.value;
    console.log(textTeam);
    const textSport = sportRio.value;
    // const sportUser = sport.includes(textSport)
    const sportFilter = dataRio.filter(athletes => athletes.sport === textSport)  
    const eventFilter = sportFilter.map(athletes => athletes.event)
    const genderMaleFilter = sportFilter.filter(athletes => athletes.gender === "M")
    const genderFemaleFilter = sportFilter.filter(athletes => athletes.gender === "F")    
    inputGenderFilter(genderMaleFilter,genderFemaleFilter, textTeam);
    filterEvent(genderMaleFilter, genderFemaleFilter,textTeam)   
    return textTeam;
  });
  }

  const filterEvent =(genderMaleFilter, genderFemaleFilter, textTeam) =>{    
    document.getElementById("eventRio").addEventListener("change", (event) =>{
    const textEvent = eventRio.value;
    console.log(textEvent)  
    events(genderMaleFilter, genderFemaleFilter, textTeam, textEvent)
    return textEvent;    
    })
  }



  





