const countCountries = document.getElementById("totCountries")
const countAthletes = document.getElementById("totAthletes")
const countSports = document.getElementById("totSports")
const countEvents = document.getElementById("totEvents")
const viewCountries = document.getElementById('mainCountries');
const inputSearchCountries = document.getElementById('inputSearchCountries');
const inputSearchSports = document.getElementById('inputSearchSports');
const viewAthletes = document.getElementById('mainAthletes');
const searchC = document.getElementById('searchC'); 
const searchA = document.getElementById('searchA'); 
const searchTeam = document.getElementById("searchTeam");
const searchEvent = document.getElementById("searchEvent");
const viewSports = document.getElementById("mainSports");

// Data Countries
export const countries = (dataRio,dataCountriesFlag) =>{
    const uniqueNameAthletesRio = dataRio.map(athletes => athletes.name)
    // eslint-disable-next-line no-undef
    const uniqueAthletesRio = [...new Set(uniqueNameAthletesRio)]
    const eventFilter = dataRio.map(athletes => athletes.event)
    const uniqueEventsRio = [...new Set(eventFilter)]
    const noc = dataRio.map(athletes => athletes.noc)
    const unique = [...new Set(noc)].sort();
    let dataTeamFlag = [];
    let obj = [];

    for (let i = 0; i < unique.length; i++) {
        for (let f = 0; f < dataCountriesFlag.length; f++) {    
            if (dataCountriesFlag[f].alpha3Code.indexOf(unique[i])!== -1) {
            const div = document.createElement("div")
            div.classList.add("product")
            div.innerHTML = `
            <div class="product-card">
                <h2 class="name">${dataCountriesFlag[f].name}</h2>    
                <h2 class="price">${dataCountriesFlag[f].alpha3Code}<br><span>${dataCountriesFlag[f].region}</span></h2>
                <!--<h3>${unique[i]}</h3>-->              
                <a class="popup-btn">VIEW MORE</a>
                <img src="${dataCountriesFlag[f].flag}" class="product-img" alt="">
            </div>
            <div class="popup-view"></div>
            `;
            viewCountries.appendChild(div);
            const readMore = div.querySelector(".popup-btn")
            const pop = div.querySelector(".popup-view")
            readMore.addEventListener("click", () => {
                pop.classList.add('active');
                modalCountry(dataCountriesFlag[f],pop);
            })

            dataTeamFlag = new Object();
            dataTeamFlag.name = dataCountriesFlag[f].name;
            dataTeamFlag.flag = dataCountriesFlag[f].flag;
            dataTeamFlag.alpha3Code = dataCountriesFlag[f].alpha3Code;
            dataTeamFlag.region = dataCountriesFlag[f].region;
            dataTeamFlag.subregion = dataCountriesFlag[f].subregion;            
            dataTeamFlag.capital = dataCountriesFlag[f].capital;
            dataTeamFlag.area = dataCountriesFlag[f].area;
            dataTeamFlag.population = dataCountriesFlag[f].population;
            Array.prototype.push.apply(obj,[dataTeamFlag]);
        } 
        }    
    }
  searchCountries(obj);
  countCountries.dataset.cantidadTotal = obj.length;
  countAthletes.dataset.cantidadTotal = uniqueAthletesRio.length;
  countEvents.dataset.cantidadTotal = uniqueEventsRio.length;
} 

// Filter Search Country
export const searchCountries = (objData) => {
    searchC.addEventListener("keyup", e => {
        e.preventDefault()
        viewSports.innerHTML= "";
        const textUser = inputSearchCountries.value.toLowerCase();
        const arrayFlag = objData.filter(item => {
            const itemCountry = item.name.toLowerCase();
            if (itemCountry.includes(textUser)){
                return item;
            }
        })
        viewSearchCountries(arrayFlag);
    })
}

// Map Search Country
 export const viewSearchCountries = itemCountry => {
    viewCountries.innerHTML= "";
    for (let i = 0; i < itemCountry.length; i++) {
        const div = document.createElement("div")
        div.classList.add("product")
        div.innerHTML =`
        <div class="product">   
        <div class="product-card">
            <h2 class="name">${itemCountry[i].name}</h2>    
            <h2 class="price">${itemCountry[i].alpha3Code}<br><span>${itemCountry[i].region}</span></h2>             
            <a class="popup-btn">VIEW MORE</a>
            <img src="${itemCountry[i].flag}" class="product-img" alt="">
        </div>
        <div class="popup-view"></div>
        </div> 
        `
        viewCountries.appendChild(div)
        const readMore = div.querySelector(".popup-btn")
        const pop = div.querySelector(".popup-view")
        readMore.addEventListener("click", () => {
            pop.classList.add('active');
            modalCountry(itemCountry[i],pop); 
        })
    }
}

