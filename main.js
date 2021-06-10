const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $formFight = document.querySelector('.control');

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
};

const ATTACK = ['head', 'body', 'foot'];

const player1 = {
    player: 1,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Боевые веера'],
    elHP,
    changeHP,
    renderHP,
    attack,
};

const player2 = {
    player: 2,
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Бамбуковые палки'],
    elHP,
    changeHP,
    renderHP,
    attack,
};

function attack() {
    console.log(this.name + ' ' + ' Fight...');
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
};

function createPlayer(playerInfo) {
    const $player = createElement('div', 'player' + playerInfo.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = playerInfo.hp + '%';
    $name.innerText = playerInfo.name;
    $img.src = playerInfo.img;

    $character.appendChild($img);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $player.appendChild($progressbar);
    $player.appendChild($character);

    return $player;
};

function elHP () {
    return document.querySelector('.player' + this.player + ' .life');
};

function changeHP (hp) {
    this.hp -= hp;

    if (this.hp <= 0) {
        this.hp = 0;
    }
};

function renderHP () {
    return this.elHP().style.width = this.hp + '%';
};

function getRandom (meaning) {
    return Math.ceil(Math.random() * meaning)
};

function playerWins (name) {
    const $winsTitle = createElement('div', 'winsTitle');

    if (name) {
        $winsTitle.innerText = name + ' wins';
    } else {
        $winsTitle.innerText = 'drow';
    }

    return $winsTitle;
};

function createReloadButton () {
    const $reloadWrap = createElement('div', 'reloadWrap');
    const $resetButton = createElement('button', 'button');

    $resetButton.innerText = 'Reset';

    $resetButton.addEventListener('click', function () {
        window.location.reload();
    });

    $reloadWrap.appendChild($resetButton);
    $arenas.appendChild($reloadWrap);
};

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function enemyAttack () {
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];

    return {
        value: getRandom(HIT[hit]),
        hit,
        defence,
    }
};

function renderMessage () {
    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(playerWins(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerWins(player1.name));
    } else if (player1.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(playerWins());
    }
};

function fightButtonOff () {
    if (player1.hp === 0 || player2.hp === 0) {
        $randomButton.disabled = true;
        $randomButton.style.backgroundColor = 'grey';
        createReloadButton();
    }
};

function fight (enemy, player) {
    if (enemy.hit !== player.defence) {
        player2.changeHP(enemy.value);
        player2.renderHP();
    }

    if (player.hit !== enemy.defence) {
        player1.changeHP(player.value);
        player1.renderHP();
    }
};

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

$formFight.addEventListener('submit', function(e) {
    e.preventDefault();

    const enemy = enemyAttack();
    const player = playerAttack();

    fight(enemy, player);
    fightButtonOff();
    renderMessage();
});
