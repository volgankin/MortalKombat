import { player1,  player2 } from './players.js';
import generateLogs from './generateLogs.js';

function fight (enemy, player) {
    const { value: valueEnemy, hit: hitEnemy, defence: defenceEnemy } = enemy;
    const { value, hit, defence } = player;

    if (hitEnemy !== defence) {
        player2.changeHP(valueEnemy);
        player2.renderHP();
        generateLogs('hit', player1, player2, valueEnemy);
    }  else {
        generateLogs('defence', player1, player2);
    }

    if (hit !== defenceEnemy) {
        player1.changeHP(value);
        player1.renderHP();
        generateLogs('hit', player2, player1, value);
    } else {
        generateLogs('defence', player2, player1);
    }
};

export default fight;
