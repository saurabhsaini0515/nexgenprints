const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = [...document.querySelectorAll('.nav-menu a[href^="#"]')];
const sections = [...document.querySelectorAll("main section[id]")];
const revealItems = document.querySelectorAll(".reveal");
const portfolioItems = document.querySelectorAll(".portfolio-item");
const lightbox = document.querySelector(".lightbox");
const lightboxArt = document.querySelector(".lightbox-art");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxClose = document.querySelector(".lightbox-close");

const closeMenu = () => {
  navMenu.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation menu");
  document.body.classList.remove("menu-open");
};

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navMenu.classList.toggle("open", !isOpen);
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
  document.body.classList.toggle("menu-open", !isOpen);
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

window.addEventListener(
  "scroll",
  () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  },
  { passive: true },
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12 },
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index % 4, 3) * 65}ms`;
  revealObserver.observe(item);
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55%", threshold: 0 },
);

sections.forEach((section) => sectionObserver.observe(section));

const openLightbox = (item) => {
  const art = item.querySelector(".project-art").cloneNode(true);
  lightboxArt.replaceChildren(art);
  lightboxTitle.textContent = item.dataset.project;
  lightbox.showModal();
  document.body.classList.add("lightbox-open");
};

const closeLightbox = () => {
  lightbox.close();
  document.body.classList.remove("lightbox-open");
};

portfolioItems.forEach((item) => {
  item.addEventListener("click", () => openLightbox(item));
  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(item);
    }
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
lightbox.addEventListener("close", () => document.body.classList.remove("lightbox-open"));

document.querySelector("#current-year").textContent = new Date().getFullYear();
