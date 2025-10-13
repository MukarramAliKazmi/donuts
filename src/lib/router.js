import { mainLayout } from "../layouts/main.js";

import { homePage }   from "../pages/home.js";
import { menuPage }   from "../pages/menu.js";

let currentLayout;

function router() {
  let layout, page;

  switch (window.location.hash) {
    case "#/":
      layout      = mainLayout();
      layout.type = "main";
      page        = homePage();
      break;
    case "#/menu":
      layout      = mainLayout();
      layout.type = "main";
      page        = menuPage();
      break;
    default:
      window.location.hash = "#/";
      return;
  }
 
  if (!currentLayout || layout.type !== currentLayout.type) {
    currentLayout = layout;

    const root = document.getElementById("root");
    root.innerHTML = "";
    root.appendChild(currentLayout);
  }

  const content = currentLayout.querySelector(".content");
  content.innerHTML = "";
  content.appendChild(page);
}

export function initRouter() {
  window.addEventListener('hashchange', router);

  if (!window.location.hash) {
    window.location.hash = "#/";
  }

  router();
}

