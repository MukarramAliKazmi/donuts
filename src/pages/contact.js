import "../styles/pages/contact.css";

import logo from "../assets/logos/logo.svg";

export function contactPage() {
  const el     = document.createElement("div");
  el.className = "contact-page";

  el.innerHTML = `
    <h1 class="page-heading">
      <span class="nowrap">
        C<img class="page-heading-logo" src="${logo}" alt="O" />NTACT
      </span>
      US
    </h1>
  `;

  return el;
}

