// TODO: Import express
const express = require('express');

// TODO: Import modules for tips/feedback
const feedback = require('fb');
const tips = require('tips');

// TODO: Create routes variable to create an instance of express()
const routes = express();


// TODO: Use our routes
routes.use('/feedback', feedbackRouter);
routes.use('/tips', tipsRouter);

// TODO: Export routes
module.export = routes;