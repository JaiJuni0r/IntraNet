function goBack() {
      window.history.back()
    };

function redirectTo(url) {
        window.location.href = url;
    };   

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
    
hamburger.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
