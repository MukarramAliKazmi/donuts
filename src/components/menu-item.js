import "../styles/components/menu-item.css";

export function menuItem(image, name, price) {
  const el     = document.createElement("div");
  el.className = "menu-item";

  el.innerHTML = `
    <div class="menu-item-image-container">
      <img class="menu-item-image" src="${image}" alt="Image of ${name}" />
    </div>
    <div class="menu-item-content">
      <h4 class="menu-item-name">
        ${name}
      </h4>
      <h4 class="menu-item-price">
        ${price}
      </h4>
    </div>
  `;

  return el;
}

