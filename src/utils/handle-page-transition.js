export function handlePageTransition() {
  window.addEventListener("load", () => {
    document.body.classList.remove("body-loading");
    document.body.classList.add("body-loaded");
  });
}

