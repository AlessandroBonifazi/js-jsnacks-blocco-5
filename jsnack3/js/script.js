// Debug
console.log('JS OK!');

// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata
// (es. Ciao -> oaiC)

// Config
const result = document.getElementById('result');

// Functions
function reverseString(string) {
    let wordReverse = '';

    for (let i = string.length - 1; i >= 0; i--) {
        wordReverse += string[i]
    }

    return wordReverse;
}

// reverseString('hello');
result.innerText = reverseString('hello');
