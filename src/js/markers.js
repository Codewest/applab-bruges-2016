var markerLayers = {};
var entrepot;

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
      el.addEventListener('click', function () {
          window.alert(marker.properties.message);
      });

      var mapObj = new mapboxgl.Marker(el, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]});
      if (marker.geometry.type.toLowerCase() == "point") {
          mapObj.setLngLat(marker.geometry.coordinates);
          mapObj.addTo(map);
          mapObjs.push(mapObj);
      }
      if (marker.geometry.type.toLowerCase() == "multipoint") {
          marker.geometry.coordinates.forEach(function (point) {
              var lngLat = [2];
              lngLat[0] = point[0];
              lngLat[1] = point[1];
              mapObj.setLngLat(lngLat);
              mapObj.addTo(map);
              mapObjs.push(mapObj);
          })
      }
      if (marker.geometry.type.toLowerCase() == "polygon") {
          if (marker.featureType == "Musea")
          {
              map.addSource(marker.naam, {
                  'type': 'geojson',
                  'data': {
                      'type': 'Feature',
                      'properties': {
                          'name': marker.naam
                      },
                      'geometry': {
                          "type": "Polygon",
                          "coordinates": marker.geometry.coordinates
                      }
                  }
              });

              map.addLayer({
                  'id': marker.naam,
                  'type': 'line',
                  'source': marker.naam,
                  'layout': {
                      'line-join': 'round'
                  },
                  'paint': {
                      'line-color': 'blue',
                      'line-width': 2
                  }
              });
          }
          else {
              if (marker.beheersObject == "parken")
              {
                  map.addSource(marker.naam, {
                      'type': 'geojson',
                      'data': {
                          'type': 'Feature',
                          'properties': {
                              'name': marker.naam
                          },
                          'geometry': {
                              "type": "Polygon",
                              "coordinates": marker.geometry.coordinates
                          }
                      }
                  });
                  var color;
                  map.addLayer({
                      'id': marker.naam,
                      'type': 'line',
                      'source': marker.naam,
                      'layout': {
                          'line-join': 'round'
                      },
                      'paint': {
                          'line-color': "green",
                          'line-width': 2
                      }
                  });
              }
          }

      }
  });
  markerLayers[name] = mapObjs;
};

export function setSpecialMarker(map, callback) {
  var el = document.createElement('i');
  el.className = 'marker material-icons entrepot';
  el.innerHTML = 'room';
  el.style.color = 'rgba(211, 47, 47, 1)';

  el.addEventListener('click', callback);

  entrepot = new mapboxgl.Marker(el, {offset: [-30, -30]});
  entrepot.setLngLat([3.225813, 51.226464]);
  entrepot.addTo(map);
  return el;
}

export function clearMarkers(map, name) {
  markerLayers[name].forEach(function(marker){
    marker.remove();
  });
};

export function setMarkers(map, data, name, content) {
  var features = [];
  for (var i = 0; i < data.length; i++) {
    var feature = {
        "type": "Feature",
        "featureType": data[i].featureType,
        "properties": {
            "message": "A point",
            "iconSize": [60, 60]
        },
        "geometry": {
            "type": data[i].type,
            "coordinates": data[i].coords
        }
    };
    if (data[i].naam != null)
    {
        feature["naam"] = data[i].naam;
        feature['message'] = data[i].naam;
    }
    if (data[i].beheersObject != null) {
        feature["beheersObject"] = data[i].beheersObject;
    }
    features.push(feature);
  }

  var geojson = {
    "type": "FeatureCollection",
    "features": features
  }

  sendMarkers(geojson, map, name, content);
};
