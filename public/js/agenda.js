import data from '../json/molengeek.json' assert { type: "json" };

let allEventDates = Array.from(document.querySelectorAll('.event-date'));
let dataEventDates = Object.values(data.formations.seancesInfos).map(formation => formation.date);

allEventDates.forEach((element, index) => {
    if (dataEventDates[index]) {
        element.innerHTML = dataEventDates[index];
    }
});

let allEventNames = Array.from(document.querySelectorAll('.event-name'));
let dataEventNames = Object.values(data.formations.seancesInfos).map(formation => formation.nom);

allEventNames.forEach((element, index) => {
    if (dataEventNames[index]) {
        element.innerHTML = dataEventNames[index];
    }
});