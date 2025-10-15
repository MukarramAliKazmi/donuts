import "../styles/components/header.css";

import logo from "../assets/logos/logo.svg";

export function header() {
  const helpers = headerHelpers();

  const el      = document.createElement("header");
  el.className  = "header";

  el.innerHTML  = `
    <div class="logo">
      <span class="nowrap">
        D<img class="logo-image" src="${logo}" alt="O">O</img>NUTS
      <span>
    </div>
    <nav class="nav">
      <button class='${helpers.getItemClass("#/")}' data-path="#/">
        Home
      </button>
      <button class='${helpers.getItemClass("#/menu")}' data-path="#/menu">
        Menu
      </button>
      <button class='${helpers.getItemClass("#/about")}' data-path="#/about">
        About
      </button>
      <button class='${helpers.getItemClass("#/contact")}' data-path="#/contact">
        Contact
      </button>
    </nav>
  `;
 
  headerEvents(el);

  return el;
}

function headerHelpers() {
  const getItemClass = (path) => {
    const hash = window.location.hash;
    return `nav-item ${hash === path ? "nav-item-selected" : ""}`;
  };

  return {
    getItemClass
  };
}

function headerEvents(el) {
  const helpers = headerHelpers();

  el.addEventListener("click", (e) => {
    if (e.target.matches(".nav-item")) {
      window.location.hash = e.target.dataset.path;
    }
  });

  window.addEventListener("hashchange", () => {
    el.querySelectorAll(".nav-item").forEach(button => {
      const path = button.dataset.path;
      button.className = helpers.getItemClass(path);
    });
  });
}

