// Import jsPDF from the library
import { jsPDF } from 'jspdf';

// Function to toggle the visibility of the Skills section
function toggleSkillsVisibility(): void {
    const skillsSection = document.getElementById('skills') as HTMLElement | null;
    const toggleButton = document.getElementById('toggle-skills-btn') as HTMLButtonElement | null;

    if (skillsSection && toggleButton) {
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
            toggleButton.textContent = 'Hide Skills';
        } else {
            skillsSection.style.display = 'none';
            toggleButton.textContent = 'Show Skills';
        }
    }
}

// Function to toggle the visibility of the Education section
function toggleEducationVisibility(): void {
    const educationSection = document.getElementById('education') as HTMLElement | null;
    const toggleButton = document.getElementById('toggle-education-btn') as HTMLButtonElement | null;

    if (educationSection && toggleButton) {
        if (educationSection.style.display === 'none' || educationSection.style.display === '') {
            educationSection.style.display = 'block';
            toggleButton.textContent = 'Hide Education';
        } else {
            educationSection.style.display = 'none';
            toggleButton.textContent = 'Show Education';
        }
    }
}

// Function to toggle the visibility of the Work Experience section
function toggleWorkExperienceVisibility(): void {
    const workExperienceSection = document.getElementById('work-experience') as HTMLElement | null;
    const toggleButton = document.getElementById('toggle-work-experience-btn') as HTMLButtonElement | null;

    if (workExperienceSection && toggleButton) {
        if (workExperienceSection.style.display === 'none' || workExperienceSection.style.display === '') {
            workExperienceSection.style.display = 'block';
            toggleButton.textContent = 'Hide Work Experience';
        } else {
            workExperienceSection.style.display = 'none';
            toggleButton.textContent = 'Show Work Experience';
        }
    }
}

// Function to handle profile picture upload and display
function handleProfilePicUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    const img = document.getElementById('profile-img') as HTMLImageElement;

    if (file && img) {
        const reader = new FileReader();
        reader.onload = () => {
            img.src = reader.result as string;
        };
        reader.readAsDataURL(file);
    }
}

// Function to generate a shareable link based on username
function generateShareableLink(): void {
    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const shareableLinkElement = document.getElementById('shareable-link') as HTMLParagraphElement;
    
    const username = usernameInput.value.trim();
    if (username) {
        const uniqueLink = `${username}.vercel.app/resume`; // Replace with your actual domain and path
        shareableLinkElement.textContent = `Share your resume with this link: ${uniqueLink}`;
        shareableLinkElement.style.display = 'block';
    } else {
        shareableLinkElement.textContent = 'Please enter a username.';
        shareableLinkElement.style.display = 'block';
    }
}

// Function to download the resume as a PDF
function downloadPDF(): void {
    const doc = new jsPDF();
    const resumeContent = document.querySelector('.resume-container')?.innerHTML || '';

    doc.html(resumeContent, {
        callback: function (doc) {
            doc.save('resume.pdf');
        },
        x: 10,
        y: 10
    });
}

// Add event listeners
document.getElementById('toggle-skills-btn')?.addEventListener('click', toggleSkillsVisibility);
document.getElementById('toggle-education-btn')?.addEventListener('click', toggleEducationVisibility);
document.getElementById('toggle-work-experience-btn')?.addEventListener('click', toggleWorkExperienceVisibility);
document.getElementById('profile-pic-upload')?.addEventListener('change', handleProfilePicUpload);
document.getElementById('generate-link-btn')?.addEventListener('click', generateShareableLink);
document.getElementById('download-pdf-btn')?.addEventListener('click', downloadPDF);
