import data from '../json/molengeek.json' assert { type: "json" };

let allJobsNames = Array.from(document.querySelectorAll('.jobs-card .title'));
let dataJobsNames = Object.values(data.jobs).map(job => job.poste);

allJobsNames.forEach((element, index) => {
    if (dataJobsNames[index]) {
        element.innerHTML = dataJobsNames[index];
    }
});

let allJobsDescs = Array.from(document.querySelectorAll('.jobs-card .description'));
let dataJobsDescs = Object.values(data.jobs).map(job => job.description);

allJobsDescs.forEach((element, index) => {
    if (dataJobsDescs[index]) {
        element.innerHTML = dataJobsDescs[index];
    }
});