import elHP from './elHP.js';
import attack from './elHP.js';

export const player1 = {
    player: 1,
    name: 'Kitana',
    hp: 100,
    img: '../img/goblin.gif'/*'http://reactmarathon-api.herokuapp.com/assets/kitana.gif'*/,
    weapon: ['Боевые веера'],
    elHP,
    changeHP: function (hp) {
            this.hp -= hp;

        if (this.hp <= 0) {
            this.hp = 0;
        }
    },
    renderHP: function () {
        return this.elHP().style.width = this.hp + '%';
    },
    attack,
};

export const player2 = {
    player: 2,
    name: 'Sonya',
    hp: 100,
    img: '../img/ork.gif'/*'http://reactmarathon-api.herokuapp.com/assets/sonya.gif'*/,
    weapon: ['Бамбуковые палки'],
    elHP,
    changeHP: function (hp) {
            this.hp -= hp;

        if (this.hp <= 0) {
            this.hp = 0;
        }
    },
    renderHP: function () {
        return this.elHP().style.width = this.hp + '%';
    },
    attack,
};
