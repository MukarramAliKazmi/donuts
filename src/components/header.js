export function header() {
  const el     = document.createElement("header");
  el.className = "header";

  el.innerHTML = `
    <nav class="nav">
      <button class="nav-item" data-path="#/">
        Home
      </button>
      <button class="nav-item" data-path="#/menu">
        Menu
      </button>
      <button class="nav-item" data-path="#/about">
        About
      </button>
      <button class="nav-item" data-path="#/contact">
        Contact
      </button>
    </nav>
  `;

  el.querySelectorAll(".nav-item").forEach(button => {
    button.addEventListener("click", () => {
      const path = button.dataset.path;
      window.location.hash = path;
    });
  });

  return el;
}

