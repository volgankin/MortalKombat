import { getRandom } from './getRandom.js';
import { HIT } from './const.js';
import { $formFight } from './const.js';

function playerAttack () {
    const attack = {};

    for (let item of $formFight) {
        if (item.checked && item.name === 'hit') {
            attack.value = getRandom(HIT[item.value]);
            attack.hit = item.value;
        }

        if (item.checked && item.name === 'defence') {
            attack.defence = item.value;
        }

        item.checked = false;
    }

    return attack;
};

export default playerAttack;
