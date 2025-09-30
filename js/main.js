// === THEME SWITCHER ===
const themeSelect = document.getElementById("theme-select") || document.getElementById("theme-switcher");
const body = document.body;

// simpan preferensi tema di localStorage
if (themeSelect) {
  // set default sesuai penyimpanan terakhir
  const savedTheme = localStorage.getItem("theme") || "light";
  body.classList.toggle("dark-theme", savedTheme === "dark");
  themeSelect.value = savedTheme;

  // event listener
  themeSelect.addEventListener("change", () => {
    const selectedTheme = themeSelect.value;
    if (selectedTheme === "dark") {
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  });
}

// === SOCIAL MEDIA LINKS ===
const socialLinks = {
  github: "https://github.com/usernamekamu",
  linkedin: "https://www.linkedin.com/in/usernamekamu/",
  instagram: "https://www.instagram.com/usernamekamu/",
  whatsapp: "https://wa.me/628xxxxxxx"
};

// terapkan link ke semua elemen dengan atribut data-type
document.querySelectorAll(".social-link").forEach(el => {
  const type = el.getAttribute("data-type");
  if (socialLinks[type]) {
    el.setAttribute("href", socialLinks[type]);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  }
});
