const express = require("express");
const PORT = process.env.PORT || 65000;
const app = express();
//app.use(express.static("public"));

app.use((req, res, next) => {
    //Middleware: do something with request and response like log or authenticate
    next();
});




app.get('*', (req, res) => {
    res.send("No Date!")
})

app.listen(PORT, () => {
    console.log("I am ready!");
})