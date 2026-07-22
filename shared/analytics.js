// Register this domain at https://plausible.io before expecting data.
const PLAUSIBLE_DOMAIN = "macninja.github.io";

export function initAnalytics() {
  if (!PLAUSIBLE_DOMAIN || document.querySelector("script[data-domain]")) return;

  const script = document.createElement("script");
  script.defer = true;
  script.dataset.domain = PLAUSIBLE_DOMAIN;
  script.src = "https://plausible.io/js/script.js";
  document.head.appendChild(script);
}

/** @param {string} name @param {Record<string, string>} [props] */
export function trackEvent(name, props = {}) {
  if (typeof window.plausible !== "function") return;
  window.plausible(name, Object.keys(props).length ? { props } : undefined);
}
