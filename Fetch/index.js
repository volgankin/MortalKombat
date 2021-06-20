import Game from '../Game/index.js';

class Fetch {
    getPlayers = async () => {
        const bodys = fetch('https://reactmarathon-api.herokuapp.com/api/mk/players').then(res => res.json());
        return bodys;
    }

    getPlayer = async () => {
        const body = fetch('https://reactmarathon-api.herokuapp.com/api/mk/player/choose').then(res => res.json());
        return body;
    }

    getActions = async () => {
        const game = new Game();
        const body = fetch('http://reactmarathon-api.herokuapp.com/api/mk/player/fight', {
                method: 'POST',
                body: JSON.stringify({
                    hit: game.playerAttack().hit,
                    defence: game.playerAttack().defence,
                })
            }).then(res => res.json());

        return body;
    }
};

export default Fetch;