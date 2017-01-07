var express = require('express'),
    moment = require('moment'),
    app = express(),
    time = {
        unix: 'unix time',
        natural: 'natural time'
    };

app.use(express.static('./public'));

// routing

app.get('/', function(req, res){
    res.render('index.html');
});

app.get('/:date', function(req, res){
    checkDate(req.params.date);
    res.json(time);
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Server started...');
});

// helpers

function checkDate(date){
    let humanDate = moment(date);
    let unixDate = moment.unix(Number(date));

    if(date.match(/[a-zA-Z]/)){
        if(humanDate.isValid()){
            setTime(humanDate);
        } else {
            setTimeNull();
        }
    } else {
        if(unixDate.isValid()){
            setTime(unixDate);
        } else {
            setTimeNull();
        }
    }
}

function setTimeNull(){
    time.unix = null;
    time.natural = null;
}

function setTime(timeType){
    time.unix = timeType.format('X');
    time.natural = timeType.format('MMMM DD, YYYY');
}