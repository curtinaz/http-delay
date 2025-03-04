const express = require('express');
const app = express();

app.all('/delay/:seconds', (req, res) => delayFunction(req, res));
app.all('/', (req, res) => tutorial(req, res));
app.all('/:any', (req, res) => tutorial(req, res));

function delayFunction(req, res) {
    const seconds = parseInt(req.params.seconds, 10) || 5;
    setTimeout(() => {
        res.json({ message: `Response after ${seconds} seconds`, status: "success" });
    }, seconds * 1000);
}

function tutorial(req, res) {
    res.json({
        message: "Send your request to /delay/{seconds} to receive your response after X seconds.",
        status: "success"
    })
}

app.listen(3000, () => console.log('Server running into 3000 port'));