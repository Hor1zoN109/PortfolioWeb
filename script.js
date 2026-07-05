const PROJECTS = {
  cubeye: {
    index: "01 / PRODUCT · UI · BRAND",
    title: "Cubeye",
    imageStack: true,
    hero: "./assets/portfolio/cubeye-01-cover.png",
    demoVideo: "./assets/portfolio/cubeye-demo.mp4",
    overview:
      "Cubeye is a monitoring camera and companion mobile experience for additive manufacturing. The spherical joint lets users adjust the camera across two axes while the app surfaces progress, material, temperature and machine status.",
    role:
      "Industrial design, product strategy, brand identity, UI architecture, interface design and 3D visualization.",
    images: [
      "./assets/portfolio/cubeye-01-cover.png",
      "./assets/portfolio/cubeye-02-overview.png",
      "./assets/portfolio/cubeye-03-workflow.png",
      "./assets/portfolio/cubeye-04-color-scheme.png",
      "./assets/portfolio/cubeye-05-structure.png",
      "./assets/portfolio/cubeye-06-typography.png",
      "./assets/portfolio/cubeye-07-ui.png",
      "./assets/portfolio/cubeye-08-render.png",
    ],
  },
  notional: {
    index: "02 / GENERATIVE · AI · WEB",
    title: "Notional",
    imageStack: true,
    hero: "./assets/portfolio/notional-hero.png",
    overview:
      "Notional explores the face as a personal dataset. Measurements are mapped into shape, rotation, stroke and colour parameters, producing a visual pattern that belongs uniquely to each participant.",
    role:
      "Concept development, research, data mapping, visual system design, generative prototyping and web experience.",
    images: [
      "./assets/portfolio/notional-01-cover.png",
      "./assets/portfolio/notional-02-overview.png",
      "./assets/portfolio/notional-03-measurement.png",
      "./assets/portfolio/notional-04-logic.png",
      "./assets/portfolio/notional-05-data-mapping.png",
      "./assets/portfolio/notional-06-production.png",
    ],
  },
  afghanistan: {
    index: "03 / DATA VISUALIZATION",
    title: "Statistics About Combat in Afghanistan",
    imageStack: true,
    hero: "./assets/portfolio/afghanistan-hero.png",
    overview:
      "A circular information graphic that brings multiple dimensions of the Afghanistan conflict into one visual field. Colour, radius, density and direction establish a hierarchy between casualties, military activity and geopolitical context.",
    role:
      "Data research, information architecture, visual encoding, editorial composition and graphic design.",
    images: [
      "./assets/portfolio/afghanistan-01-overview.png",
      "./assets/portfolio/afghanistan-02-poster.png",
    ],
  },
  snail: {
    index: "04 / BRAND · UI",
    title: "Snail Dwelling",
    imageStack: true,
    hero: "./assets/portfolio/snail-01-cover.png",
    overview:
      "Snail Dwelling is a housing platform brand designed around a simple metaphor: a snail carries its home. The identity combines residence and movement into a recognisable modular mark.",
    role:
      "Brand strategy, logo system, visual identity, product UI, application design and campaign mockups.",
    images: [
      "./assets/portfolio/snail-01-cover.png",
      "./assets/portfolio/snail-02-overview.png",
      "./assets/portfolio/snail-03-logo.png",
      "./assets/portfolio/snail-04-application.png",
      "./assets/portfolio/snail-05-style-guide.png",
      "./assets/portfolio/snail-06-marketing.png",
    ],
  },
  breakthrough: {
    index: "EXTENDED / MOBILITY",
    title: "Breakthrough",
    imageStack: true,
    hero: "./assets/portfolio/breakthrough-hero.png",
    overview: "Zeekr concept car design exploration.",
    role: "Industrial design, concept visualization and presentation layout.",
    images: ["./assets/portfolio/breakthrough-hero.png"],
  },
  emomask: {
    index: "EXTENDED / WEARABLE",
    title: "Emo-Mask",
    imageStack: true,
    hero: "./assets/portfolio/emomask-hero.jpg",
    overview: "Emotion-reactive mask concept design.",
    role: "Industrial design, wearable interaction and product visualization.",
    images: ["./assets/portfolio/emomask-hero.jpg"],
  },
  alienwareWalkman: {
    index: "EXTENDED / PRODUCT · 3D",
    title: "Alienware Walkman",
    imageStack: true,
    hero: "./assets/portfolio/alienware-walkman-hero.png",
    overview: "Alienware-inspired portable music player concept.",
    role: "Industrial design, 3D visualization and product presentation.",
    images: [
      "./assets/portfolio/alienware-walkman-detail-01.png",
      "./assets/portfolio/alienware-walkman-detail-02.png",
      "./assets/portfolio/alienware-walkman-detail-03.png",
      "./assets/portfolio/alienware-walkman-detail-04.png",
    ],
  },
  twentyThousandLeagues: {
    index: "EXTENDED / EDITORIAL",
    title: "20,000 Leagues Under the Sea",
    imageStack: true,
    hero: "./assets/portfolio/twenty-thousand-leagues-hero.png",
    overview: "Book cover design inspired by Jules Verne's underwater world.",
    role: "Editorial design, visual composition and atmospheric art direction.",
    images: ["./assets/portfolio/twenty-thousand-leagues-detail.png"],
  },
};

