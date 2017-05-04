// importar
var express = require('express');
var fs = require('fs');
var formidable = require('formidable');
var urllib = require('urllib');
var token = require('./src/keys');

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
                if (data.col4 == 'Contacto') {

                }
                else {
                      if (data.col5 == 'Puesto') {

                      }
                      else {
                            if (data.col6 == 'Telefono') {

                            }
                            else{
                              if (data.col6 == 'Correo') {
                                    strPipieDrive = data.col1 + ' ' + data.col2 + ' ' + data.col3 + ' ' + data.col4 + ' ' + data.col5 + ' ' + data.col6 + ' ';
                              }

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
                                strPipieDrive = data.col1 + ' ' + data.col2 + ' ' + data.col3;
                                curl_organitations(data.col1,data.col2,data.col3);
                            }
                      }
                }
              }
            }
            /*console.log(strPipieDrive);*/
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
function curl_organitations(empresa,sector,web)
{
  var strftime = require('strftime') // not required in browsers
  var FechaString = strftime('%Y-%M-%d', new Date())
  var idSector = profilesOrganitation(sector);
  urllib.request('https://api.pipedrive.com/v1/organizations?api_token=' + token , {
  method: 'POST',
  data: {
    'name': empresa,
    'owner_id' : '1245108',
    'add_time' : FechaString,
    'dd8264651561775a4d9eb4f843811bc599649cb6' : web,
    '73f181bd11548510a4dcfadafc036ff5dcdde8ae' : idSector
  }
});

}
function curl_persons(empresa,sector,contacto,puesto,telefono,correo)
{
  /* Fisrt .- i found the organitation for this person */
  urllib.request('$urlBE =  "https://api.pipedrive.com/v1/organizations/find?term=$_POST[txtEmpresa]&api_token=b86bd50a1f8822315169836c4c619641c03cdc01', {
  method: 'POST',
  data: {
    'name': empresa,
    'owner_id' : '1245108',
    'add_time' : FechaString,
    'dd8264651561775a4d9eb4f843811bc599649cb6' : web,
    '73f181bd11548510a4dcfadafc036ff5dcdde8ae' : idSector
  }
});

  /*
  var strftime = require('strftime') // not required in browsers
  var FechaString = strftime('%Y-%M-%d', new Date())
  var idSector = profilesOrganitation(sector);
  urllib.request('https://api.pipedrive.com/v1/organizations?api_token=b86bd50a1f8822315169836c4c619641c03cdc01', {
  method: 'POST',
  data: {
    'name': empresa,
    'owner_id' : '1245108',
    'add_time' : FechaString,
    'dd8264651561775a4d9eb4f843811bc599649cb6' : web,
    '73f181bd11548510a4dcfadafc036ff5dcdde8ae' : idSector
  }
});*/


}
/*Swicth of Profile's organitation  */

function profilesOrganitation(pOrganitation)
{
    switch (pOrganitation) {
       case 'Industrial':
                idProfilesOrganitation = 142;
        break;
      case 'Energía':
                idProfilesOrganitation = 143;
        break;
      case 'Comercial':
                idProfilesOrganitation = 144;
        break;
      case 'DesarrolladoraGral':
                  idProfilesOrganitation = 145;
        break;
      case 'Buffete-Arq-Ing':
                    idProfilesOrganitation = 146;
        break;
     case 'Hotelero':
                   idProfilesOrganitation = 147;
        break;
    case 'FondoDeInversion':
                  idProfilesOrganitation = 148;
       break;
    case 'GerenciaDeProyectos':
                 idProfilesOrganitation = 149;
         break;
    case 'Retail':
                idProfilesOrganitation = 150;
        break;
    case 'Entretenimiento':
                idProfilesOrganitation = 151;
        break;
  case 'Salud':
              idProfilesOrganitation = 152;
      break;
  case 'Vivienda':
              idProfilesOrganitation = 153;
      break;
    case 'ConstructoraGral':
                idProfilesOrganitation = 154;
        break;
    case 'Gobierno':
              idProfilesOrganitation = 155;
        break;
    case 'PersonaFísica':
              idProfilesOrganitation = 156;
        break;
    case 'InfraestructuraPublica':
              idProfilesOrganitation = 157;
        break;
    case 'Educación':
            idProfilesOrganitation = 264;
      break;

      default:
              idProfilesOrganitation = 0;
    }
    return  idProfilesOrganitation;
}


// lisent
app.listen(9000);

console.log("Servidor Express escuchando en modo %s", app.settings.env);
console.log("http://localhost:9000");
