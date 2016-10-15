var menuOpen = false;
var subMenuOpen = false;

var addEventListeners = function (callback) {
    $(".hamburger").on("click", toggleMenu);
    $(".interesses").on("click", openInteressesPage);
    $(".interesses-page .menu-item").on("click", function() {
        $(this).toggleClass("activated");
        var props = getClickedInterest($(this));
        callback(props);
    });
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
            $(".interesses-page").slide();
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