// Filter alphabetical 
export const orderAlpha = (option, dataRio) => {
    switch (option) {
      case "1":
        dataRio.sort((a, b) => a.name.localeCompare(b.name));
        athletesAll(dataRio);
        break;
      default:
        dataRio.sort((a, b) => a.name.localeCompare(b.name));
        const reversed = dataRio.reverse();
        athletesAll(reversed)
    }
    return dataRio;
  };

// Data Sport
export const sports = (dataPictograms, dataRio) => {

    const dataEvents = dataRio.filter(athletes => athletes.event)
    console.log(dataEvents)
    const sportRio = dataRio.map(athletes => athletes.sport)
    const unique = [...new Set(sportRio)].sort();
    let dataSport = [];
    let obj = [];

    for (let i = 0; i < unique.length; i++) {
        for (let f = 0; f < dataPictograms.length; f++) {    
            if (dataPictograms[f].sport.indexOf(unique[i])!== -1) {
            const div = document.createElement("div")
            div.classList.add("product")
            div.innerHTML = `
            <div class="product-card">
            <img src="${dataPictograms[f].img}" class="product-img" alt="">
            <a class="price">${dataPictograms[f].sport}</a>                
            <a class="popup-btn">EVENTS</a>
            </div>
            <div class="popup-view"></div>
            `;
            viewSports.appendChild(div);
            const readMore = div.querySelector(".popup-btn");
            const pop2 = div.querySelector(".popup-view")            

            dataSport = new Object();
            dataSport.sport = dataPictograms[f].sport;
            dataSport.img = dataPictograms[f].img;
            dataSport.event = dataEvents.filter(athletes => athletes.sport === unique[i]);

            Array.prototype.push.apply(obj,[dataSport]);
            readMore.addEventListener("click", () => {
                pop2.classList.add('active');
                modalSport(obj[f-1],pop2);
            });
        } 
        }    
    }
    countSports.dataset.cantidadTotal = dataPictograms.length
    searchSport(obj)
}

// Filter Search Sport
export const searchSport = (objData) => {
    console.log("ingre")
    searchS.addEventListener("keyup", e => {
        e.preventDefault()
        viewCountries.innerHTML= "";
        const textUser = inputSearchSports.value.toLowerCase();
        const arraySport = objData.filter(item => {
            const itemSport = item.sport.toLowerCase();
            if (itemSport.includes(textUser)){
                return item;
            }
        })
        viewSearchSport(arraySport);
    })
}

// Map Search Sport
export const viewSearchSport = itemSport => {
    viewSports.innerHTML= "";
    for (let i = 0; i < itemSport.length; i++) {
        const div = document.createElement("div")
        div.classList.add("product")
        div.innerHTML =`
        <div class="product-card">
        <img src="${itemSport[i].img}" class="product-img" alt="">
        <a class="price">${itemSport[i].sport}</a>                
        <a class="popup-btn">EVENTS</a>
        </div>
        <div class="popup-view"></div> 
        `
        viewSports.appendChild(div)
        const readMore = div.querySelector(".popup-btn")
        const pop2 = div.querySelector(".popup-view")
        readMore.addEventListener("click", () => {
            pop2.classList.add('active');
            modalSport(itemSport[i],pop2); 
        })
    }
}

// Data Athletes Gold
export const athletesGold = (arrayMedalGold) => {    

    for (let i = 0; i < arrayMedalGold.length; i++) {
        const div = document.createElement("div")
        div.classList.add("product")
        div.innerHTML =`
        <div class="product-card">
        <h2 class="name">${arrayMedalGold[i].name.toUpperCase()}</h2>
        <span class="price">${arrayMedalGold[i].noc } &nbsp|&nbsp ${arrayMedalGold[i].sport.toUpperCase()}</span>
        <a class="popup-btn">VIEW MORE</a>
        <img src="./img/SIMONE_BILES.webp" class="product-img" alt="">
        </div>
        <div class="popup-view"></div>
        `;
        viewAthletes.appendChild(div);
        const readMore = div.querySelector(".popup-btn");
        const pop1 = div.querySelector(".popup-view")
        readMore.addEventListener("click", () => {
            pop1.classList.add('active');
            modal(arrayMedalGold[i],pop1);
        });
    }
     return athletesGold;
   }
