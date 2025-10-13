import { header } from "../components/header.js";

export function mainLayout() {
  const el          = document.createElement("div");
  el.className      = "main-layout";

  const content     = document.createElement("div");
  content.className = "content";
 
  el.appendChild(header());
  el.appendChild(content);

 return el;
}

