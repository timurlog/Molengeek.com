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

let eventDate = document.querySelectorAll('.event-date p');
let eventName = document.querySelectorAll('.event-name p');
let eventDateTab = []
let eventNameTab = []

eventDate.forEach(element => {
    eventDateTab.push(element)
});

eventName.forEach(element => {
    eventNameTab.push(element)
});

let eventDateArray = [];
let eventNameArray = [];
const events = data.formations.seancesInfos;

for (const eventKey in events) {
    if (events.hasOwnProperty(eventKey)) {
        const event = events[eventKey];
        const date = event.date;
        const name = event.nom;
        eventDateArray.push(date);
        eventNameArray.push(name);
    }
}

for (let i = 0; i < eventDateTab.length; i++) {
    eventDateTab[i].innerHTML = eventDateArray[i]
    eventNameTab[i].innerHTML = eventNameArray[i]
}

document.querySelector('#molengeekName').innerHTML = data.molengeekInfo.name
document.querySelector('#adress').innerHTML = data.molengeekInfo.address
document.querySelector('#tva').innerHTML = data.molengeekInfo.tva
document.querySelector('#tel').innerHTML = data.molengeekInfo.phone
document.querySelector('#mail').innerHTML = data.molengeekInfo.email

document.querySelectorAll('.footer-link')[0].setAttribute('href', data.reseauxSociaux.facebook)
document.querySelectorAll('.footer-link')[1].setAttribute('href', data.reseauxSociaux.twitter)
document.querySelectorAll('.footer-link')[2].setAttribute('href', data.reseauxSociaux.instagram)
document.querySelectorAll('.footer-link')[3].setAttribute('href', data.reseauxSociaux.linkedin)

let now = new Date();
let year = now.getFullYear();

document.querySelector('.year').innerHTML = year
