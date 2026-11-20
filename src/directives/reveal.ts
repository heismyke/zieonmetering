import type { Directive } from "vue";

// Fades an element up the first time it scrolls into view.
// Usage: v-reveal or v-reveal="150" (delay in ms).
let observer: IntersectionObserver | null = null;

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer?.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
  }
  return observer;
}

export const reveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.dataset.reveal = "";
    if (binding.value) el.style.setProperty("--reveal-delay", `${binding.value}ms`);
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-revealed");
      return;
    }
    getObserver().observe(el);
  },
  unmounted(el) {
    observer?.unobserve(el);
  },
};
