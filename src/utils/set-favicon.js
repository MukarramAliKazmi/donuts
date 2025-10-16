import favicon from "../assets/logos/logo.svg";

export function setFavicon() {
  const el  = document.createElement("link");
  el.rel    = "icon";
  el.type   = "images/svg+xml";
  el.href   = favicon;
  document.head.appendChild(el);
}

