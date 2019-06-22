const displayArea = document.getElementsByClassName('char-display-div');
function hideDisplay() {
    displayArea.style.display = 'none';
}
window.onload = hideDisplay;
//object storing the character's info and attributes for when it is created
let character = {
    name: '',
    gender: '',
    race: '',
    class: '',
    subclass: '',
    baseStats: {
        str: 5,
        dex: 5,
        int: 5
    }
};

//object containing the name attribute affects of each class
const classesAndStatBoosts = {
    warrior: {
        str: 5,
        dex: 1,
        int: 0
    },
    rogue: {
        str: 1,
        dex: 5,
        int: 0
    },
    mage: {
        str: 0,
        dex: 0,
        int: 6
    }
} 

//object containing the name and attribute affects of each subclass
const subClassesAndStatBoosts = {
    warrior: {
        berserker: {
            name: 'Berserker',
            str: 4,
            dex: 0,
            int: -1
        },
        fighter: {
            name: 'Fighter',
            str: 2,
            dex: 1,
            int: 0
        },
        knight: {
            name: 'Knight',
            str: 2,
            dex: -1,
            int: 2
        }
    },
    rogue: {
        assassin: {
            name: 'Assassin',
            str: -1,
            dex: 4,
            int: 0
        },
        thief: {
            name: 'Thief',
            str: -1,
            dex: 3,
            int: 1
        },
        ranger: {
            name: 'Ranger',
            str: -1,
            dex: 2,
            int: 2
        }
    },
    mage: {
        elementalist: {
            name: 'Elementalist',
            str: 0,
            dex: 0,
            int: 3
        },
        battlemage: {
            name: 'Battlemage',
            str: 1,
            dex: 0,
            int: 2
        },
        arcanist: {
            name: 'Arcanist',
            str: -1,
            dex: -1,
            int: 5
        }
    }
};

//make a reset the attributes function for when players change character again
function resetAttributes() {
    character.baseStats.str = 5;
    character.baseStats.dex = 5;
    character.baseStats.int = 5;
}
//applies boost to stats for choosing warrior
function warriorAttributeBoost() {
    character.baseStats.str += classesAndStatBoosts.warrior.str;
    character.baseStats.dex += classesAndStatBoosts.warrior.dex;
    character.baseStats.int += classesAndStatBoosts.warrior.int;
}
//applies boost to stats for choosing rogue
function rogueAttributeBoost() {
    character.baseStats.str += classesAndStatBoosts.rogue.str;
    character.baseStats.dex += classesAndStatBoosts.rogue.dex;
    character.baseStats.int += classesAndStatBoosts.rogue.int;
}
//applies boost to stats for choosing mage
function mageAttributeBoost() {
    character.baseStats.str += classesAndStatBoosts.mage.str;
    character.baseStats.dex += classesAndStatBoosts.mage.dex;
    character.baseStats.int += classesAndStatBoosts.mage.int;
}
//detect stats when choosing warrior subclasses
function detectWarriorSubClass() {
    let characterSubClass = document.getElementById('subclass-select').value;
    if(characterSubClass === 'Berserker') {
        character.baseStats.str += subClassesAndStatBoosts.warrior.berserker.str;
        character.baseStats.dex += subClassesAndStatBoosts.warrior.berserker.dex;
        character.baseStats.int += subClassesAndStatBoosts.warrior.berserker.int;
    }else if(characterSubClass === 'Fighter') {
        character.baseStats.str += subClassesAndStatBoosts.warrior.fighter.str;
        character.baseStats.dex += subClassesAndStatBoosts.warrior.fighter.dex;
        character.baseStats.int += subClassesAndStatBoosts.warrior.fighter.int;
    }else if(characterSubClass === 'Knight') {
        character.baseStats.str += subClassesAndStatBoosts.warrior.knight.str;
        character.baseStats.dex += subClassesAndStatBoosts.warrior.knight.dex;
        character.baseStats.int += subClassesAndStatBoosts.warrior.knight.int;
    }
};
//detect attribute boosts for the rogue subclasses
function detectRogueSubClass() {
    let characterSubClass = document.getElementById('subclass-select').value;
    if(characterSubClass === 'Assassin') {
        character.baseStats.str += subClassesAndStatBoosts.rogue.assassin.str;
        character.baseStats.dex += subClassesAndStatBoosts.rogue.assassin.dex;
        character.baseStats.int += subClassesAndStatBoosts.rogue.assassin.int;
    }else if(characterSubClass === 'Thief') {
        character.baseStats.str += subClassesAndStatBoosts.rogue.thief.str;
        character.baseStats.dex += subClassesAndStatBoosts.rogue.thief.dex;
        character.baseStats.int += subClassesAndStatBoosts.rogue.thief.int;
    }else if(characterSubClass === 'Ranger') {
        character.baseStats.str += subClassesAndStatBoosts.rogue.ranger.str;
        character.baseStats.dex += subClassesAndStatBoosts.rogue.ranger.dex;
        character.baseStats.int += subClassesAndStatBoosts.rogue.ranger.int;
    }
}

