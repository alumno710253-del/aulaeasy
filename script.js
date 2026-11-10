// AulaEasy — interacciones de la página
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menú");
    });
  });
}

// Al pulsar "Solicitar información", se selecciona el curso en el formulario.
document.querySelectorAll("[data-course]").forEach((link) => {
  link.addEventListener("click", () => {
    const interest = document.querySelector("#interest");
    if (interest) interest.value = link.dataset.course;
  });
});

// Este formulario es una demostración local: no transmite ni guarda datos personales.
const form = document.querySelector("#enrollment-form");
const feedback = document.querySelector("#form-feedback");

if (form && feedback) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const firstName = String(formData.get("name") || "").trim().split(/\s+/)[0];
    feedback.textContent = `¡Gracias, ${firstName}! La solicitud de demostración está preparada. Recuerda que este formulario todavía no envía datos.`;
    form.reset();
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
