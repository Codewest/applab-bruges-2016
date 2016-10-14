var Landmark = require('./landmark');

var LandmarkManager = {};

LandmarkManager.landmarks = [];

LandmarkManager.create = function(id, name, type, location) {
    LandmarkManager.landmarks[id] = new Landmark(name, type, location);
};

module.exports = LandmarkManager;
