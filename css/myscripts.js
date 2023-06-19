

function refreshPage() {
    location.reload();
}

//for sections
function showSection(sectionId) {


    // Get all section elements
    var sections = document.getElementsByClassName("section");

    // Hide all sections
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove("active");
    }
    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add("active");
    } else {
        var welcomeSection = document.getElementById("welcome");
        welcomeSection.classList.add("active");
    }

}

function generateEmail() {
    var emailAddress = "sarojDOTgopaliATttuDOTedu".replace(/DOT/g, ".").replace(/AT/g, "@");
    parent.location = "mailto:" + emailAddress;
  }

