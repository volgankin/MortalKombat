import { $chat } from './const.js';
import getTime from './getTime.js';
import getTextLog from './getTextLog.js';

function generateLogs (type, { name } = {}, { name: namePlayer2, hp } = {}, value) {
    let text = getTextLog(type, name, namePlayer2, value);

    switch (type) {
        case 'hit':
            text = `<p>${getTime()} - ${text} -${value} [${hp}/100]</p>`;
            break;
        case 'defence':
        case 'end':
        case 'draw':
            text = `<p>${getTime()} - ${text}</p>`;
            break;
    }

    const el = `<p>${text}</p>`;
    $chat.insertAdjacentHTML('afterbegin', el);
};

export default generateLogs;
