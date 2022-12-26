const header = document.querySelector("header");

window.addEventListener("scroll", function() {
	header.classList.toggle("sticky", window.scrollY > 0);
	console.log("ghello")
});

let menu =  document.querySelector('#menu-icon');
let navbar =  document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};
// Top-scroll
window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};

const topScroll = ScrollReveal ({
	duration: 1200,
	distance: '50px',
	reset: true
});

topScroll.reveal('.home-text',{delay:150, origin:'left'});
topScroll.reveal('.home-img',{delay:150, origin:'right'});

topScroll.reveal('.container, .about, .menu, .contact',{delay:150, origin:'bottom'});