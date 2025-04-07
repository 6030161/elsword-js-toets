import { Character } from './character.js';
const deck = []
const maxDeckSize = 2;



async function showCharacters() {
const characterLijst = document.getElementById('character-lijst')
const template = document.getElementById('character-template');

try {
    const response = await fetch('https://my-json-server.typicode.com/6030161/elsword-js-toets/characters')
    const data = await response.json();



    data.forEach(characterData => {
        const character = new Character(characterData.id, characterData.name, characterData.age, characterData.weapon, characterData.class);
        const button = template.content.cloneNode(true).querySelector('button');
        button.innerText = character.name;
        button.onclick = () => character.showCharacterInfo();

        characterLijst.appendChild(button);
    });
} catch(error) {
     console.log('data kan niet gefetched worden', error);
}

 function addToDeck(character) {
    if(deck.length < maxDeckSize) {
        deck.push(character);
        updateDeck();
    }
 }


}        
window.onload = showCharacters;

