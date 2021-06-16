import createElement from './createElement.js';

function createPlayer (playerInfo) {
    const { player, name, hp, img } = playerInfo;

    const $player = createElement('div', 'player' + player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = hp + '%';
    $name.innerText = name;
    $img.src = img;

    $character.appendChild($img);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $player.appendChild($progressbar);
    $player.appendChild($character);

    return $player;
};

export default createPlayer;
