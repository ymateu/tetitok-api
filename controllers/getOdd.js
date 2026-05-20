const express = require('express');
const { calculateOdds } = require('../services/tetimath');

const router = express.Router();

function parseParams(req) {
    const likes = Number(req.body.likes ?? 0);
    const dislikes = Number(req.body.dislikes ?? 0);
    return { likes, dislikes };
}

router.post('/percentage', (req, res) => {
    const { likes, dislikes } = parseParams(req);
    const { percentage } = calculateOdds(likes, dislikes);
    res.json({ percentage });
});

router.post('/odd', (req, res) => {
    const { likes, dislikes } = parseParams(req);
    const { odd } = calculateOdds(likes, dislikes);
    res.json({ odd });
});

router.post('/popularity', (req, res) => {
    const { likes, dislikes } = parseParams(req);
    const { popularity } = calculateOdds(likes, dislikes);
    res.json({ popularity });
});

router.post('/', (req, res) => {
    const { likes, dislikes } = parseParams(req);
    const oddData = calculateOdds(likes, dislikes);
    res.json({ likes, dislikes, ...oddData });
});

module.exports = router;
