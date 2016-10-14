var addEventListeners = function () {
    $(".hamburger").on('click', toggleMenu);
};

var toggleMenu = function() {
    $(".menu").slideToggle();
};

export { addEventListeners };
