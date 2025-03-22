const characterData = [
   {id: 1, name: 'Elsword', age: 13, weapon: 'Great Sword', class: 'Magical'},
   {id: 2, name: 'Rena', age: 'unkown', weapon: 'Bow', class: 'Magical'},
   {id: 3, name: 'Lu/Ciel', age: 'unknown/24', weapon: 'Magic Gauntlets, Demon Claws, Gun Blades' , class: 'Physical'},
   {id: 4, name: 'Rose', age: 19, weapon: 'HeavyWeaponry', class: 'Magical'},
   {id: 5, name: 'Laby', age: 'unknown', weapon: 'Mirror', class: 'Physical'},
];

function showCharacters() {
    const characterLijst = document.getElementById('character-lijst');

    characterData.forEach(character => {
        const button = document.createElement('button');
        button.innerText = character.name;
        button.onclick = () => showCharactersInfo(character);
        characterLijst.appendChild(button);
    })
}
 // 

function showCharactersInfo(character) { 
  document.getElementById('char-name').innerText = `Name: ${character.name}`;
  document.getElementById('char-age').innerText = `Age: ${character.age}`;
  document.getElementById('char-weapon').innerText = `Weapon: ${character.weapon}`; 
  document.getElementById('char-class').innerText = `Class: ${character.class}`;
}

window.onload = showCharacters;

