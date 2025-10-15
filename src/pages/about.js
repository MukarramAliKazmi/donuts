import "../styles/pages/about.css";

import logo from "../assets/logos/logo.svg";

export function aboutPage() {
  const el     = document.createElement("div");
  el.className = "about-page";

  el.innerHTML = `
    <h1 class="page-heading">
      <span class="nowrap">
        AB<img class="page-heading-logo" src="${logo}" alt="O" />UT
      </span>
      US
    </h1>
  `;

  return el;
}

