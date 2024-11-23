let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// NAVBAR SECTION JS

let list = document.querySelectorAll('.nav-list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', activeLink))

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// HOME SECTION JS

const phrases = ["Frontend Designer", "Web Designer", "UI / UX Designer", "Web Developer", "Software Developer"];
let phraseIndex = 0;
let letterIndex = 0;
const typingSpeed = 150; // Adjust typing speed
const deletingSpeed = 100;

function typePhrase() {
    const textElement = document.querySelector('.text-animation span');
    
    // Determine whether to add or remove letters
    if (letterIndex < phrases[phraseIndex].length) {
        textElement.textContent += phrases[phraseIndex][letterIndex];
        letterIndex++;
        setTimeout(typePhrase, typingSpeed);
    } else {
        setTimeout(deletePhrase, 2000); // Pause before deleting
    }
}

function deletePhrase() {
    const textElement = document.querySelector('.text-animation span');
    
    if (letterIndex > 0) {
        textElement.textContent = phrases[phraseIndex].slice(0, --letterIndex);
        setTimeout(deletePhrase, deletingSpeed);
    } else {
        // Move to the next phrase or loop back to the start
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typePhrase, typingSpeed);
    }
}

// Start the typing effect
typePhrase();

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// ABOUT SECTION JS

document.getElementById('readMoreBtn').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor click behavior
    const moreContent = document.querySelector('.more-content');
    if (moreContent.style.display === 'none') {
        moreContent.style.display = 'block';
        this.textContent = 'Read Less'; // Change button text
    } else {
        moreContent.style.display = 'none';
        this.textContent = 'Read More'; // Change button text back
    }
});


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


// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// CONTACT FORM SECTION JS

async function submitForm(event) {
    event.preventDefault();

    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value
    };

    try {
      const response = await fetch('/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.success) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  }