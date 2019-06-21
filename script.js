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
            str: 1,
            dex: 0,
            int: 2
        },
        battlemage: {
            name: 'Battlemage',
            str: 1,
            dex: 1,
            int: 1
        },
        arcanist: {
            name: 'Arcanist',
            str: -1,
            dex: -1,
            int: 5
        }
    }
};

//make a zero the stats function for when players change character again
function resetAttributes() {
    character.baseStats.str = 5;
    character.baseStats.dex = 5;
    character.baseStats.int = 5;
}

//based on the choice of the class the character creator will reveal different subclasses
function detectClass() {
    let characterClass = document.getElementById('class-select').value;
    if(characterClass === 'warrior') {
        document.getElementById('subclass-1').innerHTML = subClassesAndStatBoosts.warrior.berserker.name;
        document.getElementById('subclass-2').innerHTML = subClassesAndStatBoosts.warrior.fighter.name;
        document.getElementById('subclass-3').innerHTML = subClassesAndStatBoosts.warrior.knight.name;
        resetAttributes();
        character.baseStats.str += classesAndStatBoosts.warrior.str;
        character.baseStats.dex += classesAndStatBoosts.warrior.dex;
        character.baseStats.int += classesAndStatBoosts.warrior.int;
        detectWarriorSubClass();
    }else if (characterClass === 'rogue') {
        document.getElementById('subclass-1').innerHTML = subClassesAndStatBoosts.rogue.assassin.name;
        document.getElementById('subclass-2').innerHTML = subClassesAndStatBoosts.rogue.ranger.name;
        document.getElementById('subclass-3').innerHTML = subClassesAndStatBoosts.rogue.thief.name;
        resetAttributes();
        character.baseStats.str += classesAndStatBoosts.rogue.str;
        character.baseStats.dex += classesAndStatBoosts.rogue.dex;
        character.baseStats.int += classesAndStatBoosts.rogue.int;
    }else if (characterClass === 'mage') {
        document.getElementById('subclass-1').innerHTML = subClassesAndStatBoosts.mage.arcanist.name;
        document.getElementById('subclass-2').innerHTML = subClassesAndStatBoosts.mage.battlemage.name;
        document.getElementById('subclass-3').innerHTML = subClassesAndStatBoosts.mage.elementalist.name;
        resetAttributes();
        character.baseStats.str += classesAndStatBoosts.mage.str;
        character.baseStats.dex += classesAndStatBoosts.mage.dex;
        character.baseStats.int += classesAndStatBoosts.mage.int;
    }
};

document.getElementById('class-select').onchange = detectClass;
//needs to be mapped to a different function this was just a (((TEST)))
document.getElementById('subclass-select').onchange = detectClass;

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

//need to do the same for rogue and mage subcclasses

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
    document.getElementById('name-display').innerHTML = 'Name: ' + character.name;
    document.getElementById('gender-display').innerHTML = 'Gender: ' + character.gender;
    document.getElementById('race-display').innerHTML = 'Race: ' + character.race;
    document.getElementById('class-display').innerHTML = 'Class: ' + character.class;
    document.getElementById('subclass-display').innerHTML = 'Subclass: ' + character.subclass;
    document.getElementById('str-display').innerHTML = 'Str: ' + character.baseStats.str;
    document.getElementById('dex-display').innerHTML = 'Dex: ' + character.baseStats.dex;
    document.getElementById('int-display').innerHTML = 'Int: ' + character.baseStats.int;
};

//run the updateCharacterDisplay function when this is called
function formSubmit() {
    updateCharacterDisplay();
};
//call the formSubmit function when submit is clicked
document.getElementById('char-submit').onclick = formSubmit;


