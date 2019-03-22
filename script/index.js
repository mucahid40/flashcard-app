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
    wordSet = list[randomValue];
    return wordSet;
}

// Assign starting value, language and color
wordSet = getRandomValue(wordDictionary);
let language = 0;
let word = document.getElementById('content');
word.innerHTML = getRandomValue(wordDictionary)[language];
word.style.color = 'black';


// Switch between Spanish and English
function switchLanguage(){
    let word = document.getElementById('content');
    if(language === 0){
        language = 1;
        word.innerHTML = wordSet[1];
        word.style.color = 'red';
        return language;
    } else if (language === 1){
        language = 0;
        word.innerHTML = wordSet[0];
        word.style.color = 'black';
        return language;
    }
}

// let lang = document.getElementById('language');
// console.log(lang);
// lang.innerHTML = 'spanish';
// console.log(lang);

// function switchLangName () {
//     let lang = document.getElementById('language');
//     console.log(lang);
// }


function action() {
    switchLanguage();
    
    // switchLangName(switchLanguage());
}

// reset/next word
function reset() {
    let nextWordSet = getRandomValue(wordDictionary);
    console.log(nextWordSet[0], nextWordSet[1]);
    word.innerHTML = nextWordSet[0];
    word.style.color = 'black';
    language = 0;
}
