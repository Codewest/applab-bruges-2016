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

function getCoordinatenMusea(){
    return getCoordinaten("/data/musea.json");
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
  youthPoints: getCoordinatenLokalen
};

export default data;
