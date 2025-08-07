const timelineData = [
  {
    title: "Post Doctoral Research Associate",
    organization: "Texas Tech University",
    period: "July 2024 - Present",
    points: [
      "Developed an ETL pipeline that improved text extraction from unstructured data by 40% using deep learning techniques, enabling faster data processing for research project",
      "Created interactive antimicrobial resistance (AMR) dashboards that reduced data analysis time by 30% and provided real-time insights to stakeholders",
      "Implemented time-series prediction models that achieved 85% accuracy in forecasting resistance patterns, helping medical professionals make more informed decisions. Technologies used: React, Django, REST APIs, SQL, Time-series forecasting, Deep learning"
    ],
    techTags: []
  },
  {
    title: "Research Assistant",
    organization: "Texas Tech University",
    period: "February 2022 - May 2024",
    points: [
      "Conduct research on Human Factors in Cybersecurity and Social Engineering Attacks utilizing Natural Language Processing and Deep Learning techniques.",
      "Created a prototype leveraging cutting-edge technologies such as Large Language Model, Deep Learning."
    ],
    techTags: ["TensorFlow", "AWS", "Transformers", "PyTorch"]
  },
  {
    title: "Entrepreneur Lead",
    organization: "National Science Foundation's Innovation Corps (I-Corps)",
    period: "June 2022 - July 2022",
    points: [
      "Conducted 100+ interviews with cybersecurity professionals, CEOs, CTOs, and insurance professionals.",
      "Evaluated 30+ hypotheses on services related to social engineering attack prevention.",
      "Led the seven-week intensive phase, coordinating team efforts and business model development."
    ],
    techTags: []
  },
  {
    title: "Software Intern",
    organization: "Nemalife, Inc",
    period: "June 2021 - August 2022",
    points: [
      "Developed CI/CD pipeline using Microk8s Kubernetes in BareMetal Linux server.",
      "Implemented worm detection model using RetianNet50FPN with PyTorch Lightning (0.047% loss).",
      "Created multi-threaded digit detection interface using EasyOCR and FastAPI."
    ],
    techTags: ["Dropbox API", "AWS EC2", "Docker", "Kubernetes", "PyTorch"]
  }
];

  const container = document.querySelector(".timeline");

  timelineData.forEach(entry => {
    const article = document.createElement("article");
    article.className = "timeline-entry";

    const header = `
      <div class="timeline-header">
        <h3>${entry.title}</h3>
        <div class="timeline-meta">
          <span class="organization">${entry.organization}</span>
          <span class="period">${entry.period}</span>
        </div>
      </div>
    `;

    const bulletPoints = entry.points.map(point => `<li>${point}</li>`).join("");
    const techTags = entry.techTags.length > 0
      ? `<div class="tech-tags">${entry.techTags.map(tag => `<span>${tag}</span>`).join("")}</div>`
      : "";

    const content = `
      <div class="timeline-content">
        <ul>
          ${bulletPoints}
        </ul>
        ${techTags}
      </div>
    `;

    article.innerHTML = header + content;
    container.appendChild(article);
  });
