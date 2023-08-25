document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    document.body.addEventListener("click", function(event) {
        if (event.target === menu) {
            menu.classList.toggle('bx-x');
            navbar.classList.toggle('open');
        }
    });
});