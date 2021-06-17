import { player1,  player2} from './modules/players.js';
import { $arenas, $formFight } from './modules/const.js';

import createPlayer from './modules/createPlayer.js';
import renderMessage from './modules/renderMessage.js';
import enemyAttack from './modules/enemyAttack.js';
import playerAttack from './modules/playerAttack.js';
import fight from './modules/fight.js';
import generateLogs from './modules/generateLogs.js';
import fightButtonOff from './modules/fightButtonOff.js';

function init () {
    $arenas.appendChild(createPlayer(player1));
    $arenas.appendChild(createPlayer(player2));

    generateLogs('start', player1, player2);
};

init();

$formFight.addEventListener('submit', function(e) {
    e.preventDefault();

    const enemy = enemyAttack();
    const player = playerAttack();

    fight(enemy, player);
    fightButtonOff();
    renderMessage();
});
