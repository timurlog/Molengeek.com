import data from '../json/molengeek.json' assert { type: "json" };

let allPressNames = Array.from(document.querySelectorAll('.press-date'));
let dataPressNames = Object.values(data.articles).map(article => article.date);

allPressNames.forEach((element, index) => {
    if (dataPressNames[index]) {
        element.innerHTML = dataPressNames[index];
    }
});

let allPressSource = Array.from(document.querySelectorAll('.press-source'));
let dataPressSource = Object.values(data.articles).map(article => article.source);

allPressSource.forEach((element, index) => {
    if (dataPressSource[index]) {
        element.innerHTML = dataPressSource[index];
    }
});

let allPressDescs = Array.from(document.querySelectorAll('.press-name'));
let dataPressDescs = Object.values(data.articles).map(article => article.headline);

allPressDescs.forEach((element, index) => {
    if (dataPressDescs[index]) {
        element.innerHTML = dataPressDescs[index];
    }
});