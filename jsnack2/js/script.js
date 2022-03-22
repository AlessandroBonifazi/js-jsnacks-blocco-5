// Debug
console.log('JS OK!');

// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

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
        length: 25,
    },
    {
        variety: 'Zucchina napoletana',
        weight: 70,
        length: 12,
    },
    {
        variety: 'Zucchine tonde',
        weight: 110,
        length: 12,
    },
    {
        variety: 'Zucchine trombetta',
        weight: 60,
        length: 20,
    },
    {
        variety: 'Zucchina pâtisson',
        weight: 130,
        length: 12,
    },
    {
        variety: 'Zucchino giallo',
        weight: 90,
        length: 25,
    },
    {
        variety: 'Zucchino rugoso friulano',
        weight: 75,
        length: 12,
    },
    {
        variety: 'Zucchina Crookneck',
        weight: 160,
        length: 20,
    },
];

const zucchineBig = [];
const zucchineSmall = [];
let totWeight = 0;

const resultBig = document.getElementById('resultBig');
const resultSmall = document.getElementById('resultSmall');

for (let i = 0; i < zucchine.length; i++) {
    if (zucchine[i].length >= 15) {
        zucchineBig.push(zucchine[i]);
    }
    else {
        zucchineSmall.push(zucchine[i]);
    }
}

// Functions
function calcTotWeight(array) {
    for (let i = 0; i < array.length; i++) {
        totWeight += array[i].weight;
    }
    return totWeight;
}

calcTotWeight(zucchineBig);
resultBig.innerText = 'Tot Weight Big: ' + totWeight;
calcTotWeight(zucchineSmall);
resultSmall.innerText = 'Tot Weight Small: ' + totWeight;