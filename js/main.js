document.addEventListener("DOMContentLoaded", function () {
    // mobile nav
    const navIcon = document.querySelector('.nav-icon');
    const nav = document.querySelector('.nav-mobile');
    navIcon.addEventListener('click', function () {
	this.classList.toggle('nav-icon--active');
    nav.classList.toggle('nav-mobile--active');
    });

    // phone mask
    if (document.querySelectorAll('#phone').length > 0) {
        const input = document.querySelector('#phone');
        const mask = new Inputmask('+7 (999) 999-99-99');
        mask.mask(input);
    }
});
