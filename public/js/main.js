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

let partners = document.querySelector('.logos-slide').querySelectorAll('img')
let partners2 = document.querySelectorAll('.logos-slide')[1].querySelectorAll('img')
let partnersSrc = []
let partnersSrc2 = []

partners.forEach(partner => {
    partnersSrc.push(partner)
});

partners2.forEach(partner => {
    partnersSrc2.push(partner)
});

let partnersSrcArray = []
const partenaires = data.partenaires;

for (const partnerKey in partenaires) {
    if (partenaires.hasOwnProperty(partnerKey)) {
        const partner = partenaires[partnerKey];
        const logoUrl = partner.logo;
        partnersSrcArray.push(logoUrl)
    }
}

for (let i = 0; i < partnersSrc.length; i++) {
    partnersSrc[i].setAttribute('src', partnersSrcArray[i]);
}

for (let i = 0; i < partnersSrc.length; i++) {
    partnersSrc2[i].setAttribute('src', partnersSrcArray[i]);
}