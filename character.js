export class Character {
    constructor(id, name, age, weapon, charClass) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.weapon = weapon;
        this.charClass = charClass;
    }

    showCharacterInfo() {
        document.getElementById('char-name').innerText = `Name: ${this.name}`;
        document.getElementById('char-age').innerText = `Age: ${this.age}`;
        document.getElementById('char-weapon').innerText = `Weapon: ${this.weapon}`; 
        document.getElementById('char-class').innerText = `Class: ${this.charClass}`;
    }
}