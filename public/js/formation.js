import data from '../json/molengeek.json' assert { type: "json" };

let allFormationNames = Array.from(document.querySelectorAll('.formation-name'));
let dataFormationNames = Object.values(data.formations.formationsLongues).map(formation => formation.nom);

allFormationNames.forEach((element, index) => {
    if (dataFormationNames[index]) {
        element.innerHTML = dataFormationNames[index];
    }
});

let allFormationTimes = Array.from(document.querySelectorAll('.formation-time'));
let dataFormationTimes = Object.values(data.formations.formationsLongues).map(formation => formation.duree);

allFormationTimes.forEach((element, index) => {
    if (dataFormationTimes[index]) {
        element.innerHTML = dataFormationTimes[index];
    }
});

let allFormationDescs = Array.from(document.querySelectorAll('.formation-desc'));
let dataFormationDescs = Object.values(data.formations.formationsLongues).map(formation => formation.descriptif);

allFormationDescs.forEach((element, index) => {
    if (dataFormationDescs[index]) {
        element.innerHTML = dataFormationDescs[index];
    }
});

let allFormationUls = Array.from(document.querySelectorAll('.formation-ul'));
let dataFormationUls = Object.values(data.formations.formationsLongues).map(formation => formation.condition);

allFormationUls.forEach((ul, index) => {
    let conditions = dataFormationUls[index];
    if (conditions) {
        ul.innerHTML = '';
        Object.values(conditions).forEach(condition => {
            if (condition) {
                let li = document.createElement('li');
                li.textContent = condition;
                ul.appendChild(li);
            }
        });
    }
});

let allShortFNames = Array.from(document.querySelectorAll('.mini-card .title'));
let dataShortFNames = Object.values(data.formations.formationsCourtes).map(formation => formation.nom);

allShortFNames.forEach((element, index) => {
    if (dataShortFNames[index]) {
        element.innerHTML = dataShortFNames[index];
    }
});

let allShortFDescs = Array.from(document.querySelectorAll('.mini-card .description'));
let dataShortFDescs = Object.values(data.formations.formationsCourtes).map(formation => formation.pack);

allShortFDescs.forEach((element, index) => {
    if (dataShortFDescs[index]) {
        element.innerHTML = dataShortFDescs[index];
    }
});

let menuFilterItems = document.querySelectorAll('.filterBtn');
let menuCards = document.querySelectorAll('.navigation-card');

menuFilterItems.forEach(function (item) {
    item.addEventListener('click', function () {
        menuFilterItems.forEach(function (filterItem) {
            filterItem.classList.remove('active');
        });

        this.classList.add('active');
        let filterValue = this.getAttribute('data-filter');

        menuCards.forEach(function (card) {
            card.style.display = 'none';
            if (filterValue === '*' || card.classList.contains(filterValue.slice(1))) {
                card.style.display = 'flex';
            }
        });
    });
});