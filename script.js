function scrollDown() {
    window.scrollTo({
        top: window.scrollY + 850, // Scroll down by 100 pixels
        behavior: 'smooth'
    });
}

function gitTake() {
    var websiteURL = 'https://github.com/';

    window.location.href = websiteURL;
}

function toggleMenu() {
    var overlay = document.getElementById("overlay");
    var todelete = document.getElementById("register-line");
    if (overlay.style.display === "flex") {
        overlay.style.opacity = 0;
        setTimeout(function () {
            overlay.style.display = "none";
            todelete.style.display ="grid";

        }, 400);
    } else {
        overlay.style.display = "flex";
        setTimeout(function () {
            overlay.style.opacity = 1;
            todelete.style.display ="none";
            
        }, 10);
    }
}


function fadeInSection(element) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    });
  
    observer.observe(element);
  }
  
  const fadeInSectionElements = document.querySelectorAll('.fade-in-section');
  fadeInSectionElements.forEach(fadeInSection);
  