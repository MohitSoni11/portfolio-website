// Fade In Animation

const reveal = () => {
  // Getting all the elements with the class reveal
  var reveals = document.querySelectorAll('.reveal')
  
  // Looping and seeing if .reveal elements should be revealed or not
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
}

// Navbar Active Automatically Changing Animation (not working yet)

const navActiveChanger = () => {
  let sections = document.querySelectorAll('section');
  let menu = document.querySelectorAll('.nav-link');

  sections.forEach(i => {
    let scrollPosition = window.scrollY;
    let sectionTop = i.offsetTop - 150;
    let sectionHeight = i.offsetHeight;
    let sectionId = i.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      menu.forEach(navLink => {
        navLink.classList.remove('nav-active');
        if (navLink.getAttribute('href') == '#' + sectionId) {
          navLink.classList.add('nav-active');
        }
      });
    }
  });
}

window.addEventListener('scroll', () => {
  reveal();
  navActiveChanger();
});

