import data from '../json/molengeek.json' assert { type: "json" };

// SHOW MENU
const showMenu = (toggleId, navClass) => {
    const toggle = document.getElementById(toggleId),
          nav = document.querySelector(navClass)
 
    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')

        toggle.classList.toggle('show-icon')
    })
}

showMenu('navToggle','.nav-list')