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
    },
    generatedStats: {
        health: 0,
        defense: 0,
        dodge: 0,
        attackPower: 0,
        spellPower: 0,
        crit: 0
    }
};

//object containing the attribute affects of each race
const racesAndStatBoosts = {
    human: {
        str: 2,
        dex: 2,
        int: 2,
        hpMult: 1.7,
        defMult: .8
    },
    dwarf: {
        str: 6,
        dex: 0,
        int: 0,
        hpMult: 2.0,
        defMult: 1
    },
    elf: {
        str: 0,
        dex: 2,
        int: 4,
        hpMult: 1.3,
        defMult: .4
    },
    orc: {
        str: 5,
        dex: 1,
        int: 0,
        hpMult: 1.9,
        defMult: .6
    },
    darkElf: {
        str: 0,
        dex: 3,
        int: 3,
        hpMult: 1.5,
        defMult: .5
    },
    goblin: {
        str: 0,
        dex: 5,
        int: 1,
        hpMult: 1.2,
        defMult: 1.3
    }
};

//object containing the attribute affects of each class
const classesAndStatBoosts = {
    warrior: {
        str: 5,
        dex: 1,
        int: 0,
        apMult: 3
    },
    rogue: {
        str: 1,
        dex: 5,
        int: 0,
        apMult: 2
    },
    mage: {
        str: 0,
        dex: 0,
        int: 6,
        spMulti: 3
    }
};

//object containing the name and attribute affects of each subclass
const subClassesAndStatBoosts = {
    warrior: {
        berserker: {
            name: 'Berserker',
            str: 4,
            dex: 0,
            int: -1,
            hp: 10,
            def: -3,
            attackPower: 10,
            spellPower: 0,
            img: 'images/warriors/berserker/male_merc.png'
        },
        fighter: {
            name: 'Fighter',
            str: 2,
            dex: 1,
            int: 0,
            hp: 4,
            def: 4,
            attackPower: 5,
            spellPower: 0,
            img: 'images/warriors/fighter/male_mercenary.png'
        },
        knight: {
            name: 'Knight',
            str: 2,
            dex: -1,
            int: 2,
            hp: 3,
            def: 8,
            attackPower: 4,
            spellPower: 4,
            img: 'images/warriors/knight/male_merc.jpg'
        }
    },
    rogue: {
        assassin: {
            name: 'Assassin',
            str: -1,
            dex: 4,
            int: 0,
            hp: 2,
            def: 1,
            attackPower: 3,
            spellPower: 1,
            img: 'images/rogues/assassin/fem_mesmer.jpg'
        },
        thief: {
            name: 'Thief',
            str: -1,
            dex: 3,
            int: 1,
            hp: 1,
            def: 3,
            attackPower: 3,
            spellPower: 0,
            img: 'images/rogues/thief/male_bard.jpg'
        },
        ranger: {
            name: 'Ranger',
            str: -1,
            dex: 2,
            int: 2,
            hp: 4,
            def: 2,
            attackPower: 5,
            spellPower: 0,
            img: 'images/rogues/ranger/male_marksman.jpg'
        }
    },
    mage: {
        elementalist: {
            name: 'Elementalist',
            str: 0,
            dex: 0,
            int: 3,
            hp: 0,
            def: 0,
            attackPower: 0,
            spellPower: 10,
            img: 'images/mages/elementalist/male_cryo.jpg'
        },
        battlemage: {
            name: 'Battlemage',
            str: 1,
            dex: 0,
            int: 2,
            hp: 0,
            def: 0,
            attackPower: 0,
            spellPower: 10,
            img: 'images/mages/battlemage/male_battlemage.jpg'
        },
        arcanist: {
            name: 'Arcanist',
            str: -1,
            dex: -1,
            int: 5,
            hp: 0,
            def: 0,
            attackPower: 0,
            spellPower: 15,
            img: 'images/mages/arcanist/fem_ele.jpg'
        }
    }
};

//!!!!NEED TO MAKE IT WEAR THE NUMBERS DON'T ADD TOGETHER IF PLAYER CHANGES MIND!!!!
//**also need to make it where calculations happen to calculate HP, Defense, Crit, AP, and SP */


