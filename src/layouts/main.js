import { router } from "../lib/router.js";

export function mainLayout() {
  const el = document.createElement("div");
  el.className = "main-layout";

  el.innerHTML = `
    <header>
      <nav>
        <button data-path="#/">
          Home
        </button>
        <button data-path="#/menu">
          Menu
        </button>
      </nav>
    </header>
    <div class="content"></div>
  `;

  el.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      const path = button.dataset.path;
      window.location.hash = path;
    });
  });

  return el;
}

