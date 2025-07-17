// By clicking showing buttons
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const navButtons = document.querySelector(".nav-buttons");

  toggleBtn.addEventListener("click", () => {
    navButtons.classList.toggle("show");
  });
});

// Scroll to top smoothly
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.onscroll = () => {
  document.getElementById("topBtn").style.display =
    window.scrollY > 300 ? "block" : "none";
};
