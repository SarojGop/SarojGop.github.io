// ============================================
// Projects
// ============================================

var projectsData = [
  {
    title: "Stock Prediction ML Algorithm",
    description: "Implemented ARIMA and RNN with LSTM using Keras in R, achieving 10% error rate in stock price predictions. Features an interactive Shiny dashboard for visualization.",
    github: "https://github.com/SarojGop/Stock-Prediction-Machine-Learning-Algorithm-",
    techTags: ["R", "Shiny", "Keras", "TensorFlow", "LSTM"],
    paper: null,
    icon: "fas fa-chart-line"
  },
  {
    title: "HyPA: Hybrid Password Authentication",
    description: "Novel authentication system combining image hash values with text passwords, achieving 45% improved security over traditional methods. Published in Springer FICC 2021.",
    github: "https://github.com/SarojGop/Hybrid-Password-Mechanism",
    techTags: ["Swift", "Firebase", "XCode", "Cryptography"],
    paper: "https://link.springer.com/chapter/10.1007/978-3-030-73100-7_47",
    icon: "fas fa-lock"
  }
];

function renderProjects(data) {
  var container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = '';

  data.forEach(function (project) {
    var article = document.createElement('article');
    article.className = 'project-card fade-in';

    var titleHtml = project.github
      ? '<a href="' + project.github + '" target="_blank" rel="noopener noreferrer">' + project.title + '</a>'
      : project.title;

    var iconHtml = project.icon
      ? '<i class="' + project.icon + ' project-icon"></i>'
      : '';

    var techTagsHtml = '';
    if (project.techTags && project.techTags.length > 0) {
      techTagsHtml = '<div class="tech-tags">' +
        project.techTags.map(function (tag) { return '<span>' + tag + '</span>'; }).join('') +
        '</div>';
    }

    var actionsHtml = '<div class="project-actions">';
    if (project.github) {
      actionsHtml += '<a href="' + project.github + '" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> Code</a>';
    }
    if (project.paper) {
      actionsHtml += '<a href="' + project.paper + '" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-alt"></i> Paper</a>';
    }
    actionsHtml += '</div>';

    article.innerHTML =
      '<div class="project-header">' +
        '<h3>' + titleHtml + '</h3>' +
        iconHtml +
      '</div>' +
      '<p>' + project.description + '</p>' +
      techTagsHtml +
      actionsHtml;

    container.appendChild(article);
  });
}

// Initialize
renderProjects(projectsData);
