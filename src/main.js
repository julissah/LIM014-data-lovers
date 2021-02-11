// import athletes from './data/athletes/athletes.js';
// import athletes from './data/athletes/athletes.js';
// import data from './data/athletes/athletes.js';

// const data = './data/athletes/athletes.js';
// const res = '';
// fetch({data}).then(res => athletes.js())
// // .catch(error => console.error('Error:', error))
// // .then(response => console.log('Success:', response));
// console.log(res);
// console.log(example, data);

// fetch('./data/athletes/athletes.js')
// .then( answer => {return data.results} )

// .then(data =>{
//     // console.log(data.results)
//     data.results.forEach(element => {
//         console.log(element.name);
//     });
// });
// document.write(Object.values(athletes.athletes));





const obtenerAthletes = async() => {
        
        const res = await fetch ('./data/athletes/athletes.json')
        const data = await res.json()
        // console.log(data)    
        // const arrayAthletes = data.athletes.map(athletes => athletes)   
        const arrayAthletes = data.athletes.filter(athletes => athletes.name) 
        const arrayMedalGold = data.athletes.filter(athletes => athletes.medal === 'Gold') 
        const arrayMedalBronze = data.athletes.filter(athletes => athletes.medal === 'Bronze')
        const arrayAthletesUsain = data.athletes.filter(athletes => athletes.name === 'Usain St. Leo Bolt') 
        const arrayName = data.athletes.map(athletes => athletes.name)
        const arrayNoc = data.athletes.map(athletes => athletes.noc)
        const arraySport = data.athletes.map(athletes => athletes.sport)
        //data.athletes.filter(athletes => console.log(athletes))
        // console.log(arrayName);
        // console.log(arrayNoc);
        // console.log(arraySport);
        // console.log(arrayAthletes[0]);
        // console.log(arrayName[1])
        // console.log(arrayMedalGold);
        // console.log(arrayMedalBronze);

        // const Usain = arrayAthletesUsain.toString();
        // console.log(console.log(Usain));

        // document.getElementById('mostrarAtletas').innerHTML.name = Usain;

        for (let a=0; a<arrayAthletesUsain.length; a++){
            // document.getElementById('mostrarAtletas').innerHTML = arrayAthletesUsain[a];
            document.getElementById('mostrarAtletas').innerHTML = `<p>${arrayAthletesUsain[a].name}</p><br>
            <p>${arrayAthletesUsain[a].noc}</p> <br> <p>${arrayAthletesUsain[a].sport}</p>`;
            console.log(arrayAthletesUsain[a]);
            // prompt(arrayAthletesUsain[a]);
        }

        console.log(arrayAthletes[0].name);
        // } catch (error) {
        //     console.log(error)
        // }

        
    }

 obtenerAthletes()
