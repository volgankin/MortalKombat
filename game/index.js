import { HIT, ATTACK, LOGS, $arenas, $randomButton, $formFight, $chat } from '../constants/index.js'
import { getTime, getRandom, createElement } from '../utils/index.js'
import Player from '../Player/index.js';

class Game {
    constructor () {
        this.player1 = new Player({
            player: 1,
            name: 'Kitana',
            hp: 100,
            img: '../img/kitana.gif',
            rootSelector: 'arenas',
        });

        this.player2 = new Player({
            player: 2,
            name: 'Sonya',
            hp: 100,
            img: '../img/sonya.gif',
            rootSelector: 'arenas',
        });
    }
    start = () => {
        this.player1.createPlayer();
        this.player2.createPlayer();

        generateLogs('start', this.player1, this.player2);

        $formFight.addEventListener('submit', function(e) {
            e.preventDefault();

            const enemy = enemyAttack();
            const player = playerAttack();

            fight(enemy, player);
            fightButtonOff();
            renderMessage();
        });
    }

    createReloadButton = () => {
        const $reloadWrap = createElement('div', 'reloadWrap');
        const $resetButton = createElement('button', 'button');

        $resetButton.innerText = 'Reset';

        $resetButton.addEventListener('click', function () {
            window.location.reload();
        });

        $reloadWrap.appendChild($resetButton);
        $arenas.appendChild($reloadWrap);
    };

    enemyAttack = () => {
        const hit = ATTACK[getRandom(3) - 1];
        const defence = ATTACK[getRandom(3) - 1];

        return {
            value: getRandom(HIT[hit]),
            hit,
            defence,
        }
    };

    fight = (enemy, player) => {
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

    fightButtonOff = () => {
        if (player1.hp === 0 || player2.hp === 0) {
            $randomButton.disabled = true;
            $randomButton.style.backgroundColor = 'grey';
            createReloadButton();
        }
    };

    generateLogs = (type, { name } = {}, { name: namePlayer2, hp } = {}, value) => {
        console.log('всё ок');
        let text = getTextLog(type, name, namePlayer2);

        switch (type) {
            case 'hit':
                text = `<p>${getTime()} - ${text} -${value} [${hp}/100]</p>`;
                break;
            case 'defence':
            case 'end':
            case 'draw':
                text = `<p>${getTime()} - ${text}</p>`;
                break;
        }

        const el = `<p>${text}</p>`;
        $chat.insertAdjacentHTML('afterbegin', el);
    };

    getTextLog = (type, namePlayer1, namePlayer2) => {
        switch (type) {
            case 'start':
                return LOGS[type]
                    .replace('[time]', getTime())
                    .replace('[player1]', namePlayer1)
                    .replace('[player2]', namePlayer2);
            case 'end':
                return LOGS[type][getRandom(LOGS[type].length - 1) - 1]
                    .replace('[time]', getTime())
                    .replace('[playerWins]', namePlayer1)
                    .replace('[playerLose]', namePlayer2);
            case 'hit':
                return LOGS[type][getRandom(LOGS[type].length - 1) - 1]
                    .replace('[playerKick]', namePlayer1)
                    .replace('[playerDefence]', namePlayer2);
            case 'defence':
                return LOGS[type][getRandom(LOGS[type].length - 1) - 1]
                    .replace('[playerKick]', namePlayer1)
                    .replace('[playerDefence]', namePlayer2);
            case 'draw':
                return LOGS[type];
        }
    };

    playerAttack = () => {
        const attack = {};

        for (let item of $formFight) {
            if (item.checked && item.name === 'hit') {
                attack.value = getRandom(HIT[item.value]);
                attack.hit = item.value;
            }

            if (item.checked && item.name === 'defence') {
                attack.defence = item.value;
            }

            //item.checked = false;
        }

        return attack;
    };

    playerWins = (name) => {
        const $winsTitle = createElement('div', 'winsTitle');

        if (name) {
            $winsTitle.innerText = name + ' wins';
        } else {
            $winsTitle.innerText = 'drow';
        }

        return $winsTitle;
    };

    renderMessage = () => {
        if (player1.hp === 0 && player1.hp < player2.hp) {
            $arenas.appendChild(playerWins(player2.name));
            generateLogs('end', player2, player1);
        } else if (player2.hp === 0 && player2.hp < player1.hp) {
            $arenas.appendChild(playerWins(player1.name));
            generateLogs('end', player1, player2);
        } else if (player1.hp === 0 && player2.hp === 0) {
            $arenas.appendChild(playerWins());
            generateLogs('draw');
        }
    };
}

export default Game;

