function calculateOdds(likes, dislikes) {
    const odd = (Math.log(likes + 1) - Math.log(dislikes + 1)) * 10;
    const percentage = (likes / (likes + dislikes)) * 100;

    const postOdd = {
        odd: odd.toFixed(2),
        percentage: percentage.toFixed(2),
        popularity: percentage > 60 ? 'Popular' : 'Unpopular',
    };

    return postOdd;
}

module.exports = { calculateOdds };
