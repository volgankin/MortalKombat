export const player1 = {
    player: 1,
    name: 'Kitana',
    hp: 100,
    img: '../img/kitana.gif'/*'http://reactmarathon-api.herokuapp.com/assets/kitana.gif'*/,
    weapon: ['Боевые веера'],
    elHP: function () {
        return document.querySelector(`.player${this.player} .life`);
    },
    changeHP: function (hp) {
            this.hp -= hp;

        if (this.hp <= 0) {
            this.hp = 0;
        }
    },
    renderHP: function () {
        return this.elHP().style.width = this.hp + '%';
    },
    attack: function () {
        console.log(`${this.name} Fight...`);
    },
};

export const player2 = {
    player: 2,
    name: 'Sonya',
    hp: 100,
    img: '../img/sonya.gif'/*'http://reactmarathon-api.herokuapp.com/assets/sonya.gif'*/,
    weapon: ['Бамбуковые палки'],
    elHP: function () {
        return document.querySelector(`.player${this.player} .life`);
    },
    changeHP: function (hp) {
            this.hp -= hp;

        if (this.hp <= 0) {
            this.hp = 0;
        }
    },
    renderHP: function () {
        return this.elHP().style.width = this.hp + '%';
    },
    attack: function () {
        console.log(`${this.name} Fight...`);
    },
};
