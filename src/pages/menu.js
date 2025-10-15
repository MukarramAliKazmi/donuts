import "../styles/pages/menu.css";

import logo from "../assets/logos/logo.svg";

export function menuPage() {
  const el     = document.createElement("div");
  el.className = "menu-page";

  el.innerHTML = `
    <h1 class="page-heading">
      <span class="nowrap">
        <img class="page-heading-logo" src="${logo}" alt="O" />UR
      </span>
      MENU
    </h1>
  `;

  return el;
}

