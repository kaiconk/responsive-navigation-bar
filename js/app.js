// anonymous function
const navSlide = () => {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () =>  {
        nav.classList.toggle('nav-active');
    });

    // Animate nav links
    navLinks.forEach((link, index) => {
        // remember use forward ticks
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;       
    });

}

navSlide();