//Save Reference to important DOM elements
let timeDisplayEl = $('#time-display');
let projectDisplayEl = $('#project-display');
let projectFormEl = $('#project-form');
let projectNameInputEl = $('#project-name-input');
let projectTypeInputEl = $('#project-type-input');
let projectDateInputEl = $('#project-date-input');

//Handle display the time
function displayTime() {
    let rightNow = dayjs().format('MMMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

//Reads projects from local storage and returns array of project objects
//Returns an empty array ([]) if there aren't any projects.
function readProjectFromStorage() {
    let projects = localStorage.getItem('projects');
    if (projects) {
        projects = JSON.parse(projects);
    } else {
        projects = [];
    }
    return projects;
}

//Takes an array of projects and saves them in localStorage
function saveProjectsToStorage(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
}

//Gets project data from local storage and displays it
function printProjectData() {
    //clear current projects on the page
    projectDateInputEl.empty();

    //gets projects from localStorage
    let projects = readProjectFromStorage();

    //loop through each project and create a row
    for (var i=0; i < projects.length; i++) {
        let project = projects[i];
        let projectDate = dayjs(project.date);
        //get date/time for start of today
        let today = dayjs().startOf('day');

        //Create row and columns for project
        let rowEl = $('<tr>');
    }
}