(function() {
    $(function () {
        makeMap();
        $("#route").on('click', openRoute);
    });

    var makeMap = function makeMap() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoicm9vdHNhbSIsImEiOiJjaXU5a2V4aGcwMDFlMnRtazRibjZiZGN3In0.Q1K1wv1ugX49a4e1pCLMZw';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v9',
            center: [3.227180, 51.210358],
            zoom: 13.7
        });
    };

    var openRoute = function openRoute() {
        var xStart = 51.2092336; //user x-position here (GEOLOCATION)
        var yStart = 3.222877;  //user y-position here
        var xDestination = 51.2079017; //end x-position here (open data)
        var yDestination = 3.2221577; //end x-position here
        var xCenter = (xStart + xDestination)/2;
        var yCenter = (yStart + yDestination)/2;
        var zoom = 18.75;
        window.open("https://www.google.be/maps/dir/" + xStart + "," + yStart + "/" + xDestination + "," + yDestination + "/@" + xCenter + "," + yCenter + "," + zoom +"z");
    }
})();
