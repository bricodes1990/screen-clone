// Theme Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Clock
function updateClock() {
  const now = new Date();
  document.getElementById("clockDisplay").textContent =
    now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();
