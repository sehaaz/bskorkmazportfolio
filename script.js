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
const project4Btn = document.getElementById('project4Btn');
const project5Btn = document.getElementById('project5Btn');

// Project content sections
const project1 = document.getElementById('project1');
const project2 = document.getElementById('project2');
const project3 = document.getElementById('project3');
const project4 = document.getElementById('project4');
const project5 = document.getElementById('project5');

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

project4Btn.addEventListener('click', function() {
    showProject(project4);
});

project5Btn.addEventListener('click', function() {
    showProject(project5);
});

// Function to show the selected project and hide others
function showProject(projectToShow) {
    project1.style.display = 'none';
    project2.style.display = 'none';
    project3.style.display = 'none';
    project4.style.display = 'none';
    project5.style.display = 'none';

    projectToShow.style.display = 'block';
}

// Function to handle button color change
function toggleClicked(button) {
    // Remove 'clicked' class from all buttons
    document.querySelectorAll('button').forEach(btn => btn.classList.remove('clicked'));
    // Add 'clicked' class to the clicked button
    button.classList.add('clicked');
}

// Add event listeners to all main section buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        toggleClicked(this);
    });
});
