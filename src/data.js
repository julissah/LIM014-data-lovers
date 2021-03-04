const viewCountries = document.getElementById('mainCountries');
const viewAthletes = document.getElementById('mainAthletes');
const searchC = document.getElementById('searchC'); // Filtro de búsqueda de 
const searchA = document.getElementById('searchA'); //
const searchTeam = document.getElementById("searchTeam");
const searchEvent = document.getElementById("searchEvent");
const viewSports = document.getElementById("mainSports");
const product = document.querySelector(".product") ;
const popupViews = document.querySelector(".popup-view");
const closeBtns = document.querySelector(".close-btn");


// *** Countries prueba
export const countries = (dataCountries,dataCountriesFlag) =>{
    const unique = [...new Set(dataCountries)]
    const alpha3Code = dataCountriesFlag.map(athletes => athletes.alpha3Code)
    let elementos = '';
    for (let f = 0; f < dataCountriesFlag.length; f++) {    
            if (alpha3Code.includes(unique[f])) {
            elementos += `
            <div class="product">
                <div class="product-card">
                    <h2 class="price">${dataCountriesFlag[f].name}</h2>                  
                    <a class="popup-btn">VIEW MORE</a>
                    <img src="${dataCountriesFlag[f].flag}" class="product-img" alt="">
                </div>
            </div>
            `
        } 
    } 
  viewCountries.innerHTML = elementos;
  }
// Filtro de busqueda Countries

// export const searchCountries = (dataCountriesFlag) => {
//     const inputSearchCountries = document.getElementById('inputSearchCountries');

//     searchC.addEventListener('keyup', e => {
//         e.preventDefault()
//         const textUser = inputSearchCountries.value.toLowerCase();
//         let elementos2 = '';
//         const arraySearchCountries = dataCountriesFlag.filter((item) => {
            
//             const itemTeam = item.toLowerCase();
//             console.log(itemTeam);
            
//             if(itemTeam.indexOf(textUser)!== -1 ){
//                 elementos2 += `
//                 <article class="card">
//                     <div class="card-content">
//                         <img src=${item.flag} alt="" class="img-fluid">  
//                         <h4>"${item.name}"</h4>
//                     </div>
//                 </article>
//                 `
//                  return item;
//             } 
//         })
//         // viewSearchCountries(arraySearchCountries);
//     });
// }

//  export const viewSearchCountries = arraySearchCountries => {
//     let elementos2 = '';
//     arraySearchCountries.forEach(item => {
//         elementos2 += `
//         <article class="card">
//             <div class="card-content">
//                 <img src=${item.flag} alt="" class="img-fluid">  
//                 <h4>${item.name}</h4>
//             </div>
//         </article>
//         `
//     });
//         viewCountries.innerHTML = elementos2;
// }

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


























