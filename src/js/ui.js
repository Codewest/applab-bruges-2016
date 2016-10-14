var menuOpen = false;
var subMenuOpen = false;
var activeInterests = [];

var addEventListeners = function () {
    $(".hamburger").on("click", toggleMenu);
    $(".interesses").on("click", openInteressesPage);
    $(".interesses-page .menu-item").on("click", function() {
        $(this).toggleClass("activated");
        activeInterests = updateActiveInterests();
        console.log(getActiveInterests());
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

var updateActiveInterests = function() {
    var interestList = $(".interesses-page").children();
    var activated = [];

    for (var i = 0; i < interestList.length; i++) {
        if (interestList[i].getAttribute("class").includes("activated")) {
            activated.push(interestList[i].getAttribute("class").split(" ")[1]);
        }
    }

    return activated;
};

var getActiveInterests = function() {
    return activeInterests;
};

export { addEventListeners, getActiveInterests};
