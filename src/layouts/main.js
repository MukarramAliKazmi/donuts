import "../styles/layouts/main.css";

import { header } from "../components/header.js";
import { footer } from "../components/footer.js";

export function mainLayout() {
  const el     = document.createElement("div");
  el.className = "main-layout";

  el.innerHTML = `
    <div class="header-container">
      <div class="header-slot"></div>
    </div>
    <div class="content"></div>
    <div class="footer-slot"></div>
  `;

  el.querySelector(".header-slot").replaceWith(header());
  el.querySelector(".footer-slot").replaceWith(footer());

  return el;
}

