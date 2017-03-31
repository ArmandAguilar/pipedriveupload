// importar
var express = require('express');
var fs = require('fs');
var formidable = require('formidable');
var urllib = require('urllib');
const notifier = require('node-notifier');

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

app.get('/uploadclients/', function(req, res){
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    res.type('.html');
    res.sendFile(__dirname + '/html/uploadclientes.html');
});

app.get('/uploadorganitations/', function(req, res){
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    res.type('.html');
    res.sendFile(__dirname + '/html/uploadorganitations.html');
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


/* Method post for upload files in the server and to process cvs by pipedrive*/

/*by clientes*/
app.post('/processingclients/', function (req, res){
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  var strExtentionFile = require('string');
  var csv = require('ya-csv');
  var form = new formidable.IncomingForm();
  var typefiles = '';
  var extensionfile = '';
  /*upload the file*/
    form.parse(req);
    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/uploadscsv/' + file.name;
    });
    form.on('file', function (name, file){
        typefiles = file.name;
        /* we get the extetion file */
        extensionfile = strExtentionFile(typefiles).between('.').s;
        if (extensionfile == 'csv') {
            Nitication('Oka','Processing file,you don`t close o refreshh this page');
            var reader = csv.createCsvFileReader(__dirname + '/uploadscsv/' + file.name);
            var strPipieDrive = '';
            reader.setColumnNames([ 'col1', 'col2','col3','col4','col5' ]);
            reader.addListener('data', function(data) {
            /*strPipieDrive = data.col1 + ' ' + data.col2 + ' ' + data.col3 + ' ';*/
            if (data.col1 == 'Empresa') {

            }
            else{
              if (data.col2 == 'Sector') {

              }
              else {
                if (data.col4 == 'Medio de contacto ') {

                }
                else {
                      if (data.col5 == 'Telefono ') {

                      }
                      else {
                            if (data.col6 == 'Web') {

                            }
                            else{
                                strPipieDrive = data.col1 + ' ' + data.col2 + ' ' + data.col3 + ' ' + data.col4 + ' ' + data.col5 + ' ' + data.col6 + ' ';
                            }
                      }
                }
              }
            }
            console.log(strPipieDrive);
            });

        }
        else {
          Nitication('Error:','The type file is not correct!');
        }
        res.end();
    });
  /*  res.sendFile(__dirname + '/html/uploadorganitatios.html');*/

});

/* by organitationes*/
app.post('/processingorganitationes/', function (req, res){
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  var strExtentionFile = require('string');
  var csv = require('ya-csv');
  var form = new formidable.IncomingForm();
  var typefiles = '';
  var extensionfile = '';
  /*upload the file*/
    form.parse(req);
    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/uploadscsv/' + file.name;
    });
    form.on('file', function (name, file){
        typefiles = file.name;
        /* we get the extetion file */
        extensionfile = strExtentionFile(typefiles).between('.').s;
        if (extensionfile == 'csv') {
            Nitication('Oka','Processing file,you don`t close o refreshh this page');
            var reader = csv.createCsvFileReader(__dirname + '/uploadscsv/' + file.name);
            var strPipieDrive = '';
            reader.setColumnNames([ 'col1', 'col2','col3','col4','col5' ]);
            reader.addListener('data', function(data) {
            /*strPipieDrive = data.col1 + ' ' + data.col2 + ' ' + data.col3 + ' ';*/
            if (data.col1 == 'Empresa') {

            }
            else{
              if (data.col2 == 'Sector') {

              }
              else {
                if (data.col4 == 'Medio de contacto ') {

                }
                else {
                      if (data.col5 == 'Telefono ') {

                      }
                      else {
                            if (data.col6 == 'Web') {

                            }
                            else{
                                strPipieDrive = data.col1 + ' ' + data.col2 + ' ' + data.col3 + ' ' + data.col4 + ' ' + data.col5 + ' ' + data.col6 + ' ';
                                curl_organitations();
                            }
                      }
                }
              }
            }
            console.log(strPipieDrive);
            });

        }
        else {
          Nitication('Error:','The type file is not correct!');
        }
        res.end();
    });
  /*  res.sendFile(__dirname + '/html/uploadorganitatios.html');*/

});
/*Other function*/
/*Notifycation function*/
function Nitication(titles,messages)
{
  notifier.notify({
          title: titles,
          message: messages,
          }, function (err, response) {
            // Response is response from notification
          });
}
/*curls function */
function curl_organitations()
{

  urllib.request('http://cnodejs.org/', function (err, data, res) {
    if (err) {
      throw err; // you need to handle error
    }
    console.log(res.statusCode);
    console.log(res.headers);
    // data is Buffer instance
    console.log(data.toString());
  });
  /*var curl = new Curl();

  curl.setOpt( 'URL', 'www.google.com' );
  curl.setOpt( 'FOLLOWLOCATION', true );

  curl.on( 'end', function( statusCode, body, headers ) {

      console.info( statusCode );
      console.info( '---' );
      console.info( body.length );
      console.info( '---' );
      console.info( this.getInfo( 'TOTAL_TIME' ) );

      this.close();
  });

  curl.on( 'error', curl.close.bind( curl ) );
  curl.perform();*/

}

// lisent
app.listen(9000);

console.log("Servidor Express escuchando en modo %s", app.settings.env);
console.log("http://localhost:9000");
