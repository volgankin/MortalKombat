const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

function changeHP (hp) {
    this.hp -= hp;

    if (this.hp <= 0) {
        this.hp = 0;
        createReloadButton();
    }

    return this.hp;
};

function elHP (player) {
    return document.querySelector('.player' + player + ' .life');
};

function renderHP () {
    elHP(this.player).style.width = this.hp + '%';
};


const player1 = {
    player: 1,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Боевые веера'],
    attack: function () {
        console.log(this.name + ' Fight...');
    },
    changeHP: changeHP,
    renderHP: renderHP
};

const player2 = {
    player: 2,
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Бамбуковые палки'],
    attack: function () {
        console.log(this.name + ' Fight...');
    },
    changeHP: changeHP,
    renderHP: renderHP
};

function createTag(tag, tagClass) {
    const $element = document.createElement(tag);
    if (tagClass) {
        $element.classList.add(tagClass);
    }

    return $element;
};

function createPlayer(playerInfo) {
    const player = createTag('div', 'player' + playerInfo.player);
    const progressbar = createTag('div', 'progressbar');
    const character = createTag('div', 'character');
    const life = createTag('div', 'life');
    const name = createTag('div', 'name');
    const $img = createTag('img');

    life.style.width = playerInfo.hp + '%';
    name.innerText = playerInfo.name;
    $img.src = playerInfo.img;

    character.appendChild($img);
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    player.appendChild(progressbar);
    player.appendChild(character);

    return player;
};

function getRandom (meaning) {
    let loseHP = Math.ceil(Math.random() * meaning)

    return loseHP;
};

function playerWins (name) {
    const $winsTitle = createTag('div', 'winsTitle');

    if (name) {
        $winsTitle.innerText = name + ' wins';
    } else {
        $winsTitle.innerText = 'drow';
    }

    return $winsTitle;
};

function createReloadButton () {
    const reloadWrap = createTag('div', 'reloadWrap');
    const resetButton = createTag('button', 'button');
    const $control = document.querySelector('.control');

    resetButton.innerText = 'Reset';

    reloadWrap.appendChild(resetButton);
    $arenas.appendChild(reloadWrap);

    resetButton.addEventListener('click', function () {
        window.location.reload();
    });
};

$randomButton.addEventListener('click', function () {
    player1.changeHP(getRandom(20));
    player2.changeHP(getRandom(20));
    player1.renderHP();
    player2.renderHP();

    if (player1.hp === 0 || player2.hp === 0) {
        $randomButton.disabled = true;
        $randomButton.style.backgroundColor = 'grey';
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(playerWins(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerWins(player1.name));
    } else if (player1.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(playerWins());
    }
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
