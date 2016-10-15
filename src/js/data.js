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

         }
        list.push(object);
     });

     }
 }));
     return list;
}

function getCoordinatenZitBanken(){
    var list = [];
    $.when($.getJSON(path+"zitbanken.json").done(function (json) {
    for (var i = 0; i < json.length; i++) {
     var item = json[i];
     var geo = item.json_geometry;
     if(!Array.isArray(geo.coordinates[0])){
         var object;
         object = {
                    lat:geo.coordinates[1],
                   long:geo.coordinates[0]

         }
        list.push(object);
     }
     else{
         for(var j = 0; j<geo.coordinates.length;j++){
             var object;
             object = {
                 lat:geo.coordinates[j][1],
                 long:geo.coordinates[j][0]

             }
             list.push(object);
}}}
 }));
     return list;
}

var getCoordinatenParken = function getCoordinatenParken(){
    var list = [];
    $.when($.getJSON(path+"groen.json").done(function (json) {
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
 }));
    return list;
}


var getCoordinaten = function getCoordinaten(url){
    var list = [];
    $.when($.getJSON(url).done(function (json) {
        for (var i = 0; i < json.length; i++) {
          var item = json[i];
          var geo = item.json_geometry;
          var coords = {
            lat: geo.coordinates[1],
            long: geo.coordinates[0]
          }
          list.push(coords);
        }
    }));
    return list;
}



function getCoordinatenBib(){
    return getCoordinaten("/data/bibliotheken.json");
}

function getCoordinatenLokalen(){
    return getCoordinaten("/data/jeugdlokalen.json");
 }

 function getCoordinatenHoreca(){
     return getCoordinaten("/data/horeca.json");
 }

 function getCoordinatenSport(){
     return getCoordinaten("/data/sport.json");
 }
 function getCoordinatenZwembaden(){
     return getCoordinaten("/data/zwembaden.json");
 }

var data = {
  libPoints: getCoordinatenBib,
  museumPoints: getCoordinatenMusea,
  sportPoints: getCoordinatenSport,
  swimmingPoints: getCoordinatenZwembaden,
  youthPoints: getCoordinatenLokalen,
  benchPoints: getCoordinatenZitBanken,
  parkPoints: getCoordinatenParken
};

export default data;