// Search Athletes
export const searchAthletes = (dataRio,arrayMedalGold) => {
    const inputSearchAthletes = document.getElementById('inputSearchAthletes');
    searchA.addEventListener('keyup', e => {
        e.preventDefault()
        viewAthletes.innerHTML= "";
        const textUser = inputSearchAthletes.value.toLowerCase();
        const arrayTeam = dataRio.filter(item => {
            const itemTeam = item.name.toLowerCase();
            if(itemTeam.indexOf(textUser)!== -1 ){
                 return item;
            } 
        })        
        if (arrayTeam.length == 2023) {    
            athletesGold(arrayMedalGold);
                        
        } else {
            athletesGold(arrayTeam);
            // athletesAll(arrayTeam);        
        }        
    });
 }

// Data Athletes all
 export const athletesAll = dataRio => {
    viewAthletes.innerHTML= "";
    dataRio.forEach(item => {
        const div = document.createElement("div")
        div.classList.add("product")
        div.innerHTML =`
        <div class="product-card">
        <h2 class="name">${item.name.toUpperCase()}</h2>
        <span class="price">${item.noc } &nbsp|&nbsp ${item.sport.toUpperCase()}</span>
        <a class="popup-btn">VIEW MORE</a>
        <img src="./img/SIMONE_BILES.webp" class="product-img" alt="">   
        </div>
        <div class="popup-view"></div>
        `;
        viewAthletes.appendChild(div);

        const readMore = div.querySelector(".popup-btn");
        const pop1 = div.querySelector(".popup-view")
        readMore.addEventListener("click", () => {
            pop1.classList.add('active');
            modal(item,pop1);
        });
    });
    return athletesAll;
}
// Data modal Athletes
export const modal = (cardOne,pop1) => {
    pop1.innerHTML= "";
    const div = document.createElement("div")
    div.classList.add("popup-card")
    div.innerHTML =`
        <a><i class="fas fa-times close-btn"></i></a>
        <div class="product-img">
            <img src="./img/SIMONE_BILES.webp" alt="">
        </div>
        <div class="info">
            <h2>${cardOne.name.toUpperCase()}<br>
            <span>${cardOne.team } &nbsp|&nbsp ${cardOne.sport.toUpperCase()}</span></h2>
            <p>
              HEIGHT: ${cardOne.height}<br>
              WEIGHT: ${cardOne.weight}<br>
              AGE: ${cardOne.age}<br>
              GENDER: ${cardOne.gender}
            </p><br>
            <table class="table">
                <thead>
                    <tr>
                        <th>EVENT</th>
                        <th>MEDAL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><p>${cardOne.event}</p></td>
                        <td><p>${cardOne.medal}</p></td>
                    </tr>
                </tbody>
            </table>
      </div>
     `;     
     pop1.appendChild(div);
    const closeBtns = div.querySelector('.close-btn');
    closeBtns.addEventListener("click", () => {
        pop1.classList.remove('active');
        pop1.innerHTML= "";
    });     
    return cardOne;
}
// Data modal Countries
export const modalCountry = (cardOne,pop) => {
    const div = document.createElement("div")
    div.classList.add("popup-card")
    div.innerHTML =`
        <a><i class="fas fa-times close-btn"></i></a>
        <div class="product-img">
            <img src="${cardOne.flag}" alt="">
        </div>
        <div class="info">
            <h2>${cardOne.name.toUpperCase()}<br>
            <span>${cardOne.alpha3Code } &nbsp|&nbsp ${cardOne.region.toUpperCase()}</span></h2><br>
            <p>
              CAPITAL: ${cardOne.capital}<br><br>
              SUBREGION: ${cardOne.subregion}<br><br>
            </p><br>
            <table class="table">
                <thead>
                    <tr>
                        <th>AREA</th>
                        <th>POPULATION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><p>${cardOne.area}</p></td>
                        <td><p>${cardOne.population}</p></td>
                    </tr>
                </tbody>
            </table>
      </div>
     `;     
    pop.appendChild(div);
    const closeBtns = div.querySelector('.close-btn');
    closeBtns.addEventListener("click", () => {
        pop.classList.remove('active');
        pop.innerHTML= "";
    });     
    return cardOne;
}

