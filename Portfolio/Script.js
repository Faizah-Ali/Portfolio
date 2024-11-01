let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute;

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROJECT SECTION JS

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.project-slider');

next.addEventListener('click', function(){
    let slides = document.querySelectorAll('.project-slides');
    slider.appendChild(slides[0]);
})

prev.addEventListener('click', function(){
    let slides = document.querySelectorAll('.project-slides');
    slider.prepend(slides[slides.length-1]);
})

