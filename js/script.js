document.addEventListener("DOMContentLoaded",
function(event){ 

    function classToggle() {
        const navs = document.querySelectorAll('.navbar')
        
        navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
      }
      
      document.querySelector('.Navbar__Link-toggle')
        .addEventListener('click', classToggle);
// document.querySelector("button").addEventListener("click", reply)
document.querySelector("button").onclick = show;

}) ;