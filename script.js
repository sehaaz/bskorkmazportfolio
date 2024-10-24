// Get the main section buttons and content sections
const skillsBtn = document.getElementById('skillsBtn');
const projectsBtn = document.getElementById('projectsBtn');
const educationBtn = document.getElementById('educationBtn');
const certificatesBtn = document.getElementById('certificatesBtn');
const hobbiesBtn = document.getElementById('hobbiesBtn');

const skillsSection = document.getElementById('skills');
const projectsSection = document.getElementById('projects');
const educationSection = document.getElementById('education');
const certificatesSection = document.getElementById('certificates');
const hobbiesSection = document.getElementById('hobbies');

// Hobbies sub-tab buttons
const moviesBtn = document.getElementById('moviesBtn');
const chessBtn = document.getElementById('chessBtn');
const geoBtn = document.getElementById('geoBtn');
const compBtn = document.getElementById('compBtn');
const gamesBtn = document.getElementById('gamesBtn');
const resBtn = document.getElementById('resBtn');
const japanBtn = document.getElementById('japanBtn');

// Project sub-tab buttons
const project1Btn = document.getElementById('project1Btn');
const project2Btn = document.getElementById('project2Btn');
const project3Btn = document.getElementById('project3Btn');

// Project content sections
const project1 = document.getElementById('project1');
const project2 = document.getElementById('project2');
const project3 = document.getElementById('project3');

// Project content sections
const hobby1 = document.getElementById('hobby1');
const hobby2 = document.getElementById('hobby2');
const hobby3 = document.getElementById('hobby3');
const hobby4 = document.getElementById('hobby4');
const hobby5 = document.getElementById('hobby5');
const hobby6 = document.getElementById('hobby6');
const hobby7 = document.getElementById('hobby7');

// Function to switch to Skills tab
hobbiesBtn.addEventListener('click', function() {
    showSection(hobbiesSection);
    showHobby(hobby1);
});

skillsBtn.addEventListener('click', function() {
    showSection(skillsSection);
});

// Function to switch to Projects tab
projectsBtn.addEventListener('click', function() {
    showSection(projectsSection);
    showProject(project1); // Default to showing Project 1
});

// Function to switch to Education tab
educationBtn.addEventListener('click', function() {
    showSection(educationSection);
});

// Function to switch to Certificates tab
certificatesBtn.addEventListener('click', function() {
    showSection(certificatesSection);
});

// Function to show the selected section and hide others
function showSection(sectionToShow) {
    const sections = document.querySelectorAll('.tab-content');
    sections.forEach(section => section.style.display = 'none');
    sectionToShow.style.opacity = '0';
    sectionToShow.style.display = 'block';
    setTimeout(() => {
        sectionToShow.style.transition = 'opacity 0.5s ease-in-out';
        sectionToShow.style.opacity = '1';
    }, 10);
}

// Functions to switch between hobbies
moviesBtn.addEventListener('click', function() {
    showHobby(hobby1);
});

chessBtn.addEventListener('click', function() {
    showHobby(hobby2);
});

geoBtn.addEventListener('click', function() {
    showHobby(hobby3);
});

compBtn.addEventListener('click', function() {
    showHobby(hobby4);
});

gamesBtn.addEventListener('click', function() {
    showHobby(hobby5);
});

resBtn.addEventListener('click', function() {
    showHobby(hobby6);
});

japanBtn.addEventListener('click', function() {
    showHobby(hobby7);
});

// Function to show the selected hobby and hide others
function showHobby(hobbyToShow) {
    hobby1.style.display = 'none';
    hobby2.style.display = 'none';
    hobby3.style.display = 'none';
    hobby4.style.display = 'none';
    hobby5.style.display = 'none';
    hobby6.style.display = 'none';
    hobby7.style.display = 'none';

    hobbyToShow.style.display = 'block';
}

// Functions to switch between projects
project1Btn.addEventListener('click', function() {
    showProject(project1);
});

project2Btn.addEventListener('click', function() {
    showProject(project2);
});

project3Btn.addEventListener('click', function() {
    showProject(project3);
});

// Function to show the selected project and hide others
function showProject(projectToShow) {
    project1.style.display = 'none';
    project2.style.display = 'none';
    project3.style.display = 'none';

    projectToShow.style.display = 'block';
}
