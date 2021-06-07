const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Боевые веера'],
    attack: function () {
        console.log(this.name + ' Fight...');
    }
};

const player2 = {
    player: 2,
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Бамбуковые палки'],
    attack: function () {
        console.log(this.name + ' Fight...');
    }
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

function getLoseHP (maxWeakness) {
    let loseHP = Math.ceil(Math.random() * maxWeakness)

    return loseHP;
};

function changeHP (player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= getLoseHP(20);

    if (player.hp <= 0) {
        player.hp = 0;
    }

    $playerLife.style.width = player.hp + '%';

    return player.hp;
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

$randomButton.addEventListener('click', function () {
    changeHP(player1);
    changeHP(player2);

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
