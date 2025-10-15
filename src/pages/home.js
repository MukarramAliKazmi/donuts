import "../styles/pages/home.css";

import donutsImage            from "../assets/images/home/donuts-image.webp";
import logo                   from "../assets/logos/logo.svg";
import singleChocolateDonut   from "../assets/images/menu/single-chocolate.webp";
import singleDarkBlueDonut    from "../assets/images/menu/single-dark-blue.webp";

import { menuItem }           from "../components/menu-item.js";

export function homePage() {
  const el     = document.createElement("div");
  el.className = "home-page";

  el.innerHTML = `
    <div class="home-content">
      <h1 class="home-heading">
        THE BEST
        <span class="nowrap">
          D<img class="home-heading-logo" src="${logo}" alt="O" />NUT
        </span>
        <br/>
        IN
        <span class="nowrap">
          T<img class="home-heading-logo" src="${logo}" alt="O" />WN
        </span>
      </h1>
      <div class="home-actions">
        <button id="home-action-button" class="home-action-button">
          Our Menu
        </button>
        <span class="home-price-tag">From $2.99</span>
      </div>
      <div class="home-menu-items">
        <div class="menu-item-1-slot"></div>
        <div class="menu-item-2-slot"></div>
        <div class="home-visit-menu-button-container">
          <button id="home-visit-menu-button" class="home-visit-menu-button">
            View Full Menu
          </button>
        </div>
      </div>
    </div>
    <div class="home-image-container">
      <img class="home-image" src="${donutsImage}" alt="Two donuts" />
    </div>
  `;

  el.querySelector(".menu-item-1-slot").replaceWith(
    menuItem(singleChocolateDonut, "Cocoa Crush", "$2.99")
  );
  el.querySelector(".menu-item-2-slot").replaceWith(
    menuItem(singleDarkBlueDonut, "Ocean Frost", "$2.99")
  );

  homeEvents(el);

  return el;
}

function homeEvents(el) {
  el.querySelector("#home-action-button").addEventListener("click", () => {
    window.location.hash = "#/menu";
  });

  el.querySelector("#home-visit-menu-button").addEventListener("click", () => {
    window.location.hash = "#/menu";
  });
}

