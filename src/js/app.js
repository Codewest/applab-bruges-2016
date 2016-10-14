

(function() {
    var map;
    var list = [] ;

    $(function () {
        makeMap();
        console.log(getCoordinatenMusea());

    });

    var makeMap = function makeMap() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoicm9vdHNhbSIsImEiOiJjaXU5a2V4aGcwMDFlMnRtazRibjZiZGN3In0.Q1K1wv1ugX49a4e1pCLMZw';
        map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v9',
            center: [3.227180, 51.210358],
            zoom: 13.7
        });

    };

    var getCoordinatenPunten = function getCoordinatenPunten(url){
        var list = [];
        $.when($.getJSON(url).done(function (json) {
        for (var i = 0; i < json.length; i++) {
         var item = json[i];
         var geo = item.json_geometry;
         var object;
         object = {
                    lat:geo.coordinates[1],
                   long:geo.coordinates[0]

         }
        list.push(object);
         }
     }));
         return list;
    }

    /*function getCoordinatenMusea(){
        var list = [];
        $.when($.getJSON("src/JSON/musea.json").done(function (json) {
        for (var i = 0; i < json.length; i++) {
         var item = json[i];
         $.getJSON("https://api.mapbox.com/geocoding/v5/mapbox.places/Dijver.json?access_token=pk.eyJ1Ijoicm9vdHNhbSIsImEiOiJjaXU5a2V4aGcwMDFlMnRtazRibjZiZGN3In0.Q1K1wv1ugX49a4e1pCLMZw").done(function(json){
             var geo = json.features[1].geometry;
             var object;
             object = {
                        lat:geo.coordinates[1],
                       long:geo.coordinates[0]

             }
            list.push(object);
         });

         }
     }));
         return list;
    }*/


    function getCoordinatenBib(){
        return getCoordinatenPunten("src/JSON/Bibliotheken.json");
    }

    function getCoordinatenLokalen(){
        return getCoordinatenPunten("src/JSON/jeugdlokalen.json");
     }

     function getCoordinatenHoreca(){
         return getCoordinatenPunten("src/JSON/Horeca.json");
     }

     function getCoordinatenSport(){
         return getCoordinatenPunten("src/JSON/sport.json");
     }
     function getCoordinatenZwembaden(){
         return getCoordinatenPunten("src/JSON/zwembaden.json");
     }


})();
