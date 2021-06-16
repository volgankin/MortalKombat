import { player1,  player2 } from './players.js';
import generateLogs from './generateLogs.js';

function fight (enemy, player) {
    if (enemy.hit !== player.defence) {
        player2.changeHP(enemy.value);
        player2.renderHP();
        generateLogs('hit', player1, player2, enemy.value);
    }  else {
        generateLogs('defence', player1, player2);
    }

    if (player.hit !== enemy.defence) {
        player1.changeHP(player.value);
        player1.renderHP();
        generateLogs('hit', player2, player1, player.value);
    } else {
        generateLogs('defence', player2, player1);
    }
};

export default fight;
