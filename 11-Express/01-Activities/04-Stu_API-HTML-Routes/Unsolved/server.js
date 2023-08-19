// TODO: Import express
const express = require("express");
const path = require("path");

// TODO: Import 'terms.json' file
const terms = require('./terms.json')
const PORT = 3001;

// TODO: Initialize app variable
const app = express();

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get('/api', (res, req) => {
  req.json(terms)
})

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
