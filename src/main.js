const viewAthletes = document.getElementById('viewAthletes');

const search = document.getElementById('search');
const inputSearchAthletes = document.getElementById('inputSearchAthletes');

// consumo de la API
document.addEventListener("DOMContentLoaded", e => {
    // le pasamos lo que queremos cargar cuando se ingrese a nuestro sitio web
    obtenerAthletes();
})
 
// Como haremos una consulta exterior por la API trabajaremos con ASYNC Y AWAIT
const obtenerAthletes = async () => {
    try {
        const res = await fetch ('./data/athletes/athletes.json')
        const resCountries = await fetch ('./data/athletes/countriesFlag.json')
        const data = await res.json()
        const dataCountriesFlag = await resCountries.json()
        const data1 = data.athletes.map(athletes => athletes)   
        const arrayMedalGold = data1.filter(athletes => athletes.medal === 'Gold') 
        const arrayCountries = data1.map(athletes => athletes.team);
        // console.log(dataCountries);
        dataAthletes(arrayMedalGold)
        // dataAthletes1(data1);
        searchAthletes(data1,arrayMedalGold);   
        // dataCountries(dataCountriesFlag);
        const arrayAthletes = data.athletes.filter(athletes => athletes.name) 
        const arrayMedalBronze = data.athletes.filter(athletes => athletes.medal === 'Bronze')
        const arrayAthletesUsain = data.athletes.filter(athletes => athletes.name === 'Usain St. Leo Bolt') 
        const arrayName = data.athletes.map(athletes => athletes.name)
        const arrayNoc = data.athletes.map(athletes => athletes.noc)
        const arraySport = data.athletes.map(athletes => athletes.sport)
        console.log(arrayAthletes[0].name);



    } catch (error) {
        console.log(error);
    }
}


const dataAthletes = arrayMedalGold => {
    let elementos = '';
    
    // console.log(medalGoldAthletes);
    for (let i = 0; i < 21; i++) {
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
 

const dataAthletes1 = data1 => {
    let elementos = '';

    data1.forEach(item => {
        elementos += `
        <article class="card">
            <div class="card-content">
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


 const searchAthletes = (data1,arrayMedalGold) => {
    search.addEventListener('keyup', e => {
        e.preventDefault()
        const textUser = inputSearchAthletes.value.toLowerCase();
        console.log(textUser);
        
        const arrayTeam = data1.filter(item => {
            const itemTeam = item.name.toLowerCase();
            // console.log(itemTeam.length);
            if(itemTeam.indexOf(textUser)!== -1 ){
                 return item;
            } 
        })
        
        if (arrayTeam.length == 2023) {
            
            dataAthletes(arrayMedalGold);
        } else {
            dataAthletes1(arrayTeam);
        }
        // dataAthletes1(arrayTeam);
    });
 }



