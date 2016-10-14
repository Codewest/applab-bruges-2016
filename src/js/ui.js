var menuOpen = false;

var addEventListeners = function () {
    $(".hamburger").on('click', toggleMenu);
    $(".menu-item").on('click', togglePage);
};

var toggleMenu = function() {
    toggleButtonIcon($(".hamburger i"), "menu", "close");
    $(".menu").slideToggle();
};

var togglePage = function() {
    $()
};

var toggleButtonIcon = function(button, openIcon, closeIcon) {
    if (menuOpen) {
        button.html(openIcon);
        menuOpen = false;
    } else {
        button.html(closeIcon);
        menuOpen = true;
    }
};

export { addEventListeners };
