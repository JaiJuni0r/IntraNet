function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);

    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");
    
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("show");
    });

function goBack() {
      window.history.back()
 }

function redirectTo(url) {
        window.location.href = url;
    }    