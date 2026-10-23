/**
 * Jump to a scroll position immediately, bypassing the global
 * `scroll-behavior: smooth` (which would otherwise animate page switches).
 */
export function scrollToInstant(top: number) {
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;

  root.style.scrollBehavior = 'auto';
  window.scrollTo(0, top);
  root.style.scrollBehavior = previous;
}
