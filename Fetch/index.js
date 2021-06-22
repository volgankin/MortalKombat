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
		const { hit, defence } = game.playerAttack();

		const body = fetch('http://reactmarathon-api.herokuapp.com/api/mk/player/fight', {
			method: 'POST',
			body: JSON.stringify({
				hit,
				defence,
			})
		}).then(res => res.json());

		return body;
	}
};

export default Fetch;