

const menuButton = document.getElementById('menu-button');
    const navLinks = document.querySelector('.nav-links');

    function toggleMenu() {
        navLinks.classList.toggle('open');
        const isExpanded = navLinks.classList.contains('open');
        menuButton.setAttribute('aria-expanded', isExpanded);
        menuButton.innerHTML = isExpanded ? '✕' : '☰';
    }

    menuButton.addEventListener('click', toggleMenu);

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) toggleMenu();
        });
    });


let name = document.getElementById("name");
let message1 = document.getElementById("message1");
let email = document.getElementById("email");
let message2 = document.getElementById("message2");
let message = document.getElementById("message");
let message3 = document.getElementById("message3");
let message4 = document.getElementById("message4");


const form = document.getElementById("contactForm");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    message1.style.display = "none";
    message1.innerText = "";
    message2.style.display = "none";
    message2.innerText = "";
    message3.style.display = "none";
    message3.innerText = "";
    message4.style.display = "none";
    message4.innerText = "";

    if (name.value == "") {
        message1.style.display = "block";
        message1.innerText = "Please enter your name.";
    }
    else if (email.value == "") {
        message2.style.display = "block";
        message2.innerText = "Please enter your email address.";
    }
    else if (message.value == "") {
        message3.style.display = "block";
        message3.innerText = "Please enter something.";
    }
    else {
        message4.style.display = "block";
        message4.innerText = "Form Submitted!";
    }
})