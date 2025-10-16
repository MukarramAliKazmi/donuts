import "./styles/global.css";

import { initRouter } from "./lib/router.js";
import { setFavicon } from "./utils/set-favicon.js";

initRouter();
setFavicon();

window.addEventListener("load", () => {
  document.body.classList.remove("body-loading");
  document.body.classList.add("body-loaded");
});

