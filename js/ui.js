// ui.js
export function initAccordion() {
  document.querySelectorAll('.accordion-title').forEach(title => {
    title.addEventListener('click', () => {
      const content = title.nextElementSibling;
      content.classList.toggle('open');
      title.classList.toggle('active');
    });
  });
  document.querySelectorAll('.accordion-title-cells').forEach(title => {
    title.addEventListener('click', () => {
      const content = title.nextElementSibling;
      content.classList.toggle('open');
      title.classList.toggle('active');
    });
  });
}

export function initImageMaps() {
  if (typeof imageMapResize === "function") imageMapResize();
}

export function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

