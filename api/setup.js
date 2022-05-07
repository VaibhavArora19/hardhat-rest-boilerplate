const express = require('express');
const bodyParser = require('body-parser');


function initApp() {
    const app = express();
    // app.use(bodyParser.raw({type: 'application/octet-stream', limit:'10gb'}));
    app.use(bodyParser.json());
    app.listen(4000 ,()=>{console.log("Server Started on Port:" + 4000)});
    return app;
}


module.exports = { initApp }