document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector(".hamburger");
    const navBar = document.querySelector(".nav-bar");
    const navLinks = document.querySelectorAll(".nav-bar a");

    hamburger.onclick = function() {
        navBar.classList.toggle("active");
    };

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navBar.classList.contains("active")) {
                navBar.classList.toggle("active");
            }
        });
    });
});

var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter ++;
    if(counter > 9) {
        counter = 1;
    }
}, 3500);