import createElement from './createElement.js';
import {$arenas} from './const.js';

function createReloadButton() {
    const $reloadWrap = createElement('div', 'reloadWrap');
    const $resetButton = createElement('button', 'button');

    $resetButton.innerText = 'Reset';

    $resetButton.addEventListener('click', function () {
        window.location.reload();
    });

    $reloadWrap.appendChild($resetButton);
    $arenas.appendChild($reloadWrap);
};

export default createReloadButton;
