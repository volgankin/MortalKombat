import { LOGS } from './const.js';
import { getRandom } from './getRandom.js';
import getTime from './getTime.js';

function getTextLog (type, namePlayer1, namePlayer2) {
    switch (type) {
        case 'start':
            return LOGS[type]
                .replace('[time]', getTime())
                .replace('[player1]', namePlayer1)
                .replace('[player2]', namePlayer2);
        case 'end':
            return LOGS[type][getRandom(LOGS[type].length - 1) - 1]
                .replace('[time]', getTime())
                .replace('[playerWins]', namePlayer1)
                .replace('[playerLose]', namePlayer2);
        case 'hit':
            return LOGS[type][getRandom(LOGS[type].length - 1) - 1]
                .replace('[playerKick]', namePlayer1)
                .replace('[playerDefence]', namePlayer2);
        case 'defence':
            return LOGS[type][getRandom(LOGS[type].length - 1) - 1]
                .replace('[playerKick]', namePlayer1)
                .replace('[playerDefence]', namePlayer2);
        case 'draw':
            return LOGS[type];
    }
};

export default getTextLog;