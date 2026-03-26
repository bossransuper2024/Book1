function playAudio(id) {
  document.querySelectorAll("audio").forEach(a => { a.pause(); a.currentTime = 0; });
  document.getElementById(id).play();
}

// Auto-update page info
(function() {
  let file = window.location.pathname.split("/").pop(); // e.g., page0023.html
  let match = file.match(/page0*(\d+)\.html/);
  if (!match) return;

  let pageNum = parseInt(match[1], 10);
  let padNum = String(pageNum).padStart(4, '0');

  // Update title
  document.getElementById('page-title').textContent = `EPS Book 1 - (Page ${pageNum})`;
  document.title = `EPS Book 1 - (Page ${pageNum})`;

  // Update image
  document.getElementById('page-img').src = `images/book1-${padNum}.jpeg`;

  // Update navigation
  let prev = document.getElementById('prev');
  let next = document.getElementById('next');

  if (pageNum > 1) {
    prev.href = `page${String(pageNum - 1).padStart(4,'0')}.html`;
    prev.style.display = 'inline';
  } else {
    prev.style.display = 'none';
  }

  next.href = `page${String(pageNum + 1).padStart(4,'0')}.html`;
})();