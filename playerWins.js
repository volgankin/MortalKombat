import createElement from './createElement.js';

function playerWins (name) {
    const $winsTitle = createElement('div', 'winsTitle');

    if (name) {
        $winsTitle.innerText = name + ' wins';
    } else {
        $winsTitle.innerText = 'drow';
    }

    return $winsTitle;
};

export default playerWins;