//make a reset the attributes function for when players change character again
function resetAttributes() {
    character.baseStats.str = 5;
    character.baseStats.dex = 5;
    character.baseStats.int = 5;
};
//add the attribute boost for the character based on which race it is
function humanStatBoost() {
    character.baseStats.str += racesAndStatBoosts.human.str;
    character.baseStats.dex += racesAndStatBoosts.human.dex;
    character.baseStats.int += racesAndStatBoosts.human.int;
};
function dwarfStatBoost() {
    character.baseStats.str += racesAndStatBoosts.dwarf.str;
    character.baseStats.dex += racesAndStatBoosts.dwarf.dex;
    character.baseStats.int += racesAndStatBoosts.dwarf.int;
}
function elfStatBoost() {
    character.baseStats.str += racesAndStatBoosts.elf.str;
    character.baseStats.dex += racesAndStatBoosts.elf.dex;
    character.baseStats.int += racesAndStatBoosts.elf.int;
};
function orcStatBoost() {
    character.baseStats.str += racesAndStatBoosts.orc.str;
    character.baseStats.dex += racesAndStatBoosts.orc.dex;
    character.baseStats.int += racesAndStatBoosts.orc.int;
};
function darkElfStatBoost() {
    character.baseStats.str += racesAndStatBoosts.darkElf.str;
    character.baseStats.dex += racesAndStatBoosts.darkElf.dex;
    character.baseStats.int += racesAndStatBoosts.darkElf.int;
}
function goblinStatBoost() {
    character.baseStats.str += racesAndStatBoosts.goblin.str;
    character.baseStats.dex += racesAndStatBoosts.goblin.dex;
    character.baseStats.int += racesAndStatBoosts.goblin.int;
}
//applies boost to stats for choosing warrior
function warriorAttributeBoost() {
    character.baseStats.str += classesAndStatBoosts.warrior.str;
    character.baseStats.dex += classesAndStatBoosts.warrior.dex;
    character.baseStats.int += classesAndStatBoosts.warrior.int;
};
//applies boost to stats for choosing rogue
function rogueAttributeBoost() {
    character.baseStats.str += classesAndStatBoosts.rogue.str;
    character.baseStats.dex += classesAndStatBoosts.rogue.dex;
    character.baseStats.int += classesAndStatBoosts.rogue.int;
};
//applies boost to stats for choosing mage
function mageAttributeBoost() {
    character.baseStats.str += classesAndStatBoosts.mage.str;
    character.baseStats.dex += classesAndStatBoosts.mage.dex;
    character.baseStats.int += classesAndStatBoosts.mage.int;
};
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
};

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
};

function detectRace() {
    let characterRace = document.getElementById('race-select').value;
    if(characterRace === 'Human') {
        humanStatBoost();
    }else if(characterRace === 'Elf') {
        elfStatBoost();
    }else if(characterRace === 'Orc') {
        orcStatBoost();
    }else if(characterRace === 'Dwarf') {
        dwarfStatBoost();
    }else if(characterRace === 'Dark Elf') {
        darkElfStatBoost();
    }else if(characterRace === 'Goblin') {
        goblinStatBoost();
    }
};

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
        detectRace();
    }else if (characterClass === 'Rogue') {
        document.getElementById('subclass-1').innerHTML = subClassesAndStatBoosts.rogue.assassin.name;
        document.getElementById('subclass-2').innerHTML = subClassesAndStatBoosts.rogue.ranger.name;
        document.getElementById('subclass-3').innerHTML = subClassesAndStatBoosts.rogue.thief.name;
        resetAttributes();
        rogueAttributeBoost();
        detectRogueSubClass();
        detectRace();
    }else if (characterClass === 'Mage') {
        document.getElementById('subclass-1').innerHTML = subClassesAndStatBoosts.mage.arcanist.name;
        document.getElementById('subclass-2').innerHTML = subClassesAndStatBoosts.mage.battlemage.name;
        document.getElementById('subclass-3').innerHTML = subClassesAndStatBoosts.mage.elementalist.name;
        resetAttributes();
        mageAttributeBoost();
        detectMageSubClasses();
        detectRace();
    }
};

function detectSubClass() {
    detectWarriorSubClass();
    detectRogueSubClass();
    detectMageSubClasses();
};

document.getElementById('race-select').onchange = detectRace;
document.getElementById('class-select').onchange = detectClass;
document.getElementById('subclass-select').onchange = detectSubClass;


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
//make displays for HP, Defense, Dodge, and Crit

function playerImageDetector() {
    let characterSubclass = document.getElementById('subclass-select').value;
    console.log(characterSubclass);
    if(characterSubclass === 'Battlemage') {
        document.getElementById('profile-img').src = subClassesAndStatBoosts.mage.battlemage.img;
    }else if(characterSubclass === 'Arcanist') {
        document.getElementById('profile-img').src = subClassesAndStatBoosts.mage.arcanist.img;
    }else if(characterSubclass === 'Elementalist') {
        document.getElementById('profile-img').src = subClassesAndStatBoosts.mage.elementalist.img;
    }else if(characterSubclass === 'Berserker') {
        document.getElementById('profile-img').src = subClassesAndStatBoosts.warrior.berserker.img;
    }else if(characterSubclass === 'Knight') {
        document.getElementById('profile-img').src = subClassesAndStatBoosts.warrior.knight.img;
    }else if(characterSubclass === 'Fighter') {
        document.getElementById('profile-img').src = subClassesAndStatBoosts.warrior.fighter.img;
    }else if(characterSubclass === 'Assassin') {
        document.getElementById('profile-img').src = subClassesAndStatBoosts.rogue.assassin.img;
    }else if(characterSubclass === 'Thief') {
        document.getElementById('profile-img').src = subClassesAndStatBoosts.rogue.thief.img;
    }else if(characterSubclass === 'Ranger') {
        document.getElementById('profile-img').src = subClassesAndStatBoosts.rogue.ranger.img;
    }
}

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
       playerImageDetector();
    }
    
};

//call the formSubmit function when submit is clicked
document.getElementById('char-submit').onclick = formSubmit;

