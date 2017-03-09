// importar
var express = require('express');

// instanciar
var app = express();

// ruteo

app.use(express.static('public'));


app.get('/', function(req, res){
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    res.type('.html');
    res.sendFile(__dirname + '/html/login.html');

});

app.get('/panel/', function(req, res){
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    res.type('.html');
    res.sendFile(__dirname + '/html/panel.html');

});

app.get('/proceses/', function(req, res){
    var csv = require('ya-csv');
    var reader = csv.createCsvFileReader('ejemplo.csv');
    var data = [];
    /*reader.on('data', function(rec) {
      data.push(rec);
    }).on('end', function() {
      console.log(data);
      res. send('Oka');
    });*/

    var reader2 = csv.createCsvFileReader('ejemplo.csv');
    var strPipieDrive = '';
    reader.setColumnNames([ 'col1', 'col2','col3','col4','col5' ]);
    var i = 0;
    reader.addListener('data', function(data) {
    strPipieDrive = data.col1 + ' ' + data.col2 + ' ' + data.col3 + ' ';
    /*console.log(i++, data.col1);
    console.log(i++, data.col2);
    console.log(i++, data.col3);
    console.log(i++, data.col4);
    console.log(i++, data.col5);*/

});
console.log('The end the file');
res.send(strPipieDrive);
console.log(strPipieDrive);
res.end();

});

// escuchar
app.listen(9000);

console.log("Servidor Express escuchando en modo %s", app.settings.env);
console.log("http://localhost:9000");
