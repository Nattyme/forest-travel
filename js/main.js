const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav-mobile');
navIcon.addEventListener('click', function () {
	this.classList.toggle('nav-icon--active');
    nav.classList.toggle('nav-mobile--active');
});
