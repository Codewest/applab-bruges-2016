var Landmark = require('./landmark');

var LandmarkManager = {};

// key is location
LandmarkManager.landmarks = [];

LandmarkManager.create = function(name, type, location) {
    LandmarkManager.landmarks[location] = new Landmark(name, type, location);
};

LandmarkManager.getNear = function(location) {
    var nearby = [];
    LandmarkManager.landmark.forEach(function(landmark) {
        if(landmark.location.isInProximity(0.01, location))
            nearby.push(landmark);
    });
    return nearby;
};

module.exports = LandmarkManager;