//detect attribute boosts for the mage subclasses
function detectMageSubClasses() {
    let characterSubClass = document.getElementById('subclass-select').value;
    if(characterSubClass === 'Elementalist') {
        character.baseStats.str += subClassesAndStatBoosts.mage.elementalist.str;
        character.baseStats.dex += subClassesAndStatBoosts.mage.elementalist.dex;
        character.baseStats.int += subClassesAndStatBoosts.mage.elementalist.int;
    }else if(characterSubClass === 'Arcanist') {
        character.baseStats.str += subClassesAndStatBoosts.mage.arcanist.str;
        character.baseStats.dex += subClassesAndStatBoosts.mage.arcanist.dex;
        character.baseStats.int += subClassesAndStatBoosts.mage.arcanist.int;
    }else if(characterSubClass === 'Battlemage') {
        character.baseStats.str += subClassesAndStatBoosts.mage.battlemage.str;
        character.baseStats.dex += subClassesAndStatBoosts.mage.battlemage.dex;
        character.baseStats.int += subClassesAndStatBoosts.mage.battlemage.int;
    }
}

//based on the choice of the class the character creator will reveal different subclasses
function detectClass() {
    let characterClass = document.getElementById('class-select').value;
    if(characterClass === 'Warrior') {
        document.getElementById('subclass-1').innerHTML = subClassesAndStatBoosts.warrior.berserker.name;
        document.getElementById('subclass-2').innerHTML = subClassesAndStatBoosts.warrior.fighter.name;
        document.getElementById('subclass-3').innerHTML = subClassesAndStatBoosts.warrior.knight.name;
        resetAttributes();
        warriorAttributeBoost();
        detectWarriorSubClass();
    }else if (characterClass === 'Rogue') {
        document.getElementById('subclass-1').innerHTML = subClassesAndStatBoosts.rogue.assassin.name;
        document.getElementById('subclass-2').innerHTML = subClassesAndStatBoosts.rogue.ranger.name;
        document.getElementById('subclass-3').innerHTML = subClassesAndStatBoosts.rogue.thief.name;
        resetAttributes();
        rogueAttributeBoost();
        detectRogueSubClass();
    }else if (characterClass === 'Mage') {
        document.getElementById('subclass-1').innerHTML = subClassesAndStatBoosts.mage.arcanist.name;
        document.getElementById('subclass-2').innerHTML = subClassesAndStatBoosts.mage.battlemage.name;
        document.getElementById('subclass-3').innerHTML = subClassesAndStatBoosts.mage.elementalist.name;
        resetAttributes();
        mageAttributeBoost();
        detectMageSubClasses();
    }
};

document.getElementById('class-select').onchange = detectClass;
//needs to be mapped to a different function this was just a (((TEST)))
document.getElementById('subclass-select').onchange = detectClass;

//fill in the blanks on the character object above
function updateModel() {
    character.name = document.getElementById('name-input').value;
    character.gender = document.getElementById('gender-select').value;
    character.race = document.getElementById('race-select').value;
    character.class = document.getElementById('class-select').value;
    character.subclass = document.getElementById('subclass-select').value;
};

//reveal the choices of the character creator on the right side of the page
function updateCharacterDisplay() {
    updateModel();
    document.getElementById('name-display').innerHTML = ' ' + character.name;
    document.getElementById('gender-display').innerHTML = ' ' + character.gender;
    document.getElementById('race-display').innerHTML = ' ' + character.race;
    document.getElementById('class-display').innerHTML = ' ' + character.class;
    document.getElementById('subclass-display').innerHTML = ' ' + character.subclass;
    document.getElementById('str-display').innerHTML = ' ' + character.baseStats.str;
    document.getElementById('dex-display').innerHTML = ' ' + character.baseStats.dex;
    document.getElementById('int-display').innerHTML = ' ' + character.baseStats.int;
};

//run the updateCharacterDisplay function when this is called
function formSubmit() {
    let characterName = document.getElementById('name-input').value;
    let characterRace = document.getElementById('race-select').value;
    let characterClass = document.getElementById('class-select').value;
    let characterSubClass = document.getElementById('subclass-select').value;
    if(characterName === '') {
        alert('Character must have a name!');
    }else if(characterRace === 'Choose Race') {
        alert('Must choose a race for your character!');
    }else if(characterClass === 'Choose Class') {
        alert('Must choose a class for your character!');
    }else if(characterSubClass === 'Choose Subclass') {
        alert('Must choose a subclass for your character!');
    }else {
       updateCharacterDisplay();
    }
    
};
//call the formSubmit function when submit is clicked
document.getElementById('char-submit').onclick = formSubmit;


