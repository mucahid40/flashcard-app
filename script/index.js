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
console.log(wordSet[0], wordSet[1]);

// Change the h1 tag value
// Fetch current h1

// 0 = Spanish, 1 = English
let language = 0;
let currentH1 = document.getElementById('content');
currentH1.innerHTML = wordSet[language];



function myFunc() {
    // if color is red
    if (document.getElementById('content').style.color === 'red') {
        // get element by id and change color
        document.getElementById('content').style.color = 'black';

        //log what code i used
        console.log("document.getElementById('content').style.color = 'black'");
    }

    else {

    //get element by id and change color
    document.getElementById('content').style.color = 'red';

    //log what code i used
    console.log("document.getElementById('content').style.color = 'red'");
    }

}