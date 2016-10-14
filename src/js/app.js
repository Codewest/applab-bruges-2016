(function() {
    $(function () {
        makeMap();
        addEventListeners();
    });

    var addEventListeners = function () {
        $(".hamburger").on('click', toggleMenu);
    };

    var toggleMenu = function() {
        $(".menu").slideToggle();
    };

    var makeMap = function makeMap() {
        mapboxgl.accessToken = "pk.eyJ1Ijoicm9vdHNhbSIsImEiOiJjaXU5a2V4aGcwMDFlMnRtazRibjZiZGN3In0.Q1K1wv1ugX49a4e1pCLMZw";
        var map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/light-v9",
            center: [3.227180, 51.210358],
            zoom: 13.7
        });
    };
})();
