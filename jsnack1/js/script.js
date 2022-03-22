// Debug
console.log('JS OK!');

// Crea un array di 10 oggetti che rappresentano una zucchina,
// indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

// Config
const zucchine = [
    {
        variety: 'Zucchina nera',
        weight: 150,
        length: 20,
    },
    {
        variety: 'Zucchino romanesco',
        weight: 100,
        length: 20,
    },
    {
        variety: 'Zucchino fiorentino',
        weight: 80,
        length: 20,
    },
    {
        variety: 'Zucchina napoletana',
        weight: 70,
        length: 20,
    },
    {
        variety: 'Zucchine tonde',
        weight: 110,
        length: 20,
    },
    {
        variety: 'Zucchine trombetta',
        weight: 60,
        length: 20,
    },
    {
        variety: 'Zucchina pâtisson',
        weight: 130,
        length: 20,
    },
    {
        variety: 'Zucchino giallo',
        weight: 90,
        length: 20,
    },
    {
        variety: 'Zucchino rugoso friulano',
        weight: 75,
        length: 20,
    },
    {
        variety: 'Zucchina Crookneck',
        weight: 160,
        length: 20,
    },
];

const result = document.getElementById('result');

// Functions
function calcTotWeight() {
    let totWeight = 0;

    for (let i = 0; i < zucchine.length; i++) {
        totWeight += zucchine[i].weight;
        result.innerText = 'Total Weight: ' + totWeight;
    }
    return totWeight;
}

calcTotWeight()