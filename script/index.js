const wordDictionary = [[['hola'], ['hi']],
    [['adiós'], ['bye']],
    [['¿qué tal?'], ['what\'s up']],
    [['bien'], ['fine']],
    [['cerveza'], ['beer']],
    [['vino'], ['wine']],
    [['hielo'], ['ice']],
    [['el búho'], ['the night bus']],
    [['¿cuánto cuesta?'], ['how much is it?']],
    [['¿aceptas tarjeta?'], ['may I pay with card?']]
];

// Function to select a random word set from the word dictionary
function getRandomValue(list){
    let min = 0;
    let max = (Math.floor(list.length));
    let randomValue = Math.floor(Math.random() * max + min);
    let wordSet = list[randomValue];
    return wordSet;
}

let wordSet = getRandomValue(wordDictionary);
console.log(wordSet);

// Change the h1 tag value
// Fetch current h1

let language = 0;
let word = document.getElementById('content');
word.innerHTML = wordSet[0];
word.style.color = 'black';

// Switch between Spanish and English
function switchLanguage(){
    let word = document.getElementById('content');
    if(language === 0){
        language = 1;
        word.innerHTML = wordSet[1];
        return language;
    } else if (language === 1){
        language = 0;
        word.innerHTML = wordSet[0];
        return language;
    }
}

function setColor() {
    let h1 = document.getElementById('content');
    // if color is red
    if (h1.style.color === 'red') {
        // get element by id and change color
        h1.style.color = 'black';

        //log what code i used
        console.log("h1.style.color = 'black'");

    } else {

    //get element by id and change color
    h1.style.color = 'red';

    //log what code i used
    console.log("h1.style.color = 'red'");
    }

}


function action() {
    switchLanguage();
}

function reset() {
    getRandomValue(wordDictionary)
    let nextWordSet = getRandomValue(wordDictionary);
    console.log(nextWordSet[0], nextWordSet[1]);
    word.innerHTML = nextWordSet[language];
}
