import { renderMessage, enemyAttack, playerAttack, fight, generateLogs, fightButtonOff } from './game/index.js';
import { $formFight } from './constants/index.js';

import Player from './Player/index.js';

export const player1 = new Player({
    player: 1,
    name: 'Kitana',
    hp: 100,
    img: '../img/kitana.gif',
    rootSelector: 'arenas',
});

export const player2 = new Player({
    player: 2,
    name: 'Sonya',
    hp: 100,
    img: '../img/sonya.gif',
    rootSelector: 'arenas',
});

function init () {
    player1.createPlayer();
    player2.createPlayer();

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
