import { addEventListeners } from './ui';
import { openRoute, determinePosition } from './routes';
import { drawBruges } from './polygons';
import { clearMarkers, setMarkers, setSpecialMarker } from './markers';
import { listen } from './listen';
import data from './data';

function showPhotos() {

}

(function() {
    var map;
    var list = [];

    $(window).on('load', function(e){
        if (window.location.hash == '#_=_') {
            window.location.hash = ''; // for older browsers, leaves a # behind
            history.pushState('', document.title, window.location.pathname); // nice and clean
            e.preventDefault(); // no page reload
        }
    });

    $(function () {
        makeMap();
        map.on('load', function () {
            drawBruges(map);
            setSpecialMarker(map);
            // $('.entrepot').attr('data-tooltip') = 'something';
        });
        listen();
        addEventListeners(function(props) {
          visualize(props);
        });
        $("#route").on('click', openRoute);
        setInterval(determinePosition, 5000);
        setInterval(listen, 1500);
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

    function visualize(props) {
      if (props.active) {
        data[props.name]().then(function(points) {
          setMarkers(map, points, props.name, props.content);
        });
      } else {
        clearMarkers(map, props.name);
      }
    }
})();
