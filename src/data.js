const viewCountries = document.getElementById('mainCountries');
const viewAthletes = document.getElementById('mainAthletes');
const searchC = document.getElementById('searchC'); // Filtro de búsqueda de 
const searchA = document.getElementById('searchA'); //
const searchTeam = document.getElementById("searchTeam");
const searchEvent = document.getElementById("searchEvent");
const viewSports = document.getElementById("mainSports");

// *** Countries prueba
export const countries = (dataCountries,dataCountriesFlag) =>{

    const unique = [...new Set(dataCountries)]
    const alpha3Code = dataCountriesFlag.map(athletes => athletes.alpha3Code)
    let elementos = '';
    for (let f = 0; f < dataCountriesFlag.length; f++) {    
            if (alpha3Code.includes(unique[f])) {
            elementos += `
            <article class="card">
            <div class="card-content">
                <img src=${dataCountriesFlag[f].flag} alt="" class="img-fluid" alt="Avatar">  
                <h4>${dataCountriesFlag[f].name}</h4>
            </div>
            </article>
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

export const orderAlpha = (option, arrayMedalGold) => {
    
    switch (option) {
      case "1":
        arrayMedalGold.sort((a, b) => a.name.localeCompare(b.name));
        athletesGold(arrayMedalGold);
        // arrayMedalGold.sort;
        break;

      default:
        arrayMedalGold.sort((a, b) => a.name.localeCompare(b.name));
        const reversed = arrayMedalGold.reverse();
        athletesGold(reversed)
    }
    return arrayMedalGold;
  };

// *** Athletes
export const athletesGold = arrayMedalGold => {
    let elementos = '';    
    // console.log(medalGoldAthletes);
    for (let i = 0; i < 250; i++) {
         elementos += `
        <article class="card">
            <div class="card-content">
                <img src="./img/logo.png" alt="" class="img">
                <h4>${arrayMedalGold[i].name.toUpperCase()}</h4>
                <p>
                    ${arrayMedalGold[i].noc } &nbsp|&nbsp ${arrayMedalGold[i].sport.toUpperCase()}
                </p>
                <p>
                    <a href="pais.html?name=${arrayMedalGold[i].games}">Mas info</a>
                </p>
            </div>
        </article>
        `
    }
    viewAthletes.innerHTML = elementos;
    // console.log(arrayMedalGold);
}

export const searchAthletes = (dataRio,arrayMedalGold) => {
    const inputSearchAthletes = document.getElementById('inputSearchAthletes');
    searchA.addEventListener('keyup', e => {
        e.preventDefault()
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
            athletesAll(arrayTeam);
        }
    });
 }

export const athletesAll = dataRio => {
    let elementos = '';
    dataRio.forEach(item => {
        elementos += `
        <article class="card">
            <div class="card-content">
                <img src="./img/logo.png" alt="" class="img">
                <h4>${item.name.toUpperCase()}</h4>
                <p>
                    ${item.noc} &nbsp|&nbsp ${item.sport.toUpperCase()}
                </p>
                <p>
                    <a href="pais.html?name=${item.games}">Mas info</a>
                </p>
            </div>
        </article>
        `
    });
    viewAthletes.innerHTML = elementos;

    
}

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

// Filtro de genero dentro de sección Athletes 
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
        // const option = document.createElement('option');
        // option.value = item;
        // document.querySelector('#searchEvent').appendChild(option);
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
        <article class="card">
            <div class="card-content">
                <img src="${item.img}" alt="imgSport">
                <h4>${item.sport}</h4>
                <p>
                    <a href="pais.html?name=#">Mas info</a>
                </p>
            </div>
        </article>
        `
    });
    viewSports.innerHTML = elementos;
}

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
  


