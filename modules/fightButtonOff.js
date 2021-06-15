import { player1,  player2} from './players.js';
import { $randomButton } from './const.js';
import createReloadButton from './createReloadButton.js';

function fightButtonOff () {
    if (player1.hp === 0 || player2.hp === 0) {
        $randomButton.disabled = true;
        $randomButton.style.backgroundColor = 'grey';
        createReloadButton();
    }
};

export default fightButtonOff;
