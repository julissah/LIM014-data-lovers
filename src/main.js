import { 
  countries,    
  searchCountries,
  athletesGold,
  searchAthletes,
  orderAlpha,
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
  
  countries(dataRio,dataCountriesFlag);
  athletesGold(arrayMedalGold);
  searchAthletes(dataRio,arrayMedalGold);
  filterSport(sport,dataRio);
  filterAlpha(dataRio);
  filterTeam(dataCountriesTeam,dataRio);
  inputTeam(dataCountriesTeam);
  filterGender(dataRio);
  sports(dataPictograms,dataRio);
  
  })
  
  // Filter A-Z / Z-A
  const filterAlpha = (arrayMedalGold) => {
    const alpha = document.getElementById("orderAlpha");
    alpha.addEventListener("change", (e) => {
      const arrayOrder = e.target.value;
      orderAlpha(arrayOrder, arrayMedalGold); 
    });
  }
  
    // Filter Gender
  const filterGender = dataRio => {
      document.getElementById("genderRio").addEventListener("change", (event) => {
      const textTeam = genderRio.value;
      const textSport = sportRio.value;
      const sportFilter = dataRio.filter(athletes => athletes.sport === textSport)  
      const genderMaleFilter = sportFilter.filter(athletes => athletes.gender === "M")
      const genderFemaleFilter = sportFilter.filter(athletes => athletes.gender === "F")    
      inputGenderFilter(genderMaleFilter,genderFemaleFilter, textTeam);
      filterEvent(genderMaleFilter, genderFemaleFilter,textTeam)   
      return textTeam;
    });
    }
    // Filter Event - male and female
    const filterEvent =(genderMaleFilter, genderFemaleFilter, textTeam) =>{    
      document.getElementById("eventRio").addEventListener("change", (event) =>{
      const textEvent = eventRio.value;
      events(genderMaleFilter, genderFemaleFilter, textTeam, textEvent)
      return textEvent;    
      })
    }
  


  





