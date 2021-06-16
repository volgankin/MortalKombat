import { logs } from './logs.js';
import { $chat } from './const.js';
import { getRandom } from './getRandom.js';

function generateLogs (type, player1, player2, value) {
    const date = new Date();
    const time = date.getHours() + ':' + date.getMinutes();
    let text = '';
    let el = '';

    switch (type) {
        case 'start':
            text = logs[type].replace('[time]', time).replace('[player1]', player1.name).replace('[player2]', player2.name);
            el = `<p>${text}</p>`;
            break;
        case 'end':
            text = logs[type][getRandom(logs[type].length) - 1].replace('[time]', time).replace('[playerWins]', player1.name).replace('[playerLose]', player2.name);
            el = `<p>${text}</p>`;
            break;
        case 'hit':
            text = logs[type][getRandom(logs[type].length) - 1].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
            el = `<p>${time} - ${text} -${value} [${player2.hp}/100]</p>`;
            break;
        case 'defence':
            text = logs[type][getRandom(logs[type].length) - 1].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
            el = `<p>${time} - ${text}</p>`;
            break;
        case 'draw':
            text = logs[type];
            el = `<p>${text}</p>`;
            break;
        default:
            break;
    }

    $chat.insertAdjacentHTML('afterbegin', el);
};

export default generateLogs;
