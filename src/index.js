import "./styles/global.css";
import { initRouter } from "./lib/router.js";

initRouter();

window.addEventListener("load", () => {
  document.body.classList.remove("body-loading");
  document.body.classList.add("body-loaded");
});

