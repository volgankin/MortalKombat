import { player1,  player2 } from './players.js';
import generateLogs from './generateLogs.js';

function fight (enemy, player) {
    const { value: vEnemy, hit: hitEnemy, defence: defEnemy } = enemy;
    const { value: vPlayer, hit: hitPlayer, defence: defPlayer } = player;

    if (hitEnemy !== defPlayer) {
        player2.changeHP(vEnemy);
        player2.renderHP();
        generateLogs('hit', player1, player2, vEnemy);
    }  else {
        generateLogs('defence', player1, player2);
    }

    if (hitPlayer !== defEnemy) {
        player1.changeHP(vPlayer);
        player1.renderHP();
        generateLogs('hit', player2, player1, vPlayer);
    } else {
        generateLogs('defence', player2, player1);
    }
};

export default fight;
