const express = require('express');
const cors = require('cors');
const oddRouter = require('../controllers/getOdd');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/odd', oddRouter);

app.get('/', (req, res) => {
    res.json({
        message: 'API rodando',
        instructions: 'Use POST com body JSON: { "likes": 10, "dislikes": 2 }',
        endpoints: [
            '/odd/percentage',
            '/odd/odd',
            '/odd/popularity',
            '/odd',
        ],
    });
});

module.exports = app;
