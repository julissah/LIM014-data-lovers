const viewCountries = document.getElementById('mainCountries');
const viewAthletes = document.getElementById('mainAthletes');
const searchC = document.getElementById('searchC');
const searchA = document.getElementById('searchA');

// *** Countries
export const countries = (dataCountries,dataCountriesFlag) =>{
  const sorted = dataCountries.sort();
  const unique = sorted.filter((value,index) => {
      return value != sorted[index + 1];
  });
  console.log(unique)
  let elementos = '';
  
  for (let i = 0; i < unique.length; i++) {
      for (let f = 0; f < dataCountriesFlag.length; f++) {    
          if (dataCountriesFlag[f].alpha3Code.indexOf(unique[i])!== -1) {
          // console.log(dataCountriesFlag);
          elementos += `
          <article class="card">
          <div class="card-content">
              <img src=${dataCountriesFlag[f].flag} alt="" class="img-fluid">  
              <h4>${dataCountriesFlag[f].name}</h4>
              <!--<h4>${dataCountriesFlag[f].alpha3Code}</h4>-->
              <!--<h4>${unique[i]}</h4>-->
          </div>
          </article>
          `
      } 
  }    
}
viewCountries.innerHTML = elementos;
}

// Filtro de busqueda Countries

export const searchCountries = dataCountriesFlag => {
    const inputSearchCountries = document.getElementById('inputSearchCountries');

    searchC.addEventListener('keyup', e => {
        e.preventDefault()
        const textUser = inputSearchCountries.value.toLowerCase();
        // console.log(textUser);
        // console.log(typeof(textUser));
        
        const arraySearchCountries = dataCountriesFlag.filter(item => {
            const itemTeam = item.name.toLowerCase();
            console.log(itemTeam);
            if(itemTeam.indexOf(textUser)!== -1 ){
                 return item;
            } 
        })
        viewSearchCountries(arraySearchCountries);
    });
 }

 export const viewSearchCountries = arraySearchCountries => {
    let elementos2 = '';
    arraySearchCountries.forEach(item => {
        elementos2 += `
        <article class="card">
            <div class="card-content">
                <img src=${item.flag} alt="" class="img-fluid">  
                <h4>${item.name}</h4>
            </div>
        </article>
        `
    });
        viewCountries.innerHTML = elementos2;
}

// Filtro Alpha
// export const orderAlphaZA = (arraySearchCountries) => {
//     const orderAlpha = document.getElementById('orderAlpha');
//     orderAlpha.addEventListener('click',() => {
        
//     })
//     return ;
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
    for (let i = 0; i < 20; i++) {
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