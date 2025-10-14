import "../styles/layouts/main.css";

import { header } from "../components/header.js";

export function mainLayout() {
  const el     = document.createElement("div");
  el.className = "main-layout";

  el.innerHTML = `
    <div class="header-slot"></div>
    <div class="content"></div>
  `;

  el.querySelector(".header-slot").replaceWith(header());

  return el;
}

