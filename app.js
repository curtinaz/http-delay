const express = require('express');
const app = express();

app.get('/delay/:seconds', (req, res) => {
    const seconds = parseInt(req.params.seconds, 10) || 5;
    setTimeout(() => {
        res.json({ message: `Response after ${seconds} seconds` });
    }, seconds * 1000);
});

app.listen(3000, () => console.log('Server running into 3000 port'));