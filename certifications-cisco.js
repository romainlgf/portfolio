// Modifie ce tableau pour mettre a jour facilement tes certifications Cisco.
const certifications = [
  {
    title: "Network Defense",
    description:
      "Certification reseau Cisco portant sur les fondamentaux d'administration, de connectivite IP, de commutation, de routage et de securite de base.",
    date: "Obtention : a renseigner",
    image: "NetworkDefense.png",
    link: "certification-viewer.html?file=NetworkDefense.pdf&image=NetworkDefense-preview.png&title=Network%20Defense"
  },
  {
    title: "Junior Cybersecurity Analyst Career Path",
    description:
      "Badge d'introduction aux principes de cybersécurité, aux menaces numeriques, aux bonnes pratiques de defense et aux metiers associes.",
    date: "Obtention : a renseigner",
    image: "Junior Cybersecurity Analyst.png",
    link: "certification-viewer.html?file=JuniorCybersecurityAnalyst.pdf&image=JuniorCybersecurityAnalyst-preview.png&title=Junior%20Cybersecurity%20Analyst%20Career%20Path"
  },
  {
    title: "Ethical Hacker",
    description:
      "Certification orientee cybersécurité offensive, identification des vulnerabilites, analyse des menaces et bonnes pratiques de securisation des systemes.",
    date: "Obtention : a renseigner",
    image: "ethical-hacker.png",
    link: "certification-viewer.html?file=EthicalHacker.pdf&image=EthicalHacker-preview.png&title=Ethical%20Hacker"
  }
];

const certificationsGrid = document.getElementById("certifications-grid");

function createCertificationCard(certification) {
  const card = document.createElement("article");
  card.className = "certification-card reveal";
  const hasLink = Boolean(certification.link && certification.link !== "#");
  const actionMarkup = hasLink
    ? `
      <a
        class="card-link"
        href="${certification.link}"
      >
        Voir la certification
      </a>
    `
    : `
      <span class="card-link card-link-disabled" aria-disabled="true">
        PDF indisponible
      </span>
    `;

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
      ${actionMarkup}
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
