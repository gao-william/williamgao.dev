const root = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("william-portfolio-theme");

// Dark is always the first-visit default. Only an explicit choice overrides it.
if (savedTheme === "light" || savedTheme === "dark") {
  root.dataset.theme = savedTheme;
}

function updateThemeControl() {
  const darkModeIsOn = root.dataset.theme === "dark";
  themeToggle.textContent = darkModeIsOn ? "Light" : "Dark";
  themeToggle.setAttribute(
    "aria-label",
    darkModeIsOn ? "Switch to light mode" : "Switch to dark mode",
  );
}

themeToggle.addEventListener("click", () => {
  const newTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = newTheme;
  localStorage.setItem("william-portfolio-theme", newTheme);
  updateThemeControl();
});

// Keep project pages in display order. Adding an entry enables the appropriate
// previous/next link on neighboring project pages without showing dead buttons.
const projectPages = [
  {
    slug: "detection-engineering-ir-homelab",
    title: "Detection engineering homelab",
    href: "detection-engineering-ir-homelab.html",
  },
  {
    slug: "systembc-malware-analysis",
    title: "SystemBC malware analysis",
    href: "systembc-malware-analysis.html",
  },
  {
    slug: "stack-buffer-overflow",
    title: "Stack-based buffer overflow",
    href: "stack-buffer-overflow.html",
  },
  {
    slug: "file-metadata-ledger",
    title: "File metadata ledger CLI",
    href: "file-metadata-ledger.html",
  },
  {
    slug: "windows-domain-automation",
    title: "Windows domain services",
    href: "windows-domain-automation.html",
  },
  {
    slug: "systems-security-scripting",
    title: "Systems & security scripting",
    href: "systems-security-scripting.html",
  },
  {
    slug: "vulnerability-assessment",
    title: "Brick Wall Cyber",
    href: "vulnerability-assessment.html",
  },
];

const projectNavigation = document.querySelector("[data-project-pagination]");
const currentProject = document.body.dataset.project;

if (projectNavigation && currentProject) {
  const currentIndex = projectPages.findIndex((project) => project.slug === currentProject);
  const previousProject = projectPages[currentIndex - 1];
  const nextProject = projectPages[currentIndex + 1];

  if (previousProject) {
    const previousLink = document.createElement("a");
    previousLink.href = previousProject.href;
    previousLink.className = "previous";
    previousLink.textContent = `← ${previousProject.title}`;
    previousLink.setAttribute("aria-label", `Previous project: ${previousProject.title}`);
    projectNavigation.append(previousLink);
  }

  if (nextProject) {
    const nextLink = document.createElement("a");
    nextLink.href = nextProject.href;
    nextLink.className = "next";
    nextLink.textContent = `${nextProject.title} →`;
    nextLink.setAttribute("aria-label", `Next project: ${nextProject.title}`);
    projectNavigation.append(nextLink);
  }
}

updateThemeControl();
