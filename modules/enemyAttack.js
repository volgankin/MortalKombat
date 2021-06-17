import { getRandom } from './getRandom.js';
import { HIT, ATTACK } from './const.js';

function enemyAttack () {
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];

    return {
        value: getRandom(HIT[hit]),
        hit,
        defence,
    }
};

export default enemyAttack;
