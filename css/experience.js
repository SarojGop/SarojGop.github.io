// ============================================
// Experience & Education Timeline
// ============================================

var experienceData = [
  {
    title: "Postdoctoral Research Associate",
    organization: "Texas Tech University",
    period: "July 2024 - Present",
    points: [
      "Developed an ETL pipeline that improved text extraction from unstructured data by 40% using deep learning techniques, enabling faster data processing for research projects",
      "Created interactive antimicrobial resistance (AMR) dashboards that reduced data analysis time by 30% and provided real-time insights to stakeholders",
      "Implemented time-series prediction models that achieved 85% accuracy in forecasting resistance patterns, helping medical professionals make more informed decisions",
      "Technologies: React, Django, REST APIs, SQL, Time-series forecasting, Deep Learning"
    ],
    techTags: ["Python", "React", "Django", "TensorFlow", "SQL"]
  },
  {
    title: "Research Assistant",
    organization: "Texas Tech University",
    period: "February 2022 - May 2024",
    points: [
      "Conducted research on human factors in cybersecurity and social engineering attacks utilizing Natural Language Processing and Deep Learning techniques",
      "Created prototypes leveraging cutting-edge technologies such as Large Language Models and Deep Learning for phishing detection and text analysis",
      "Published multiple papers in top-tier venues including IEEE Access, IEEE COMPSAC, and ScienceDirect"
    ],
    techTags: ["TensorFlow", "PyTorch", "Transformers", "AWS", "NLP"]
  },
  {
    title: "Entrepreneur Lead",
    organization: "NSF Innovation Corps (I-Corps)",
    period: "June 2022 - July 2022",
    points: [
      "Conducted 100+ interviews with cybersecurity professionals, CEOs, CTOs, and insurance professionals",
      "Evaluated 30+ hypotheses on services related to social engineering attack prevention",
      "Led the seven-week intensive phase, coordinating team efforts and business model development"
    ],
    techTags: []
  },
  {
    title: "Software Intern",
    organization: "Nemalife, Inc",
    period: "June 2021 - August 2022",
    points: [
      "Developed CI/CD pipeline using Microk8s Kubernetes on bare-metal Linux servers",
      "Implemented worm detection model using RetinaNet50FPN with PyTorch Lightning (0.047% loss)",
      "Created multi-threaded digit detection interface using EasyOCR and FastAPI"
    ],
    techTags: ["Docker", "Kubernetes", "PyTorch", "FastAPI", "AWS EC2"]
  }
];

var educationData = [
  {
    title: "PhD in Computer Science",
    organization: "Texas Tech University",
    period: "2020 - 2024",
    points: [
      "Dissertation: Deep learning approaches for time series analysis, cybersecurity, and NLP",
      "Advisor: Dr. Akbar Siami Namin",
      "Research areas: Deep Learning, NLP/LLMs, Cybersecurity, IoT, Time Series Analysis"
    ],
    techTags: []
  },
  {
    title: "MS in Software Engineering",
    organization: "Texas Tech University",
    period: "2019 - 2021",
    points: [
      "Focused on software development methodologies, machine learning, and security",
      "Thesis work on hybrid password-based authentication mechanisms"
    ],
    techTags: []
  }
];

function renderTimeline(data, containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  data.forEach(function (entry) {
    var article = document.createElement('article');
    article.className = 'timeline-entry fade-in';

    var pointsHtml = entry.points
      .map(function (point) { return '<li>' + point + '</li>'; })
      .join('');

    var techTagsHtml = '';
    if (entry.techTags && entry.techTags.length > 0) {
      techTagsHtml = '<div class="tech-tags">' +
        entry.techTags.map(function (tag) { return '<span>' + tag + '</span>'; }).join('') +
        '</div>';
    }

    article.innerHTML =
      '<div class="timeline-header">' +
        '<h3>' + entry.title + '</h3>' +
        '<div class="timeline-meta">' +
          '<span class="organization">' + entry.organization + '</span>' +
          '<span class="period">' + entry.period + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="timeline-content">' +
        '<ul>' + pointsHtml + '</ul>' +
        techTagsHtml +
      '</div>';

    container.appendChild(article);
  });
}

// Initialize
renderTimeline(experienceData, 'experience-timeline');
renderTimeline(educationData, 'education-timeline');
