document.addEventListener("DOMContentLoaded", function () {

  // Audio play
  window.playAudio = function(id) {
    document.querySelectorAll("audio").forEach(a => {
      a.pause();
      a.currentTime = 0;
    });

    let target = document.getElementById(id);
    if (target) target.play();
  };

  let file = window.location.pathname.split("/").pop();
  let match = file.match(/page0*(\d+)\.html/);
  if (!match) return;

  let pageNum = parseInt(match[1], 10);
  let padNum = String(pageNum).padStart(4, '0');

  // Title
  let titleEl = document.getElementById('page-title');
  if (titleEl) {
    titleEl.textContent = `EPS Book 1 - (Page ${pageNum})`;
  }
  document.title = `EPS Book 1 - (Page ${pageNum})`;

  // Image
  let img = document.getElementById('page-img');
  if (img) {
    img.src = `images/book1-${padNum}.jpeg`;

    // ✅ Wait for image to load before scaling
    img.onload = updateScale;
  }

  // Navigation
  let prev = document.getElementById('prev');
  let next = document.getElementById('next');

  if (prev) {
    if (pageNum > 1) {
      prev.href = `page${String(pageNum - 1).padStart(4,'0')}.html`;
    } else {
      prev.style.display = 'none';
    }
  }

  if (next) {
    next.href = `page${String(pageNum + 1).padStart(4,'0')}.html`;
  }

  // Keyboard navigation
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight" && next) next.click();
    if (e.key === "ArrowLeft" && prev) prev.click();
  });

  // ✅ SCALE FUNCTION
  function updateScale() {
    let container = document.querySelector(".container");
    let img = document.getElementById("page-img");

    if (!img || !container) return;

    let scale = img.clientWidth / 700; // change if your original image width is different
    container.style.setProperty("--scale", scale);
  }

  // Resize trigger
  window.addEventListener("resize", updateScale);

});