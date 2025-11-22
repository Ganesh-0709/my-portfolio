// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Simple dark / light mode toggle
const btn = document.getElementById("theme-toggle");
btn?.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }
});

// Light mode styles by toggling class
const style = document.createElement("style");
style.innerHTML = `
  body.light {
    background: #f3f4f6;
    color: #111827;
  }
  body.light .navbar {
    background: rgba(249, 250, 251, 0.9);
    border-bottom-color: #e5e7eb;
  }
  body.light .section-alt {
    background: #f9fafb;
  }
  body.light .section-title::after {
    background: linear-gradient(90deg, #4f46e5, transparent);
  }
  body.light .footer {
    background: #f9fafb;
    border-top-color: #e5e7eb;
  }
  body.light .skill-card,
  body.light .project-card {
    background: #ffffff;
    border-color: #e5e7eb;
    box-shadow: 0 10px 30px rgba(148, 163, 184, 0.4);
  }
`;
document.head.appendChild(style);
