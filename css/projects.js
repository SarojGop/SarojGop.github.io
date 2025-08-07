const projectsData = [
  {
    title: "Stock Price Prediction ML Algorithm",
    description: "Implemented ARIMA and RNN with LSTM using Keras in R, achieving 10% error rate in stock price predictions.",
    github: "https://github.com/SarojGop/Stock-Prediction-Machine-Learning-Algorithm-",
    techTags: ["R", "Shiny", "Keras", "TensorFlow"],
    paper: null
  },
  {
    title: "HyPA: Hybrid Password Authentication",
    description: "Developed a novel authentication system combining image hash values with text passwords, achieving 45% improved security.",
    github: "https://github.com/SarojGop/Hybrid-Password-Mechanism",
    techTags: ["Swift", "Firebase", "XCode"],
    paper: "https://www.researchgate.net/profile/Saroj-Gopali/publication/350832061_HyPA_A_Hybrid_Password-Based_Authentication_Mechanism/links/6258ce2f709c5c2adb7c9643/HyPA-A-Hybrid-Password-Based-Authentication-Mechanism.pdf"
  },
  {
    title: "Big Blue Button App",
    description: "Created a portable alarm system using Raspberry Pi 4 with face detection and recognition capabilities.",
    github: null,
    techTags: ["Python", "OpenCV", "AWS Rekognition", "Android"],
    paper: null
  }
];

  const projectsContainer = document.querySelector(".projects-grid");

  projectsData.forEach(project => {
    const article = document.createElement("article");
    article.className = "project-card";

    const hasGithub = project.github
      ? `<a href="${project.github}" target="_blank">${project.title}</a> <i class="fab fa-github"></i>`
      : project.title;

    const header = `
      <div class="project-header">
        <h3>${hasGithub}</h3>
      </div>
    `;

    const description = `<p>${project.description}</p>`;

    const techTags = project.techTags && project.techTags.length > 0
      ? `<div class="tech-tags">${project.techTags.map(tag => `<span>${tag}</span>`).join("")}</div>`
      : "";

    const paperLink = project.paper
      ? `<a class="paper-link" href="${project.paper}" target="_blank">View Research Paper</a>`
      : "";

    article.innerHTML = header + description + techTags + paperLink;
    projectsContainer.appendChild(article);
  });
