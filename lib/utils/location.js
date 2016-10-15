var Location = new function(longitude, latitude) {
    this.longitude = longitude;
    this.latitude = latitude;

    this.isInProximity = function(distance, location) {
        return location.longitude >= this.longitude - distance
                && location.longitude <= this.longitude + distance
                && location.latitude >= this.latitude - distance
                && location.latitude <= this.latitude + distance;
    };
};

module.exports = Location;
