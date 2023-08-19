/*

*/


const express = require('express');

const path = require('path');

const ourApp = express();


const PORT = 3001;



ourApp.use(express.static('public'))


ourApp.get('/', (request, responseObject) => {
    // console.log(req);
    responseObject.send(`Hey! How's it going?`);
})


ourApp.get('/settings', (request, responseObject) => {
    responseObject.sendFile(path.join(__dirname, 'public/index.html'))
})


ourApp.get('/info', (request, response) => {
    response.send(`<p>This is an HTML Paragraph</p>`);
})

ourApp.get('/data', (request, response) => {
    response.json([1,2,3]);
})

ourApp.get('/data/seo', (request, response) => {
    response.statusCode = 200;
    response.send(`Hey, you know seo?`);
})

//The wildcard '*' covers if a user spells something wrong in the url
//Has to be used at the end because if it is used before, all the points hit will be true and will hit this response
ourApp.get('*', (request, response) => {
    response.send(`Hey, wrong page!`);
    // response.sendFile(path.join(__dirname, 'public/404.html'));
})

ourApp.listen(PORT, () => {
    console.log(`My App is ready to listen on ${PORT}`);
})



