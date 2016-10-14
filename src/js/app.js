import { addEventListeners } from './ui';
import { openRoute, determinePosition } from './routes';
import { drawBruges } from './polygons';
import data from './data';

(function() {
    var map;
    var list = [] ;

    $(function () {
        makeMap();
        map.on('load', function () {
            drawBruges(map);
        });
        addEventListeners();
        $("#route").on('click', openRoute);
        setInterval(determinePosition, 5000);
        console.log(data.benchPoints());
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
})();
