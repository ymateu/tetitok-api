function calculateOdds(likes, dislikes) {
    if (likes === 0) likes = 1;
    if (dislikes === 0) dislikes = 1;

    const odd = (Math.log(likes) - Math.log(dislikes)) * 10;
    const percentage = (likes / (likes + dislikes)) * 100;

    const postOdd = {
        odd: odd.toFixed(2),
        percentage: percentage.toFixed(2),
        popularity: percentage > 60 ? 'Popular' : 'Unpopular',
    };

    return postOdd;
}

module.exports = { calculateOdds };
