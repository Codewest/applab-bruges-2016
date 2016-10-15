var menuOpen = false;
var subMenuOpen = false;

var addEventListeners = function (callback) {
    $(".hamburger").on("click", toggleMenu);
    $(".interesses").on("click", openInteressesPage);
    $(".photo").on("click", togglePhoto);
    $(".take-photo").on("click", takePhoto);
    $(".cancel-photo").on("click", cancelPhoto);
    $(".interesses-page .menu-item").on("click", function() {
        $(this).toggleClass("activated");
        var props = getClickedInterest($(this));
        callback(props);
    });
};

var takePhoto = function() {

};

var cancelPhoto = function() {
    $("#photo").slideUp();
    $("aside").show();
    $("#map").slideDown();
};

var togglePhoto = function() {
    $("#map").slideUp();
    $("aside").hide();
    $("#photo").slideDown();
};

var openInteressesPage = function() {
    $(".main-menu").slideUp();
    $(".interesses-page").slideDown();
    subMenuOpen = true;
};

var toggleMenu = function() {
    if (menuOpen) {
        if(subMenuOpen) {
            $(".interesses-page").slideUp();
            $(".main-menu").slideDown();
            subMenuOpen = false;
        } else {
            $(".hamburger i").html("menu");
            $(".main-menu").slideUp();
            $(".interesses-page").slideUp();
            menuOpen = false;
        }
    } else {
        $(".hamburger i").html("close");
        $(".main-menu").slideDown();
        menuOpen = true;
    }
};

var getClickedInterest = function(clickedEl) {
    var activated = [];
    var name = clickedEl.attr("class").split(" ")[1];
    var active = clickedEl.attr("class").includes("activated");
    var content = clickedEl.children('i').text();
    return { name, active, content};
};

export { addEventListeners };
