const viewCountries = document.getElementById('viewCountries');

document.addEventListener("DOMContentLoaded", e => {
    // le pasamos lo que queremos cargar cuando se ingrese a nuestro sitio web
    obtenerCountries();
})

const obtenerCountries = async () => {
    try {
        const res = await fetch ('./data/athletes/athletes.json')
        const resCountries = await fetch ('./data/athletes/countriesFlag.json')
        const data = await res.json()
        const dataCountriesFlag = await resCountries.json()
        const data1 = data.athletes.map(athletes => athletes)   
         
        const arrayCountries = data1.map(athletes => athletes.noc);
        mostrar(arrayCountries,dataCountriesFlag);
        // dataCountries(arrayCountries,dataCountriesFlag);
        // console.log(dataCountriesFlag)
    } catch (error) {
        console.log(error);
    }
}

const mostrar = (arrayCountries,dataCountriesFlag) =>{
    const sorted = arrayCountries.sort();
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
        } else {
            console.log('no es igual');
        }
    }
    // elementos += `
    // <article class="card">
    //     <div class="card-content">
    //         <h4>${unique[i]}</h4>
    //     </div>
    // </article>
    // `  
    
    // console.log(elementos);
    
}
viewCountries.innerHTML = elementos;
}