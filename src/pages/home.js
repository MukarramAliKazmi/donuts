export function homePage() {
  const el     = document.createElement("div");
  el.className = "home-page";

  el.innerHTML = `
    <h1>Home Page</h1>
  `;

  return el;
}

