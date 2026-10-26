/* ==========================================================
   script.js – how the page BEHAVES (things that move or react)
   ========================================================== */

/* ---- Back-to-top button: hidden near the top, visible after scrolling ---- */
(function () {
  var button = document.getElementById('toTop');

  function update() {
    // Add the "away" class (hides the button) when we are less than 300px down
    button.classList.toggle('away', window.scrollY < 300);
  }

  window.addEventListener('scroll', update, { passive: true });
  update(); // run once when the page loads
})();

/* FLY-TOGGLE SCRIPT START (delete down to FLY-TOGGLE SCRIPT END to remove the toggle) */
(function () {
  var button = document.getElementById('flyToggle');
  var layer = document.getElementById('flyLayer');
  var shapes = ['★', '♥', '✦', '♡', '♥'];
  var colors = ['#FF6FA8', '#C9B6FF', '#FFC94D', '#FF8FB8'];

  // Create 28 stars and hearts with random position, size, colour and speed
  function fill() {
    layer.innerHTML = '';
    for (var i = 0; i < 28; i++) {
      var item = document.createElement('span');
      item.textContent = shapes[Math.floor(Math.random() * shapes.length)];
      item.style.left = Math.random() * 100 + '%';
      item.style.fontSize = (14 + Math.random() * 22) + 'px';
      item.style.color = colors[Math.floor(Math.random() * colors.length)];
      item.style.animationDuration = (10 + Math.random() * 10) + 's';
      item.style.animationDelay = (-Math.random() * 20) + 's';
      layer.appendChild(item);
    }
  }

  // Turn the effect on or off, and remember the choice in the browser
  function setOn(on) {
    button.setAttribute('aria-checked', on ? 'true' : 'false');
    layer.hidden = !on;
    if (on && !layer.children.length) fill();
    try { localStorage.setItem('fly', on ? '1' : '0'); } catch (e) {}
  }

  button.addEventListener('click', function () {
    setOn(button.getAttribute('aria-checked') !== 'true');
  });

  // When the page opens, restore the saved choice (default: off)
  var saved = null;
  try { saved = localStorage.getItem('fly'); } catch (e) {}
  setOn(saved === '1');
})();
/* FLY-TOGGLE SCRIPT END */
