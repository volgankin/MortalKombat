function getTime () {
    const time = new Date;
    return `${time.getHours()}:${time.getMinutes()}`;
};

export default getTime;