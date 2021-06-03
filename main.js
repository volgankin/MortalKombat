const player1 = {
    name: 'Китана',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Боевые веера'],
    attack: function () {
        console.log(this.name + ' Fight...');
    }
};

const player2 = {
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
    $element.classList.add(tagClass);
    return $element;
};

function createPlayer(playerClass, playerInfo) {
    const $img = document.createElement('img');
    $img.src = playerInfo.img;
    
    const name = createTag('div', 'name');
    name.innerText = playerInfo.name;
    
    const life = createTag('div', 'life');
    life.style.width = playerInfo.hp + '%';
    
    const character = createTag('div', 'character');
    character.appendChild($img);
    
    const progressbar = createTag('div', 'progressbar');
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    
    const player = createTag('div', playerClass);
    player.appendChild(progressbar);
    player.appendChild(character);

    const arenas = document.querySelector('.arenas');
    arenas.appendChild(player);
};

createPlayer('player1', player1);
createPlayer('player2', player2);
