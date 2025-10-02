// Bloqueia zoom com CTRL + Scroll e CTRL + (+/-)
document.addEventListener("wheel", function (e) {
  if (e.ctrlKey) {
    e.preventDefault();
  }
}, { passive: false });

document.addEventListener("keydown", function (e) {
  if ((e.ctrlKey || e.metaKey) && 
      (e.key === "+" || e.key === "-" || e.key === "=")) {
    e.preventDefault();
  }
});

// Bloqueia gesto de pinça (zoom com dois dedos)
document.addEventListener("gesturestart", function (e) {
  e.preventDefault();
});

// Bloqueia zoom por duplo toque
let lastTouchEnd = 0;
document.addEventListener("touchend", function (e) {
  let now = new Date().getTime();
  if (now - lastTouchEnd <= 300) {
    e.preventDefault();
  }
  lastTouchEnd = now;
}, false);