// Data modal Sport
export const modalSport = (cardOne,pop2) => {
    const obj = []
    for (let i = 0; i < cardOne.event.length; i++) {
        obj.push(cardOne.event[i])        
    }
    console.log(obj)
    const uniqueeventos = [...new Set(obj.map(e => e.event))]
    const div = document.createElement("div")
    div.classList.add("popup-card")
    div.innerHTML =`
        <a><i class="fas fa-times close-btn"></i></a>
        <div class="product-img">
            <img src="${cardOne.img}" alt="">
        </div>
        <div class="info">
            <h2>${cardOne.sport.toUpperCase()}<br>
            </h2><br>

            <table class="table">
                <thead>
                    <tr>
                        <th>EVENT</th>
                        <th>DESCRIPTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><p>${uniqueeventos.length}</p></td>
                        <td><p>${uniqueeventos}</p></td>
                    </tr>
                </tbody>
            </table>
      </div>
     `;     
    pop2.appendChild(div);
    const closeBtns = div.querySelector('.close-btn');
    closeBtns.addEventListener("click", () => {
        pop2.classList.remove('active');
        pop2.innerHTML= "";
    });     
    return cardOne;
}



// Filter de input team 
export const inputTeam = (dataCountriesTeam) => {
    const unique = [...new Set(dataCountriesTeam)]
    let team = '';
    unique.forEach(item => {
        team += `
          <option value="${item}"></option>
        `
    });
    searchTeam.innerHTML = team;
}

// Filter de input de event por gender 
export const inputGenderFilter = (genderMaleFilter, genderFemaleFilter, textGender) => {
    const maleEvent = genderMaleFilter.map(athletes => athletes.event);
    const femaleEvent = genderFemaleFilter.map(athletes => athletes.event);
    const uniqueM = [...new Set(maleEvent)]
    const uniqueF = [...new Set(femaleEvent)]
    switch (textGender) {
        case "Male":
            inputEventFilter(uniqueM)
            athletesAll(genderMaleFilter)
            break;
        case "Female":
            inputEventFilter(uniqueF)
            athletesAll(genderFemaleFilter)
            break;
        default:            
      }
}

// filter input event
export const inputEventFilter = (unique) =>{
    document.getElementById('event').classList.remove('hide');
    let event = '';
    unique.forEach(item => {
        event += `
          <option value="${item}"></option>
        `
    });
    searchEvent.innerHTML = event;
}


// Filter Gender
export const events = (genderMaleFilter, genderFemaleFilter, textTeam, textEvent) => {
    switch (textTeam) {
        case "Male":
                const eventFilterM = genderMaleFilter.filter(athletes => athletes.event === textEvent)
                athletesAll(eventFilterM);
            break;
        case "Female":
                const eventFilterF = genderFemaleFilter.filter(athletes => athletes.event === textEvent)
                athletesAll(eventFilterF);
            break;
        default:
      }
}
    
// Filter Team
export const filterTeam = (dataCountriesTeam,dataRio) => {
    document.getElementById("teamRio").addEventListener("change", (event) => {
      const textTeam = teamRio.value;
      const teamUser = dataCountriesTeam.includes(textTeam)
      if(teamUser == true) {
        const teamFilter = dataRio.filter(athletes => athletes.team === textTeam);
        athletesAll(teamFilter);         
      } else {
        athletesAll(dataRio);         
      }
      return textTeam;    
    });
    }

// Filter Sport
export const filterSport = (sport,dataRio) => {
    document.getElementById("sportRio").addEventListener("change", (event) => {
    document.getElementById('gender').classList.remove('hide');
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


// Funciones

export const filterMedal = (dataRio, conditionTeam, conditionMedal) => {
    let objTeam = dataRio.filter(athletes => athletes.team.includes(conditionTeam));
    return objTeam.filter(medals => medals.medal.includes(conditionMedal)).length;
};   

// Medallas
/*El forEach llena el objeto vacío que es object medals y se crean los keywords*/
// let medals = [];
// teams.forEach((team) => {
//     let goldenMedals = filterMedal(athletesData, team, "Gold")
//     let silverMedals = filterMedal(athletesData, team, "Silver")
//     let bronzeMedals = filterMedal(athletesData, team, "Bronze")
//     let total = goldenMedals + silverMedals + bronzeMedals;

//     medals.push({
//         country: team,
//         golden: goldenMedals,
//         silver: silverMedals,
//         bronze: bronzeMedals,
//         total: total
//     })
// });

/*El forEach pinta la tabla con los objetos ya creados*/
// let medalsOrdered = sortByTotal(medals, 'dsc');

// medalsOrdered.forEach((obj) => {
//     const container = document.createElement('tr');
//     const table = document.getElementById("bodytable");
//     table.appendChild(container).innerHTML =
//         `<tr> 
//       <td> <strong>${obj.country}</strong> 
//       </td><td>${obj.golden}</td>
//       </td><td>${obj.silver}</td>
//       </td><td>${obj.bronze}</td>
//       </td><td>${obj.total}</td>
//       </tr>`

// });

























