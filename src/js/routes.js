var xStart;
var yStart;

var determinePosition = function determinePosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
};

function setPosition(position) {
    xStart = position.coords.latitude;
    yStart = position.coords.longitude;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

var openRoute = function openRoute() {
    var xDestination = 51.2079017; //end x-position here (open data)
    var yDestination = 3.2221577; //end x-position here
    var xCenter = (xStart + xDestination)/2;
    var yCenter = (yStart + yDestination)/2;
    var zoom = 18.75;
    window.open("https://www.google.be/maps/dir/" + xStart + "," + yStart + "/" + xDestination + "," + yDestination + "/@" + xCenter + "," + yCenter + "," + zoom +"z");
};

export { openRoute, determinePosition };
