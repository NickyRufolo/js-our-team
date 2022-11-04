//nome professione ed immagine elementi che compongono uno staff, mi creo dati perenni dello staff. 
//Quindi creo una variabile che contiene elemento che caratterizza persona staff 
        //creo //ARRAY CONTENITORE GLOBALE DI ELEMENTI DELLO STESSO TIPO, ogni elemento INTERNO E UN OGGETTO, FATTO CON associazioni KEY --> VALORE, Dove OGNI KEY e ABBINATO A VALORE di tipo DIVERSO


//Array di oggetti
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: './wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

//come faccio a stampare le informazioni cioè degli oggetti all'interno dell'array? 

//DATO CHE é un Array, il modo per analizzare singolarmente ogni elemento interno --> Scannerizzare Array Oggetti CICLANDO ARRAY IN PRIMIS

//--> quindi prendo Team come Array, lo ciclo per tutta la sua lunghezza, quindi per tutti gli elementi che lo compongono -- 6 elementi quindi fa 6 cicli
for (let i = 0; i < team.length; i++){      
//ad ogni giro del ciclo ottengo il singolo oggetto
let elementoCorrente = team[i]; //mi salvo in una variabile il singolo elemento che analizzo ciclo per ciclo, giro 1 il primo, giro 2 secondo ecc..
console.log(elementoCorrente.name)
console.log(elementoCorrente.role)
console.log(elementoCorrente.image)


//Come faccio a stampare all'interno dell'HTML i dati elemento per elemenrto?
document.getElementById(`team`).innerHTML +=    
`
<div class="card" style="width: 18rem;">
<img src="${elementoCorrente.image}" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">${elementoCorrente.name}</h5>
    <p class="card-text">${elementoCorrente.role}</p>
    <a href="#" class="btn btn-primary">Get info</a>
</div>
</div>
`
}

