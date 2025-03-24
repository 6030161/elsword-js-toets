import { Character } from './character.js';

function showCharacters() {
const characterLijst = document.getElementById('character-lijst');
const template = document.getElementById('character-template');

fetch('https://my-json-server.typicode.com/6030161/elsword-js-toets/characters')

.then(response => response.json()).then(data => {
    data.forEach(characterData => {
        const character = new Character(characterData.id, characterData.name, characterData.age, characterData.weapon, characterData.class);
        const button = template.content.cloneNode(true).querySelector('button');
        button.innerText = character.name;
        button.onclick = () => character.showCharacterInfo();

        characterLijst.appendChild(button);
    });
}) .catch(error => console.log('data kan niet gefetched worden', error));

}        
window.onload = showCharacters;

