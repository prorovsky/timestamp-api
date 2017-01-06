var express = require('express'),
    moment = require('moment'),
    app = express(),
    time = {
        unix: "unix time",
        natural: "natural time"
    };

app.use(express.static('./public'));

app.get('/', function(req, res){
    res.render('index.html');
});

app.get('/:date', function(req, res){

});


app.listen(3000, function(){
    console.log("Server started...");
});