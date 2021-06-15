import { player1 } from './player1.js';
import { player2 } from './player2.js';

import createPlayer from './createPlayer.js';
import createReloadButton from './createReloadButton.js';
import playerWins from './playerWins.js';
import renderMessage from './renderMessage.js';

import { $arenas } from './const.js';
import { $randomButton } from './const.js';
import { $formFight } from './const.js';
import { $chat } from './const.js';

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
};

const ATTACK = ['head', 'body', 'foot'];

const getRandom = (meaning) => Math.ceil(Math.random() * meaning);

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function generateLogs (type, player1, player2, value) {
    const date = new Date();
    const time = date.getHours() + ':' + date.getMinutes();
    let text = '';
    let el = '';

    switch (type) {
        case 'start':
            text = logs[type].replace('[time]', time).replace('[player1]', player1.name).replace('[player2]', player2.name);
            el = `<p>${text}</p>`;
            break;
        case 'end':
            text = logs[type][getRandom(logs[type].length) - 1].replace('[time]', time).replace('[playerWins]', player1.name).replace('[playerLose]', player2.name);
            el = `<p>${text}</p>`;
            break;
        case 'hit':
            text = logs[type][getRandom(logs[type].length) - 1].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
            el = `<p>${time} - ${text} -${value} [${player2.hp}/100]</p>`;
            break;
        case 'defence':
            text = logs[type][getRandom(logs[type].length) - 1].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
            el = `<p>${time} - ${text}</p>`;
            break;
        case 'draw':
            text = logs[type];
            el = `<p>${text}</p>`;
            break;
        default:
            break;
    }

    $chat.insertAdjacentHTML('afterbegin', el);
};

generateLogs('start', player1, player2);

$formFight.addEventListener('submit', function(e) {
    e.preventDefault();

    const enemy = enemyAttack();
    const player = playerAttack();

    fight(enemy, player);
    fightButtonOff();
    renderMessage();
});
