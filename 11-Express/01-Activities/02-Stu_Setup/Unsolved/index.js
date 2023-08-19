const express = require('express');

const path = require('path');

const app = express();

const PORT = 5001;

app.use(express.static('public'))

app.get('/settings', (request, responseObject) => {
    responseObject.sendFile(path.join(__dirname, 'public/paths.html'))
})

app.listen(PORT, () => {
    console.log(`My App is ready to listen on ${PORT}`);
})