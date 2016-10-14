var menuOpen = false;
var subMenuOpen = false;

var addEventListeners = function () {
    $(".hamburger").on("click", toggleMenu);
    $(".interesses").on("click", openInteressesPage);
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

export { addEventListeners };
