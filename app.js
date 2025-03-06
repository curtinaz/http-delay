const express = require('express');
const app = express();

app.all('/delay/:seconds', delayFunction);
app.all('/', tutorial);
app.all('/:any', tutorial);

function delayFunction(req, res) {
    let seconds = parseInt(req.params.seconds, 10);
    if (isNaN(seconds) || seconds < 1) seconds = 1; // Garantir que seja pelo menos 1 segundo

    setTimeout(() => {
        res.json({ message: `Response after ${seconds} seconds`, status: "success" });
    }, seconds * 1000);
}

function tutorial(req, res) {
    res.json({
        message: "Send your request to /delay/{seconds} to receive your response after X seconds.",
        status: "success"
    });
}

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));