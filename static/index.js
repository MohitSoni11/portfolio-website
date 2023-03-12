function reveal() {
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

window.addEventListener('scroll', reveal);
reveal();

