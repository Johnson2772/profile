/*
==========================================================================
  Jhonatan Posada - Portfolio Scripts
  Polished, modern, modular JavaScript
==========================================================================
*/

// --- 1. Responsive Navigation ---
function toggleResponsive() {
  const nav = document.getElementById("topNav");
  const toggleBtn = document.querySelector(".icon");
  if (!nav) return;

  const isOpen = nav.classList.toggle("responsive");
  if (toggleBtn) {
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  }
}

// Close mobile menu when a navigation link is clicked
document.addEventListener("DOMContentLoaded", () => {
  const topNav = document.getElementById("topNav");
  const navLinks = document.querySelectorAll("#topNav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (topNav && topNav.classList.contains("responsive") && !link.classList.contains("icon")) {
        topNav.classList.remove("responsive");
        const toggleBtn = document.querySelector(".icon");
        if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
      }
    });
  });
});


// --- 2. Dynamic Tabbed Page Navigation ---
function openPage(pageName, element) {
  if (!pageName) return;

  // Clean the pageName (strip any leading hash)
  pageName = pageName.replace("#", "");

  const tabcontents = document.querySelectorAll(".tabcontent");
  const tablinks = document.querySelectorAll(".tablink");

  // Hide all tab contents
  tabcontents.forEach((content) => {
    content.style.display = "none";
  });

  // Remove active class from all navigation links
  tablinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Display target tab header
  const targetHeader = document.getElementById(pageName);
  if (targetHeader && targetHeader.classList.contains("tabcontent")) {
    targetHeader.style.display = "block";
  }

  // Display target tab article(s)
  const targetArticles = document.querySelectorAll(`article.${pageName}.tabcontent`);
  targetArticles.forEach((article) => {
    article.style.display = "block";
  });

  // Highlight active link
  if (element && element.classList.contains("tablink")) {
    element.classList.add("active");
  } else {
    const matchingLink = document.querySelector(`.tablink[href="#${pageName}"]`);
    if (matchingLink) {
      matchingLink.classList.add("active");
    }
  }

  // Update URL hash without causing a page jump
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, "", `#${pageName}`);
  }
}

// Initialize tabs based on URL hash or default to 'home'
window.addEventListener("DOMContentLoaded", () => {
  const validTabs = ["home", "projects", "news", "schedule", "about", "contact"];
  const currentHash = window.location.hash.replace("#", "").toLowerCase();
  const initialTab = validTabs.includes(currentHash) ? currentHash : "home";
  const initialLink = document.querySelector(`.tablink[href="#${initialTab}"]`);

  openPage(initialTab, initialLink);
});

// Support browser back/forward buttons
window.addEventListener("hashchange", () => {
  const hash = window.location.hash.replace("#", "").toLowerCase();
  const validTabs = ["home", "projects", "news", "schedule", "about", "contact"];
  if (validTabs.includes(hash)) {
    const link = document.querySelector(`.tablink[href="#${hash}"]`);
    openPage(hash, link);
  }
});


// --- 3. Dynamic New Year's Countdown Timer ---
function initCountdown() {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const countdownContainer = document.getElementById("countdown");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    // Countdown to January 1st of the upcoming year
    const targetDate = new Date(currentYear + 1, 0, 1, 0, 0, 0).getTime();
    const distance = targetDate - now.getTime();

    if (distance <= 0) {
      if (countdownContainer) {
        countdownContainer.innerHTML = '<span class="countdown-expired">🎉 Happy New Year! 🎉</span>';
      }
      return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, "0");

    daysEl.textContent = `${d}d`;
    hoursEl.textContent = `${pad(h)}h`;
    minutesEl.textContent = `${pad(m)}m`;
    secondsEl.textContent = `${pad(s)}s`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}


// --- 4. Interactive Slideshows ---
const slideIndex = [1, 1];
const slideId = ["mySlides1", "mySlides2"];

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  const slides = document.getElementsByClassName(slideId[no]);
  if (!slides || slides.length === 0) return;

  if (n > slides.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex[no] - 1].style.display = "block";
}


// --- 5. Automatic Carousel Slideshow ---
let carouselIndex = 0;
let carouselTimer = null;

function carousel() {
  const slides = document.getElementsByClassName("mySlides");
  if (!slides || slides.length === 0) return;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  carouselIndex++;
  if (carouselIndex > slides.length) {
    carouselIndex = 1;
  }

  slides[carouselIndex - 1].style.display = "block";
  carouselTimer = setTimeout(carousel, 3500);
}


// --- 6. Scroll Progress Bar (Cross-Browser Fallback) ---
function initScrollProgress() {
  const progressBar = document.getElementById("scroll-progress");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) : 0;
    progressBar.style.transform = `scaleX(${progress})`;
  }, { passive: true });
}


// --- 7. Search Bar Feature ---
function initSearchBar() {
  const searchInput = document.querySelector(".search-bar input[type='search']");
  const searchForm = document.querySelector(".search-bar");

  if (!searchInput) return;

  function handleSearch(e) {
    if (e) e.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;

    const sections = ["home", "projects", "news", "schedule", "about", "contact"];
    let matchFound = false;

    for (const sec of sections) {
      const el = document.querySelector(`article.${sec}`);
      if (el && el.textContent.toLowerCase().includes(query)) {
        openPage(sec);
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        showNotification(`Found match in "${sec.charAt(0).toUpperCase() + sec.slice(1)}" tab!`);
        matchFound = true;
        break;
      }
    }

    if (!matchFound) {
      showNotification(`No direct matches found for "${query}".`);
    }
  }

  if (searchForm) {
    searchForm.addEventListener("submit", handleSearch);
  }

  const goBtn = searchForm ? searchForm.querySelector("button") : null;
  if (goBtn) {
    goBtn.addEventListener("click", handleSearch);
  }
}


// --- 8. Contact Form Handler & Toast Notification ---
function showNotification(message) {
  let toast = document.getElementById("site-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "site-toast";
    toast.className = "toast-message";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

function initContactForm() {
  const form = document.querySelector("article.contact form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const nameInput = document.getElementById("name");
    const userName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "Friend";

    showNotification(`Thank you, ${userName}! Your message has been sent successfully.`);
    form.reset();
  });
}


// --- 9. Initializing all modules on DOM ready ---
document.addEventListener("DOMContentLoaded", () => {
  initCountdown();
  showSlides(1, 0);
  showSlides(1, 1);
  carousel();
  initScrollProgress();
  initSearchBar();
  initContactForm();

  // Set today's date as default in contact form
  const dateInput = document.getElementById("date");
  if (dateInput && !dateInput.value) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.value = today;
  }
});