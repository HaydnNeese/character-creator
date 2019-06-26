class TierOneEnemy {
    constructor(hp, ap, sp, def, dodge, crit) {
        this.hp = hp;
        this.ap = ap;
        this.sp = sp;
        this.def = def;
        this.dodge = dodge;
        this.crit = crit;
    }
}

class TierOneBoss {
    constructor(hp, ap, sp, def, dodge, crit) {
        this.hp = hp;
        this.ap = ap;
        this.sp = sp;
        this.def = def;
        this.dodge = dodge;
        this.crit = crit;
    }
}

//tierOneEnemies
const barbarian = new TierOneEnemy(5, 2, 0, 2, .5, .02);
const trickster = new TierOneEnemy(3, 1, 1, 1, 1, .01);
const sewerRat = new TierOneEnemy(2, 1, 0, .5, .3, .005);

//tierOneBosses
const cultLeader = new TierOneBoss(10, 2, 5, 4, 3, .1);
const skullReaver = new TierOneBoss(15, 6, 0, 5, 2, .2);