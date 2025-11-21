document.addEventListener("DOMContentLoaded", () => {
  const dot = document.querySelector(".cursor-dot");
  const outline = document.querySelector(".cursor-outline");

  if (!dot || !outline) return;

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let hasMoved = false; // becomes true after first mousemove

  // First mouse move: snap cursor to position and show it
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!hasMoved) {
      hasMoved = true;

      // place immediately at cursor
      cursorX = mouseX;
      cursorY = mouseY;

      dot.style.left = `${cursorX}px`;
      dot.style.top = `${cursorY}px`;
      outline.style.left = `${cursorX}px`;
      outline.style.top = `${cursorY}px`;

      // show after positions are set
      dot.style.display = "block";
      outline.style.display = "block";

      // slight delay to avoid any weird transition from (0,0)
      requestAnimationFrame(() => {
        dot.style.opacity = "1";
        outline.style.opacity = "1";
      });
    }
  });

  // Animation loop: trailing effect
  const animate = () => {
    if (hasMoved) {
      const speed = 0.18; // 0.1 = more lag, 0.3 = snappier

      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      const x = cursorX;
      const y = cursorY;

      // dot + outline stay concentric
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      outline.style.left = `${x}px`;
      outline.style.top = `${y}px`;
    }

    requestAnimationFrame(animate);
  };

  animate();

  // Hover effect on interactive elements
  const interactiveSelectors = "a, button, [role='button'], input, textarea";

  document.querySelectorAll(interactiveSelectors).forEach((el) => {
    el.addEventListener("mouseenter", () => {
      outline.classList.add("cursor-hover");
    });

    el.addEventListener("mouseleave", () => {
      outline.classList.remove("cursor-hover");
    });
  });

  // Hide custom cursor on touch devices
  const isTouch =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  if (isTouch) {
    dot.style.display = "none";
    outline.style.display = "none";
    document.body.style.cursor = "auto";
  }
});
