/**
 * Created by hellocob on 17-3-27.
 */
const express = require('express');



const app = express();

app.use(function(req, res, next) {
    //const err = new Error('Not Found');
    //err.status = 404;
    //next(err);
    //res.json(err);
});

module.exports = app;