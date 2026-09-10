// ============================================================
// OJAS MICROGREENS — SITE CONFIGURATION
// Edit this section to update your business details
// ============================================================
const CONFIG = {
  BUSINESS_NAME: "Ojas Microgreens",
  TAGLINE: "Tiny Greens. Mighty Benefits.",
  WHATSAPP_NUMBER: "91XXXXXXXXXX",           // ← Replace with your WhatsApp number (with country code, no + or spaces)
  PHONE_NUMBER: "YOUR_PHONE_NUMBER",          // ← Replace with your phone number
  INSTAGRAM_URL: "https://instagram.com/YOUR_HANDLE", // ← Replace with your Instagram URL
  GOOGLE_MAPS_URL: "https://maps.google.com/?q=YOUR_ADDRESS", // ← Replace with your Google Maps link
  DELIVERY_RADIUS_KM: 8,
  CITY: "Bengaluru, Karnataka",

  // WhatsApp pre-filled message
  WA_MESSAGE: "Hello Ojas Microgreens! I'd like to order microgreens. Please share today's availability and prices. 🌱",

  // Product prices — update these when ready
  PRICES: {
    sunflower:     { "50g": "₹XX", "100g": "₹XX" },
    radish:        { "50g": "₹XX", "100g": "₹XX" },
    broccoli:      { "50g": "₹XX", "100g": "₹XX" },
    peaShoots:     { "50g": "₹XX", "100g": "₹XX" },
    mixed:         { "50g": "₹XX", "100g": "₹XX" },
    purpleRadish:  { "50g": "₹XX", "100g": "₹XX" },
    mustard:       { "50g": "₹XX", "100g": "₹XX" },
    fenugreek:     { "50g": "₹XX", "100g": "₹XX" },
    beetroot:      { "50g": "₹XX", "100g": "₹XX" },
    wheatgrass:    { "50g": "₹XX", "100g": "₹XX" },
  }
};
// ============================================================
// END OF CONFIGURATION — Do not edit below unless you know JS
// ============================================================

function waLink(customMsg) {
  const msg = customMsg || CONFIG.WA_MESSAGE;
  return `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function initWhatsAppButtons() {
  document.querySelectorAll("[data-wa]").forEach(el => {
    const product = el.dataset.wa;
    let msg = CONFIG.WA_MESSAGE;
    if (product && product !== "general") {
      msg = `Hello Ojas Microgreens! I'd like to order *${product}*. Please share availability and pricing. 🌱`;
    }
    el.href = waLink(msg);
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });

  document.querySelectorAll("[data-phone]").forEach(el => {
    el.href = `tel:${CONFIG.PHONE_NUMBER}`;
  });

  document.querySelectorAll("[data-maps]").forEach(el => {
    el.href = CONFIG.GOOGLE_MAPS_URL;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });

  document.querySelectorAll("[data-instagram]").forEach(el => {
    el.href = CONFIG.INSTAGRAM_URL;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });
}

// Navbar scroll behaviour
function initNavbar() {
  const nav = document.getElementById("navbar");
  if (!nav) return;
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  });

  // Hamburger
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", menu.classList.contains("open"));
    });
    // Close on link click
    menu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => menu.classList.remove("open"));
    });
  }
}

// Intersection observer for subtle reveal
function initReveal() {
  if (!("IntersectionObserver" in window)) return;
  const els = document.querySelectorAll(".reveal");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initWhatsAppButtons();
  initNavbar();
  initReveal();
  initSmoothScroll();
});
