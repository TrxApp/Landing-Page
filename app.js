var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');

app.use(bodyParser());
app.set('view engine', 'ejs');

require('./routes.js')(app);

app.listen(port);
console.log('The magic happens on port ' + port);
