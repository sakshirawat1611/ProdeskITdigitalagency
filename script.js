const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  // Keep toggle state synced
  if (document.body.classList.contains("dark")) {
    toggle.checked = true;
  } else {
    toggle.checked = false;
  }
});