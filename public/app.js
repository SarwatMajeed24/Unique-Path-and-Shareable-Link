"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
// Import jsPDF from the library
var jspdf_1 = require("jspdf");
// Function to toggle the visibility of the Skills section
function toggleSkillsVisibility() {
    var skillsSection = document.getElementById('skills');
    var toggleButton = document.getElementById('toggle-skills-btn');
    if (skillsSection && toggleButton) {
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
            toggleButton.textContent = 'Hide Skills';
        }
        else {
            skillsSection.style.display = 'none';
            toggleButton.textContent = 'Show Skills';
        }
    }
}
// Function to toggle the visibility of the Education section
function toggleEducationVisibility() {
    var educationSection = document.getElementById('education');
    var toggleButton = document.getElementById('toggle-education-btn');
    if (educationSection && toggleButton) {
        if (educationSection.style.display === 'none' || educationSection.style.display === '') {
            educationSection.style.display = 'block';
            toggleButton.textContent = 'Hide Education';
        }
        else {
            educationSection.style.display = 'none';
            toggleButton.textContent = 'Show Education';
        }
    }
}
// Function to toggle the visibility of the Work Experience section
function toggleWorkExperienceVisibility() {
    var workExperienceSection = document.getElementById('work-experience');
    var toggleButton = document.getElementById('toggle-work-experience-btn');
    if (workExperienceSection && toggleButton) {
        if (workExperienceSection.style.display === 'none' || workExperienceSection.style.display === '') {
            workExperienceSection.style.display = 'block';
            toggleButton.textContent = 'Hide Work Experience';
        }
        else {
            workExperienceSection.style.display = 'none';
            toggleButton.textContent = 'Show Work Experience';
        }
    }
}
// Function to handle profile picture upload and display
function handleProfilePicUpload(event) {
    var _a;
    var input = event.target;
    var file = (_a = input.files) === null || _a === void 0 ? void 0 : _a[0];
    var img = document.getElementById('profile-img');
    if (file && img) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            img.src = reader_1.result;
        };
        reader_1.readAsDataURL(file);
    }
}
// Function to generate a shareable link based on username
function generateShareableLink() {
    var usernameInput = document.getElementById('username');
    var shareableLinkElement = document.getElementById('shareable-link');
    var username = usernameInput.value.trim();
    if (username) {
        var uniqueLink = "".concat(username, ".vercel.app/resume"); // Replace with your actual domain and path
        shareableLinkElement.textContent = "Share your resume with this link: ".concat(uniqueLink);
        shareableLinkElement.style.display = 'block';
    }
    else {
        shareableLinkElement.textContent = 'Please enter a username.';
        shareableLinkElement.style.display = 'block';
    }
}
// Function to download the resume as a PDF
function downloadPDF() {
    var _a;
    var doc = new jspdf_1.jsPDF();
    var resumeContent = ((_a = document.querySelector('.resume-container')) === null || _a === void 0 ? void 0 : _a.innerHTML) || '';
    doc.html(resumeContent, {
        callback: function (doc) {
            doc.save('resume.pdf');
        },
        x: 10,
        y: 10
    });
}
// Add event listeners
(_a = document.getElementById('toggle-skills-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', toggleSkillsVisibility);
(_b = document.getElementById('toggle-education-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', toggleEducationVisibility);
(_c = document.getElementById('toggle-work-experience-btn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', toggleWorkExperienceVisibility);
(_d = document.getElementById('profile-pic-upload')) === null || _d === void 0 ? void 0 : _d.addEventListener('change', handleProfilePicUpload);
(_e = document.getElementById('generate-link-btn')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', generateShareableLink);
(_f = document.getElementById('download-pdf-btn')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', downloadPDF);
