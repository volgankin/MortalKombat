function changeHP (hp) {
    this.hp -= hp;

    if (this.hp <= 0) {
        this.hp = 0;
    }
};

export default changeHP;
