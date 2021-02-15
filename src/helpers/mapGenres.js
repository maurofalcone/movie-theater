export const mapGenres = (genres) => {
    return genres.reduce((acc, g, index) => {
        if (index === 0) {
            acc += g.name;
        } else {
            acc += `, ${g.name}`;
        }
        return acc;
    }, '');
}
