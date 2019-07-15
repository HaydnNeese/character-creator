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
const thief = new TierOneEnemy(5, 2, 0, 2, .5, .007);
const trickster = new TierOneEnemy(3, 1, 1, 1, 1, .003);
const sewerRat = new TierOneEnemy(2, 1, 0, .5, .3, .005);
const skeleton = new TierOneEnemy(2, 1, 0, 1, 0, .002)

//tierOneBosses
const cultLeader = new TierOneBoss(10, 2, 5, 4, 3, .1);
const skullReaver = new TierOneBoss(15, 6, 0, 5, 2, .2);