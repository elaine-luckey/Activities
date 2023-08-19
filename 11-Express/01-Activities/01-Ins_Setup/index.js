/*

*/


const express = require('express');

const path = require('path');

const ourApp = express();

//you can make up any port that is available... as long as it is not being used multiple times. Some ports are already designated to be used for another application or designated on your computer for something
const PORT = 3001;

//telling express that I am going to send my client to a static folder where it will be handled to handle all the request
//used to send the whole folder to the browser and the browser will know how to process the files in the folder
ourApp.use(express.static('public'))

ourApp.get('/', (request, responseObject) => {
    // console.log(req);
    responseObject.send(`Hey! How's it going?`);
})

//you can send files like html, js using sendFile. YOu can use send.json to send a json file
//__dirname is already defined in node as the directory name
ourApp.get('/settings', (request, responseObject) => {
    responseObject.sendFile(path.join(__dirname, 'public/index.html'))
})

//

//the function inside the parameters is a callback function
//this is to tell what port to listen on and logging to print to the console what port it is listening to
ourApp.listen(PORT, () => {
    console.log(`My App is ready to listen on ${PORT}`);
})