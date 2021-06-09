const $arenas = document.querySelector('.arenas');
/*const $randomButton = document.querySelector('.button');*/
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

/*$randomButton.addEventListener('click', function () {
    player1.changeHP(getRandom(20));
    player1.renderHP();

    player2.changeHP(getRandom(20));
    player2.renderHP();

    if (player1.hp === 0 || player2.hp === 0) {
        $randomButton.disabled = true;
        $randomButton.style.backgroundColor = 'grey';
        createReloadButton();
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(playerWins(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerWins(player1.name));
    } else if (player1.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(playerWins());
    }
});*/

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function enemyAttack () {
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];
    console.log('####: hit = ' + hit);
    console.log('####: defence = ' + defence);
};

$formFight.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log($formFight);
    enemyAttack();
});
