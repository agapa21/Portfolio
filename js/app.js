const header = document.querySelector("header");

/* ---------- Sticky Navbar --------- */

function stickyNavbar(){ //dzialanie przy scrollowaniu 
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);