const siteHeader = document.querySelector(".site-header");
const menuToggleButton = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector(".site-nav");
const projectDialog = document.querySelector(".project-dialog");
const dialogContent = document.querySelector(".dialog-content");
const dialogCloseButton = document.querySelector(".dialog-close");
const cursorDot = document.querySelector(".cursor-dot");
const rootElement = document.documentElement;
const supportsFinePointer = matchMedia("(pointer:fine)").matches;

resetScrollPositionOnReload();
initRevealAnimation();
initHeaderState();
initMobileNavigation();
initProjectCards();
initArchiveCards();
initProjectDialog();
initPointerPattern();
initProjectImageTilt();

function resetScrollPositionOnReload() {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  const navigationEntry = performance.getEntriesByType?.("navigation")?.[0];
  const pageWasReloaded =
    navigationEntry?.type === "reload" || performance.navigation?.type === 1;

  if (!pageWasReloaded) return;

  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }

  window.scrollTo(0, 0);
}

function initRevealAnimation() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));
}

function initHeaderState() {
  window.addEventListener(
    "scroll",
    () => siteHeader.classList.toggle("is-scrolled", window.scrollY > 40),
    { passive: true }
  );
}

function initMobileNavigation() {
  const closeNavigation = () => {
    siteNavigation.classList.remove("is-open");
    menuToggleButton.setAttribute("aria-expanded", "false");
    menuToggleButton.querySelector("span").textContent = "MENU";
  };

  menuToggleButton.addEventListener("click", () => {
    const isOpen = siteNavigation.classList.toggle("is-open");
    menuToggleButton.setAttribute("aria-expanded", String(isOpen));
    menuToggleButton.querySelector("span").textContent = isOpen ? "CLOSE" : "MENU";
  });

  siteNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });
}

function initProjectCards() {
  document.querySelectorAll(".project").forEach((card) => {
    const openButton = card.querySelector(".project__open");
    openButton?.addEventListener("click", () => openProject(card.dataset.project));
  });
}

function initArchiveCards() {
  document.querySelectorAll(".archive-card[data-project]").forEach((card) => {
    const openArchiveProject = () => openProject(card.dataset.project);

    card.addEventListener("click", openArchiveProject);
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;

      event.preventDefault();
      openArchiveProject();
    });
  });
}

function initProjectDialog() {
  dialogCloseButton.addEventListener("click", closeProject);

  projectDialog.addEventListener("click", (event) => {
    if (event.target === projectDialog) closeProject();
  });

  projectDialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
  });
}

function openProject(projectKey) {
  const project = PROJECTS[projectKey];
  if (!project) return;

  if (project.imageStack) {
    renderProjectImageStack(project);
  } else {
    renderProjectDetail(project);
  }

  projectDialog.showModal();
  document.body.classList.add("dialog-open");
}

function renderProjectImageStack(project) {
  projectDialog.classList.add("project-dialog--stack");
  dialogContent.innerHTML = `
    <div class="dialog-gallery dialog-gallery--stack" aria-label="${project.title} case study images">
      ${project.images.map((src) => createDialogImage(src, project.title)).join("")}
      ${project.demoVideo ? createProjectVideo(project.demoVideo) : ""}
    </div>
  `;
}

function renderProjectDetail(project) {
  projectDialog.classList.remove("project-dialog--stack");
  dialogContent.innerHTML = `
    <div class="dialog-hero" style="background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url('${project.hero}')">
      <p>${project.index}</p>
      <h2>${project.title}</h2>
    </div>
    <div class="dialog-body">
      <div>
        <h3>Overview</h3>
        <p>${project.overview}</p>
      </div>
      <div>
        <h3>Contribution</h3>
        <p>${project.role}</p>
      </div>
    </div>
    <div class="dialog-gallery">
      ${project.images.map((src) => createDialogImage(src, project.title)).join("")}
    </div>
  `;
}

function createDialogImage(src, title) {
  return `<img src="${src}" alt="${title} case study image" />`;
}

function createProjectVideo(src) {
  return `
    <section class="dialog-video">
      <p class="mono">Demo</p>
      <video src="${src}" controls preload="metadata"></video>
    </section>
  `;
}

function closeProject() {
  projectDialog.close();
  document.body.classList.remove("dialog-open");
}

function initPointerPattern() {
  if (!supportsFinePointer) return;

  let patternIdleTimer;

  window.addEventListener("pointermove", (event) => {
    rootElement.style.setProperty("--pointer-x", `${event.clientX}px`);
    rootElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    rootElement.style.setProperty("--pattern-active", "1");

    cursorDot.style.opacity = "1";
    cursorDot.style.transform = `translate(${event.clientX - 3.5}px, ${event.clientY - 3.5}px)`;

    clearTimeout(patternIdleTimer);
    patternIdleTimer = setTimeout(() => {
      rootElement.style.setProperty("--pattern-active", ".45");
    }, 650);
  });

  window.addEventListener("pointerleave", () => {
    rootElement.style.setProperty("--pattern-active", "0");
    cursorDot.style.opacity = "0";
  });
}

function initProjectImageTilt() {
  if (!supportsFinePointer) return;

  document.querySelectorAll(".project__media").forEach((media) => {
    const image = media.querySelector("img");
    if (!image) return;

    media.addEventListener("pointermove", (event) => {
      const rect = media.getBoundingClientRect();
      const xOffset = (event.clientX - rect.left) / rect.width - 0.5;
      const yOffset = (event.clientY - rect.top) / rect.height - 0.5;

      image.style.transform =
        `scale(1.045) translate(${xOffset * -8}px, ${yOffset * -8}px)`;
    });

    media.addEventListener("pointerleave", () => {
      image.style.transform = "";
    });
  });
}
