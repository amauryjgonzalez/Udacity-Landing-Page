/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
const navbar = document.getElementById('navbar__list');
let link;
let listTag;

function dynamicMenu() {

    for (let x = 1; x <= 4; x++) {
        listTag = document.createElement('li');
        link = document.createElement('a');
        link.setAttribute('href', '#');
        link.textContent = 'Section' + x;
        listTag.appendChild(link);
        navbar.appendChild(listTag);
        listTag.classList.add('sect' + x);

    }

}

dynamicMenu();

// Add class 'active' to section when near top of viewport
let button = document.getElementsByTagName('li');

function activeClass() {


    for (let i = 0; i <= 3; i++) {
        button[i].addEventListener('click', function(evt) {
            for (let f = 0; f <= 3; f++) {
                button[f].classList.remove('active');

            }
            evt.currentTarget.classList.add('active');
            navScrollEffect();
        });
    };
}

activeClass();




// Scroll to anchor ID using scrollTO event
function scrollToAnchor() {

    for (let f = 0; f <= 3; f++) {
        button[f].addEventListener('click', function(event) {
            event.preventDefault();

            if (button[0] === event.currentTarget) {
                document.querySelector('#section1').scrollIntoView({
                    behavior: 'smooth'
                })
            } else if (button[1] === event.currentTarget) {
                document.querySelector('#section2').scrollIntoView({
                    behavior: 'smooth'
                })
            } else if (button[2] === event.currentTarget) {
                document.querySelector('#section3').scrollIntoView({
                    behavior: 'smooth'
                })
            } else if (button[3] === event.currentTarget) {
                document.querySelector('#section4').scrollIntoView({
                    behavior: 'smooth'
                })
            }
        });
    }
}

scrollToAnchor();


let navClient = document.querySelector(".page__header");


//Function using getBoundingClientRect to precisely get dimensions of sections and change nav styles
function navScrollEffect() {
    let navClient = document.querySelector(".page__header");
    window.addEventListener('scroll', function(scrollevent) {


        const sect1 = document.querySelector('#section1');
        const sect2 = document.querySelector('#section2');
        const sect3 = document.querySelector('#section3');
        const sect4 = document.querySelector('#section4');

        if (sect1.getBoundingClientRect().top < navClient.getBoundingClientRect().bottom && sect2.getBoundingClientRect().bottom > window.innerHeight){
            button[0].classList.add('scroll');
            button[1].classList.remove('scroll', 'active');
            button[2].classList.remove('scroll', 'active');
            button[3].classList.remove('scroll', 'active');
        } else if (sect2.getBoundingClientRect().top < navClient.getBoundingClientRect().bottom && sect3.getBoundingClientRect().bottom > window.innerHeight) {
            button[1].classList.add('scroll');
            button[0].classList.remove('scroll', 'active');
            button[2].classList.remove('scroll', 'active');
            button[3].classList.remove('scroll', 'active');

        } else if (sect3.getBoundingClientRect().top < navClient.getBoundingClientRect().bottom && sect4.getBoundingClientRect().bottom > window.innerHeight) {
            button[2].classList.add('scroll');
            button[3].classList.remove('scroll', 'active');
            button[1].classList.remove('scroll', 'active');
            button[0].classList.remove('scroll', 'active');
        } else if (sect4.getBoundingClientRect().top < navClient.getBoundingClientRect().bottom) {
            button[3].classList.add('scroll');
            button[0].classList.remove('scroll', 'active');
            button[1].classList.remove('scroll', 'active');
            button[2].classList.remove('scroll', 'active');
        }
    });

}

navScrollEffect();

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active
