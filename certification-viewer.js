const viewerTitle = document.getElementById("viewer-title");
const certificatePreview = document.getElementById("certificate-preview");
const pdfLink = document.getElementById("pdf-link");

const params = new URLSearchParams(window.location.search);
const file = params.get("file");
const image = params.get("image");
const title = params.get("title");

const certificateCatalog = {
  "NetworkDefense.pdf": {
    title: "Network Defense",
    image: "NetworkDefense-preview.png"
  },
  "JuniorCybersecurityAnalyst.pdf": {
    title: "Junior Cybersecurity Analyst Career Path",
    image: "JuniorCybersecurityAnalyst-preview.png"
  }
};

const certificateData = certificateCatalog[file] || {};
const resolvedTitle = title || certificateData.title || "Certification Cisco";
const resolvedImage = image || certificateData.image || "";

if (viewerTitle) {
  viewerTitle.textContent = resolvedTitle;
  document.title = `${resolvedTitle} | Romain LE GOFF`;
}

if (certificatePreview) {
  if (resolvedImage) {
    certificatePreview.src = resolvedImage;
    certificatePreview.alt = `Apercu du certificat ${resolvedTitle}`;
  } else {
    certificatePreview.alt = "Apercu du certificat indisponible";
  }
}

if (pdfLink) {
  if (file) {
    pdfLink.href = file;
  } else {
    pdfLink.removeAttribute("href");
    pdfLink.setAttribute("aria-disabled", "true");
    pdfLink.textContent = "PDF indisponible";
  }
}
