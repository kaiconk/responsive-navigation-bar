// anonymous function
const navSlide = () => {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    // when user clicks on burger 
    burger.addEventListener('click', () =>  {

        // Toggle navigation
        nav.classList.toggle('nav-active');

        
    
        // Animate nav links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                // remember use forward ticks
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`; 
            }
                  
        });

        // Toggle burger
        nav.classList.toggle('burger-active');
    });
}

navSlide();