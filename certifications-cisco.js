// Modifie ce tableau pour mettre a jour facilement tes certifications Cisco.
const certifications = [
  {
    title: "CCNA",
    description:
      "Certification reseau Cisco portant sur les fondamentaux d'administration, de connectivite IP, de commutation, de routage et de securite de base.",
    date: "Obtention : a renseigner",
    image: "NetworkDefense.png",
    link: "#"
  },
  {
    title: "Introduction to Cybersecurity",
    description:
      "Badge d'introduction aux principes de cybersécurité, aux menaces numeriques, aux bonnes pratiques de defense et aux metiers associes.",
    date: "Obtention : a renseigner",
    image: "Junior Cybersecurity Analyst.png",
    link: "#"
  },
  {
    title: "Networking Basics",
    description:
      "Certification orientee fondamentaux reseau avec notions de topologie, adressage IP, protocoles, equipements et communication entre systemes.",
    date: "Obtention : a renseigner",
    image: createPlaceholderImage("Networking Basics"),
    link: "#"
  },
  {
    title: "Endpoint Security",
    description:
      "Badge centre sur la protection des postes de travail, les controles de securite, les bonnes pratiques de defense et la reduction des risques.",
    date: "Obtention : a renseigner",
    image: createPlaceholderImage("Endpoint Security"),
    link: "#"
  }
];

const certificationsGrid = document.getElementById("certifications-grid");

function createPlaceholderImage(label) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" role="img" aria-label="${label}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#123a57" />
          <stop offset="100%" stop-color="#4ac7ff" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" rx="40" fill="url(#bg)" />
      <circle cx="660" cy="120" r="72" fill="rgba(255,255,255,0.12)" />
      <circle cx="150" cy="360" r="110" fill="rgba(255,255,255,0.08)" />
      <path d="M120 250h280M120 300h360M120 350h220" stroke="rgba(255,255,255,0.24)" stroke-width="16" stroke-linecap="round" />
      <text x="120" y="170" fill="#f4f8fc" font-size="44" font-family="Arial, sans-serif" font-weight="700">${label}</text>
      <text x="120" y="410" fill="rgba(244,248,252,0.85)" font-size="26" font-family="Arial, sans-serif">Image placeholder remplacable</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createCertificationCard(certification) {
  const card = document.createElement("article");
  card.className = "certification-card reveal";

  card.innerHTML = `
    <div class="card-image-wrap">
      <img
        class="card-image"
        src="${certification.image}"
        alt="Visuel de la certification ${certification.title}"
        loading="lazy"
      >
    </div>
    <div class="card-content">
      <p class="card-date">${certification.date}</p>
      <h3>${certification.title}</h3>
      <p class="card-description">${certification.description}</p>
      <a
        class="card-link"
        href="${certification.link}"
        target="_blank"
        rel="noreferrer"
      >
        Voir la certification
      </a>
    </div>
  `;

  return card;
}

function renderCertifications() {
  if (!certificationsGrid) {
    return;
  }

  certifications.forEach((certification) => {
    certificationsGrid.appendChild(createCertificationCard(certification));
  });
}

function initRevealAnimation() {
  const revealElements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16
    }
  );

  revealElements.forEach((element) => observer.observe(element));
}

renderCertifications();
initRevealAnimation();
