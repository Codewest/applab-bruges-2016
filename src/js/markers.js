var markerLayers = {};

var sendMarkers = function(geojson, map, name, content) {
  var mapObjs = [];
  geojson.features.forEach(function(marker) {
    // create a DOM element for the marker
    var el = document.createElement('i');
    el.className = 'marker material-icons';
    el.innerHTML = content;
    el.style.width = marker.properties.iconSize[0] + 'px';
    el.style.height = marker.properties.iconSize[1] + 'px';
    el.style.color = 'rgba(211, 47, 47, 1)';
    el.addEventListener('click', function() {
        window.alert(marker.properties.message);
    });

    var mapObj = new mapboxgl.Marker(el, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]});
    mapObj.setLngLat(marker.geometry.coordinates);
    mapObj.addTo(map);
    mapObjs.push(mapObj);
  });
  markerLayers[name] = mapObjs;
};

export function clearMarkers(map, name) {
  markerLayers[name].forEach(function(marker){
    marker.remove();
  });
};

export function setMarkers(map, coords, name, content) {
  var features = [];
  for (var i = 0; i < coords.length; i++) {
    var points = coords[i];
    var feature = {
        "type": "Feature",
        "properties": {
            "message": "A point",
            "iconSize": [60, 60]
        },
        "geometry": {
            "type": "A point",
            "coordinates": [points.long, points.lat]
        }
    };
    features.push(feature);
  }

  var geojson = {
    "type": "FeatureCollection",
    "features": features
  }

  sendMarkers(geojson, map, name, content);
};
