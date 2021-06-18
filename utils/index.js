export const getRandom = (meaning) => Math.ceil(Math.random() * meaning);

export const createElement = (tag, className) => {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}

export const getTime = () => {
    const time = new Date;
    return `${time.getHours()}:${time.getMinutes()}`;
}