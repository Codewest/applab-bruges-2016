<<<<<<< HEAD
var path = "/data/";
function getCoordinatenMusea(){
    var list = [];
    $.when($.getJSON(path+"musea.json").done(function (json) {
    for (var i = 0; i < json.length; i++) {
     var item = json[i];
     var address = item.Ligging.split(" ");
     $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+address[0]+"+"+address[1]+"&key=AIzaSyAM6FLYxpA8usOS4sBeYwo3wwzifUMPEfE").done(function(json){
         var geo = json.results[0].geometry.location;
         var object;
         object = {
                    lat:geo.lat,
                   long:geo.lng
=======
function readJSON(path) {
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('get', path, true);
		xhr.responseType = 'json';
		xhr.onload = function() {
			var status = xhr.status;
			if (status == 200) {
				resolve(xhr.response);
			} else {
				reject(status);
			}
		};
		xhr.send();
  });
}
>>>>>>> 8b5d59defcec988812ecfb9d3b35c60067b78adc

var getCoordinatenGeneric = function getCoordinatenGeneric(url) {
  var list = [];
  return new Promise(function (fulfill) {
    readJSON(url).then(function(json) {
      for (var i = 0; i < json.length; i++) {
        var item = json[i];
        var geo = item.json_geometry;
        var coords = {
          lat: geo.coordinates[1],
          long: geo.coordinates[0]
        }
        list.push(coords);
      }
      fulfill(list);
    });
  });
}

function getCoordinatenMusea() {
  var list = [];
  return new Promise(function (fulfill) {
    readJSON('data/musea.json').done(function (json) {
      for (var i = 0; i < json.length; i++) {
        var item = json[i];
        var address = item.Ligging.split(" ");
        readJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+address[0]+"+"+address[1]+"&key=AIzaSyAM6FLYxpA8usOS4sBeYwo3wwzifUMPEfE").then(function(json){
          var geo = json.results[0].geometry.location;
          var object = {
            lat:geo.lat,
            long:geo.lng
          }
          list.push(object);
        });
      }
      fulfill(list);
    });
  });
}

function getCoordinatenZitBanken(){
    var list = [];
    return new Promise(function (fulfill) {
      readJSON("data/zitbanken.json").then(function (json) {
      for (var i = 0; i < json.length; i++) {
         var item = json[i];
         var geo = item.json_geometry;
         if(!Array.isArray(geo.coordinates[0])){
             var object = {
               lat:geo.coordinates[1],
               long:geo.coordinates[0]
             }
            list.push(object);
         } else {
             for (var j = 0; j<geo.coordinates.length;j++){
                 var object = {
                   lat:geo.coordinates[j][1],
                   long:geo.coordinates[j][0]
                 }
                list.push(object);
             }
         }
       }
       fulfill(list);
     });
   });
};

var getCoordinatenParken = function getCoordinatenParken(){
    var list = [];
    return new Promise(function (fulfill) {
      readJSON("data/groen.json").then(function (json) {
        for (var i = 0; i < json.length; i++) {
         var item = json[i];
         //console.log(item.BEHEERSOBJECT);
          if(item.BEHEERSOBJECT == "parken"){
             if(item.PUBLIEK_TOEGANKELIJK == "J"){
                console.log(item);
                var geo = item.json_geometry;
                var glat = 0;
                var glong = 0;
                for(var j=0; j<geo.coordinates.length; j++){
                     glat += geo.coordinates[0][j][1];
                     glong += geo.coordinates[0][j][0];
                }
                glat = glat/geo.coordinates.length;
                glong = glong/geo.coordinates.length;
                var object = {
                  lat:glat,
                  long:glong
                }
                list.push(object);
             }
          }
        }
        fulfill(list);
      });
    });
}

function getCoordinatenBib(){
    return getCoordinatenGeneric("/data/bibliotheken.json");
}

function getCoordinatenLokalen(){
    return getCoordinatenGeneric("/data/jeugdlokalen.json");
 }

 function getCoordinatenHoreca(){
     return getCoordinatenGeneric("/data/horeca.json");
 }

 function getCoordinatenSport(){
     return getCoordinatenGeneric("/data/sport.json");
 }
 function getCoordinatenZwembaden(){
     return getCoordinatenGeneric("/data/zwembaden.json");
 }

var data = {
<<<<<<< HEAD
  libPoints: getCoordinatenBib,
  museumPoints: getCoordinatenMusea,
  sportPoints: getCoordinatenSport,
  swimmingPoints: getCoordinatenZwembaden,
  youthPoints: getCoordinatenLokalen,
  benchPoints: getCoordinatenZitBanken,
  parkPoints: getCoordinatenParken
=======
  bib: getCoordinatenBib,
  monumenten: getCoordinatenMusea,
  sport: getCoordinatenSport,
  zwembaden: getCoordinatenZwembaden,
  jeugdlokalen: getCoordinatenLokalen,
  horeca: getCoordinatenHoreca,
  zitbanken: getCoordinatenZitBanken,
  parken: getCoordinatenParken
>>>>>>> 8b5d59defcec988812ecfb9d3b35c60067b78adc
};

export default data;
