const viewCountries = document.getElementById('mainCountries');
const inputSearchCountries = document.getElementById('inputSearchCountries');
const viewAthletes = document.getElementById('mainAthletes');
const searchC = document.getElementById('searchC'); // Filtro de búsqueda de 
const searchA = document.getElementById('searchA'); //
const searchTeam = document.getElementById("searchTeam");
const searchEvent = document.getElementById("searchEvent");
const viewSports = document.getElementById("mainSports");
const product = document.querySelector(".product") ;
const popupViews = document.querySelector(".popup-view");
const closeBtns = document.querySelector(".close-btn");

export const countries = (dataRio,dataCountriesFlag) =>{
    const male = dataRio.filter(athletes => athletes.gender === "M")
    const female = dataRio.filter(athletes => athletes.gender === "F")
    console.log(female)
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
            const ok = male.filter(atheles => atheles.noc === unique[i])

            dataTeamFlag = new Object();
            dataTeamFlag.name = dataCountriesFlag[f].name;
            dataTeamFlag.flag = dataCountriesFlag[f].flag;
            dataTeamFlag.alpha3Code = dataCountriesFlag[f].alpha3Code;
            dataTeamFlag.region = dataCountriesFlag[f].region;
            dataTeamFlag.subregion = dataCountriesFlag[f].subregion;
            dataTeamFlag.population = dataCountriesFlag[f].population;
            dataTeamFlag.capital = dataCountriesFlag[f].capital;
            // dataTeamFlag.male = male.filter(atheles => atheles.noc === unique[i])
            Array.prototype.push.apply(obj,[dataTeamFlag]);
        } 
        }    
    }
  searchCountries(obj);
  console.log(obj)
} 

// Filter Search Country

export const searchCountries = (objData) => {
    searchC.addEventListener("keyup", e => {
        e.preventDefault()
        viewCountries.innerHTML= "";
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

export const orderAlpha = (option, dataRio) => {
    console.log(option)
    switch (option) {
      case "1":
        dataRio.sort((a, b) => a.name.localeCompare(b.name));
        console.log(dataRio)
        athletesAll(dataRio);
        // arrayMedalGold.sort;
        break;
      default:
        dataRio.sort((a, b) => a.name.localeCompare(b.name));
        const reversed = dataRio.reverse();
        athletesAll(reversed)
    }
    return dataRio;
  };

// *** Athletes
export const athletesGold = (arrayMedalGold) => {
    // product.innerHTML= "";
    for (let i = 0; i < arrayMedalGold.length; i++) {
        const div = document.createElement("div")
        div.classList.add("product-card")
        div.innerHTML =`
        <h2 class="name">${arrayMedalGold[i].name.toUpperCase()}</h2>
        <span class="price">${arrayMedalGold[i].noc } &nbsp|&nbsp ${arrayMedalGold[i].sport.toUpperCase()}</span>
        <a class="popup-btn">VIEW MORE</a>
        <img src="./img/SIMONE_BILES.webp" class="product-img" alt="">
        `;
        product.appendChild(div);
        const readMore = div.querySelector(".popup-btn");
        readMore.addEventListener("click", () => {
            console.log(popupViews)
            popupViews.classList.add('active');
            modal(arrayMedalGold[i]);
        });
    }
     return athletesGold;
   }

export const searchAthletes = (dataRio,arrayMedalGold) => {
    const inputSearchAthletes = document.getElementById('inputSearchAthletes');
    searchA.addEventListener('keyup', e => {
        e.preventDefault()
        product.innerHTML= "";
        popupViews.innerHTML= "";
        const textUser = inputSearchAthletes.value.toLowerCase();
        console.log(textUser);
        const arrayTeam = dataRio.filter(item => {
            const itemTeam = item.name.toLowerCase();
            // console.log(itemTeam.length);
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


 export const athletesAll = dataRio => {
    product.innerHTML= "";
    popupViews.innerHTML= "";
    dataRio.forEach(item => {
        const div = document.createElement("div")
        div.classList.add("product-card")
        div.innerHTML =`
        <h2 class="name">${item.name.toUpperCase()}</h2>
        <span class="price">${item.noc } &nbsp|&nbsp ${item.sport.toUpperCase()}</span>
        <a class="popup-btn">VIEW MORE</a>
        <img src="./img/SIMONE_BILES.webp" class="product-img" alt="">   
        `;
        product.appendChild(div);
        console.log(div)
        const readMore = div.querySelector(".popup-btn");
        readMore.addEventListener("click", () => {
            console.log(popupViews)
            popupViews.classList.add('active');
            modal(item);
        });
    });
    return athletesAll;
}

export const modal = cardOne => {
    console.log("entro a modal")
    popupViews.innerHTML= "";
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
              HEIGHT: ${cardOne.height}<br><br>
              WEIGHT: ${cardOne.weight}<br><br>
              AGE: ${cardOne.age}<br><br>
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
    popupViews.appendChild(div);
    
    console.log(popupViews)
    const closeBtns = div.querySelector('.close-btn');
    closeBtns.addEventListener("click", () => {
        console.log(popupViews)
        popupViews.classList.remove('active');
        popupViews.innerHTML= "";
    });     
    return cardOne;
}

export const modalCountry = (cardOne,pop) => {
    console.log(cardOne)
    popupViews.innerHTML= "";
    console.log(cardOne)
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
              POPULATION: ${cardOne.population}
            </p><br><br>
            <table class="table">
                <thead>
                    <tr>
                        <th>MALE</th>
                        <th>FEMAEL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><p>${cardOne.region}</p></td>
                        <td><p>${cardOne.region}</p></td>
                    </tr>
                </tbody>
            </table>
      </div>
     `;     
    pop.appendChild(div);
    
    console.log(popupViews)
    const closeBtns = div.querySelector('.close-btn');
    closeBtns.addEventListener("click", () => {
        console.log(popupViews)
        pop.classList.remove('active');
        pop.innerHTML= "";
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

// Filtro del evento en la sección de Athletes
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

// Sports
export const sports = (dataPictograms) => {
    let elementos = '';
    dataPictograms.forEach(item => {
        elementos += `  
            <div class="product">
                <div class="product-card">
                    <img src="${item.img}" class="product-img" alt="">
                    <a class="price">${item.sport}</a>                  
                </div>
            </div>
            `
    });
    viewSports.innerHTML = elementos;
}
// Filter Gender
export const events = (genderMaleFilter, genderFemaleFilter, textTeam, textEvent) => {
    console.log(textTeam)
    switch (textTeam) {
        case "Male":
                const eventFilterM = genderMaleFilter.filter(athletes => athletes.event === textEvent)
                console.log(eventFilterM);
                athletesAll(eventFilterM);
            break;
        case "Female":
                const eventFilterF = genderFemaleFilter.filter(athletes => athletes.event === textEvent)
                console.log(eventFilterF);
                athletesAll(eventFilterF);
            break;
        default:
            console.log("vacioooo")
      }
}
    
// Filter Team
export const filterTeam = (dataCountriesTeam,dataRio) => {
    document.getElementById("teamRio").addEventListener("change", (event) => {
      const textTeam = teamRio.value;
      const teamUser = dataCountriesTeam.includes(textTeam)
      console.log(teamUser);
      console.log(dataCountriesTeam);
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


























