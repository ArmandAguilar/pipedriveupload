// importar
var express = require('express');
var fs = require('fs');
var formidable = require('formidable');
var urllib = require('urllib');
var token = require('./src/keys');
var S = require('string');
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

/*by clinets*/
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
                if (data.col3 == 'Contacto') {

                }
                else {
                      if (data.col4 == 'Puesto') {

                      }
                      else {
                            if (data.col5 == 'Telefono') {

                            }
                            else{
                              if (data.col6 == 'Correo') {

                              }
                              else{
                                      /*strPipieDrive = data.col1 + ' ' + data.col2 + ' ' + data.col3 + ' ' + data.col4 + ' ' + data.col5 + ' ' + data.col6 + ' ' ;*/
                                      curl_persons(data.col1,data.col2,data.col3,data.col4,data.col5,data.col6);
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
                                //curl_organitations(data.col1,data.col2,data.col3);
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
  var FechaString = strftime('%Y-%M-%d', new Date());
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
  /* i make trim in the vars of the function */
  var txtEmpresa = S(empresa).trim().s;
  var txtSector =  S(sector).trim().s;
  var txtContacto = S(contacto).trim().s;
  var txtPuesto = S(puesto).trim().s;
  var txtTelefono = S(telefono).trim().s;
  var strftime = require('strftime');

  /* var for all rutine */
  var idEmpresa = '';
  var nomEmpresa = '';

  /*Exampale code */
  /*for (var i = 0; i < strJson['data'].length; i++) {
    console.log(strJson['data'][i]['name']);
  }*/

  /* Fisrt .- i found the organitation for this person */
  urllib.request('https://api.pipedrive.com/v1/organizations/find?term=' + txtEmpresa + '&api_token='  + token, function (err, data, res) {
            var httpResults = data.toString();
            var strJson = JSON.parse(httpResults);
            for (var i = 0; i < strJson['data'].length; i++)
                {
                    idEmpresa = strJson['data'][i]['id'];
                    nomEmpresa = strJson['data'][i]['name'];
                  }
                  console.log("The id is intro of function :" + idEmpresa );
                  /*check if we have a Id not null */
                  console.log("The id es :" + idEmpresa );
                  if (idEmpresa > 0)
                   {
                     var FechaString = strftime('%Y-%M-%d', new Date());
                     var idS  = SectorPersons(txtSector);
                     var strHttp = urllib.request('https://api.pipedrive.com/v1/persons?api_token=' + token , {
                                  method: 'POST',
                                  data: {
                                          'name': txtContacto,
                                          'owner_id' : '1245108',
                                          'add_time' : FechaString,
                                          'org_id' : idEmpresa,
                                          'email' : correo,
                                          'phone' : txtTelefono,
                                          'add_time' : FechaString,
                                          '1bb54c0884f935866cdd97445f3ece584d5f49f3': idS
                                        }
                                    });
                      /* here set the var of Person before insert in the data base */


                      /*we add the business in the section´s 18 */
                      setDeal(idEmpresa,idPerson,namePerson,nameOrganitation);
                    }
                  else{
                          /* if business is empty */
                          /*we inserts the organitation */
                          urllib.request('https://api.pipedrive.com/v1/organizations?api_token=' + token , {
                                method: 'POST',
                                data: {
                                'name': empresa,
                                'owner_id' : '1245108',
                                'add_time' : FechaString
                              }
                            });
                        /*get the new id`s business */
                        var idOrganitationInsert = getIdOrganitation(empresa);
                        var strHttp = urllib.request('https://api.pipedrive.com/v1/persons?api_token=' + token , {
                                     method: 'POST',
                                     data: {
                                             'name': txtContacto,
                                             'owner_id' : '1245108',
                                             'add_time' : FechaString,
                                             'org_id' : idOrganitationInsert,
                                             'email' : correo,
                                             'phone' : txtTelefono,
                                             'add_time' : FechaString,
                                             '1bb54c0884f935866cdd97445f3ece584d5f49f3': idS
                                           }
                                       });

                      }
              });

}
/*this fucn get the id of person before  insert in the record of data base*/
function getIdPerson(txtPerson)
{
  var idPerson = 0;
  urllib.request('https://api.pipedrive.com/v1/persons?/find?term=' + txtOrganitation + '&api_token='  + token, function (err, data, res) {
            var httpResults = data.toString();
            var strJson = JSON.parse(httpResults);
            for (var i = 0; i < strJson['data'].length; i++)
                {
                    return idEmpresa = strJson['data'][i]['id'];
                  }
            });

}

/* set a new deal of business */
function setDeal(idOrganitation,idPerson,namePerson,nameOrganitation)
{

  var strHttp = urllib.request('https://api.pipedrive.com/v1/deals?api_token=' + token , {
               method: 'POST',
               data: {
                       'title': 'Nuevo negocio (' + nameOrganitation + ')',
                       'value' : '0',
                       'currency' : 'MXN',
                       'user_id' : '1245108',
                       'person_id' :idPerson,
                       'org_id' : idOrganitation
                       'status': 'open',
                       'stage_id': 18
                     }
                 });

}

/*get idBusiness*/
function getIdOrganitation(txtOrganitation)
{
      var idEmpresa = 0;
      urllib.request('https://api.pipedrive.com/v1/organizations/find?term=' + txtOrganitation + '&api_token='  + token, function (err, data, res) {
                var httpResults = data.toString();
                var strJson = JSON.parse(httpResults);
                for (var i = 0; i < strJson['data'].length; i++)
                    {
                        return idEmpresa = strJson['data'][i]['id'];
                      }
                });
}

/*Switch of Persons */
function SectorPersons(pSector)
{


  switch (pSector) {
    case 'Industrial':
          pSector = 242;
    break;
    case 'Energía':
          pSector = 243;
    break;
    case 'Comercial':
          pSector = 244;
    break;
    case 'DesarrolladoraGral':
          pSector = 245;
    break;
    case 'Buffete-Arq-Ing':
          pSector = 246;
    break;
    case 'Hotelero':
          pSector = 247;
    break;
    case 'FondoDeInversion':
          pSector = 248;
    break;
    case 'GerenciaDeProyectos':
          pSector = 249;
    break;
    case 'Retail':
          pSector = 250;
    break;
    case 'Entretenimiento':
          pSector = 251;
    break;
    case 'Salud':
          pSector = 252;
    break;
    case 'Vivienda':
          pSector = 253;
    break;
    case 'ConstructoraGral':
          pSector = 254;
    break;
    case 'Gobierno':
          pSector = 255;
    break;
    case 'Particular':
          pSector = 256;
    break;
    case 'InfraestructuraPublica':
          pSector = 258;
    break;
    case 'Varios':
          pSector = 259;
    break;
    }

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
