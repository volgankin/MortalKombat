const $arenas = document.querySelector('.arenas');

const player1 = {
    player: 1,
    name: 'Китана',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Боевые веера'],
    attack: function () {
        console.log(this.name + ' Fight...');
    }
};

const player2 = {
    player: 2,
    name: 'Соня',
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

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
