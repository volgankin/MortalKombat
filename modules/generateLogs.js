import { logs } from './logs.js';
import { $chat } from './const.js';
import { getRandom } from './getRandom.js';

function generateLogs (type, player1, player2, value) {
    const { name: name1 } = player1;
    const { name: name2, hp: hp2 } = player2;

    const date = new Date();
    const time = date.getHours() + ':' + date.getMinutes();
    let text = '';
    let el = '';

    switch (type) {
        case 'start':
            text = logs[type].replace('[time]', time).replace('[player1]', name1).replace('[player2]', name2);
            el = `<p>${text}</p>`;
            break;
        case 'end':
            text = logs[type][getRandom(logs[type].length) - 1].replace('[time]', time).replace('[playerWins]', name1).replace('[playerLose]', name2);
            el = `<p>${text}</p>`;
            break;
        case 'hit':
            text = logs[type][getRandom(logs[type].length) - 1].replace('[playerKick]', name1).replace('[playerDefence]', name2);
            el = `<p>${time} - ${text} -${value} [${hp2}/100]</p>`;
            break;
        case 'defence':
            text = logs[type][getRandom(logs[type].length) - 1].replace('[playerKick]', name1).replace('[playerDefence]', name2);
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
