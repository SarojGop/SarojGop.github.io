document.addEventListener('DOMContentLoaded', function() {
    // Show the about section by default
    showSection('about');

    // Add active class to the current navigation item
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        setTimeout(() => {
            selectedSection.classList.add('active');
        }, 50);
    }

    // Update URL hash without scrolling
    history.pushState(null, null, `#${sectionId}`);
}

function refreshPage() {
    window.location.href = window.location.pathname;
}

function generateEmail() {
    const username = 'saroj.gopali';
    const domain = 'ttu.edu';
    const email = `${username}@${domain}`;
    
    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    
    // Select and copy the email
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    
    // Show a tooltip or notification
    alert('Email address copied to clipboard!');
}


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const closeButton = document.querySelector('.close-menu-button');
    
    navLinks.classList.toggle('active');
    
    // Toggle the display of the close button
    if (navLinks.classList.contains('active')) {
        closeButton.style.display = 'block'; // Show close button
    } else {
        closeButton.style.display = 'none'; // Hide close button
    }
}

// function showSection(section) {
//     alert(`Showing ${section} section!`); // Placeholder for section navigation
// }

