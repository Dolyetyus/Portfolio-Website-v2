function openCV() {
    window.open('files/resume.pdf', '_blank');
}

document.getElementById('lastUpdated').textContent = 'CV last updated: 12/11/2024';

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('open');
}

// Code from the old website
function myFunction(x) {
    x.classList.toggle("change");
  }

function openLanguageIndex(language) {
    console.log(`Opening index for ${language}`);
}

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
    const redirects = document.querySelector(".redirects");
    const socialMedia = document.querySelector(".social-media");
    const intro = document.querySelector(".intro");

    container.addEventListener("click", function() {
        if (window.getComputedStyle(redirects).display === "none") {
            redirects.style.display = "block";
            socialMedia.classList.add("bottom");
            intro.classList.add("bottom");
        } 
        else {
            redirects.style.display = "none";
            socialMedia.classList.remove("bottom");
            intro.classList.remove("bottom");
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const projectsButton = document.getElementById("projectsButton");
    const aboutButton = document.getElementById("aboutButton");
    const homeButton = document.getElementById("homeButton");
    const languageList = document.getElementById("languageList");
    const aboutMeList = document.getElementById("aboutMeList");

    function toggleList(list, otherList) {
        if (list.style.display === "block") {
            list.style.display = "none";
        } 
        else {
            list.style.display = "block";
            if (otherList.style.display === "block") {
                otherList.style.display = "none";
            }
        }
    }

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;

    if (isTouchDevice) {
        // If on a touch device, click event listeners
        projectsButton.addEventListener("click", function(event) {
            event.preventDefault();
            toggleList(languageList, aboutMeList);
        });

        aboutButton.addEventListener("click", function(event) {
            event.preventDefault();
            toggleList(aboutMeList, languageList);
        });
    } 
    else {
        // If not on a touch device
        projectsButton.addEventListener("mouseenter", function() {
            languageList.style.display = "block";
            aboutMeList.style.display = "none";
        });

        projectsButton.addEventListener("mouseleave", function() {
            if (!isMouseOnElement(languageList)) {
                languageList.style.display = "none";
            }
        });

        languageList.addEventListener("mouseenter", function() {
            languageList.style.display = "block";
        });

        languageList.addEventListener("mouseleave", function() {
            languageList.style.display = "none";
        });

        aboutButton.addEventListener("mouseenter", function() {
            aboutMeList.style.display = "block";
            languageList.style.display = "none";
        });

        homeButton.addEventListener("mouseenter", function() {
            aboutMeList.style.display = "none";
        });

        aboutButton.addEventListener("mouseleave", function() {
            if (!isMouseOnElement(aboutMeList)) {
                aboutMeList.style.display = "none";
            }
            aboutMeList.style.display = "none";
        });

        aboutMeList.addEventListener("mouseenter", function() {
            aboutMeList.style.display = "block";
        });

        aboutMeList.addEventListener("mouseleave", function() {
            aboutMeList.style.display = "none";
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
            
            // Remove the 'overflow: hidden' style after the animation duration (0.6s)
            if (index === elements.length - 1) {
                setTimeout(() => {
                    document.body.style.overflow = ''; // Revert to default overflow
                }, 600); // match the duration of the fade-in animation
            }
        }, index * 300);
    });
});