// Importando funciones utilitarias
import {countries, athletesGold, searchAthletes, orderAlpha, inputTeam, inputGenderFilter, sports,
  events, filterTeam, filterSport,} from './data.js';

// Importando datos de nuestra base de datos de JS
import data from './data/athletes/athletes.js';
import dataFlag from './data/athletes/flag.js';
import pictograms from './data/athletes/pictograms.js';

// Carga de funciones ni bien se cargue el htlm. Declarando función de objetos
  addEventListener('DOMContentLoaded', () => {
  const dataRio = data.athletes.map(athletes =>athletes); //data Athletes
  const dataCountriesFlag = dataFlag.map(dataFlag => dataFlag); //data Ciudades banderas
  const dataPictograms = pictograms.pictograms.map(pictograms => pictograms); //data fotos de sports, pictograms
  const arrayMedalGold = dataRio.filter(athletes => athletes.medal === 'Gold'); //data medallas
  const sport = dataRio.map(athletes => athletes.sport); // data sport tipo de deportes
  const dataCountriesTeam = data.athletes.map(athletes => athletes.team) //data athletes team
  
  // llamado de funciones
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
  
  // Filtro de orden de A-Z / Z-A de Athletes
  const filterAlpha = (arrayMedalGold) => {
    const alpha = document.getElementById("orderAlpha");
    alpha.addEventListener("change", (e) => {
      const arrayOrder = e.target.value;
      orderAlpha(arrayOrder, arrayMedalGold); 
    });
  }

  // Filtro de  Genero de Athletes
  const filterGender = dataRio => {
      document.getElementById("genderRio").addEventListener("change", () => {
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
  


  





