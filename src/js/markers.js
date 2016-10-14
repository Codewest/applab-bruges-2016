var sendMarkers = function(geojson, map) {
  geojson.features.forEach(function(marker) {
    // create a DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
    el.style.width = marker.properties.iconSize[0] + 'px';
    el.style.height = marker.properties.iconSize[1] + 'px';

    el.addEventListener('click', function() {
        window.alert(marker.properties.message);
    });

    // add marker to map
    new mapboxgl.Marker(el, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]})
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
  });
};

export function clearMarkers() {
  console.log('Markers cleared');
};

export function setMarkers(map, coords) {
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

  sendMarkers(geojson, map);
};
