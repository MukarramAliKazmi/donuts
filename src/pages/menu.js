import "../styles/pages/menu.css";

import logo                   from "../assets/logos/logo.svg";

import cocoaCrushDonut        from "../assets/images/menu/best-sellers/cocoa-crush.webp";
import oceanFrostDonut        from "../assets/images/menu/best-sellers/ocean-frost.webp";
import berryBloomDonut        from "../assets/images/menu/best-sellers/berry-bloom.webp";

import rubyGlazeDonut         from "../assets/images/menu/color-crush/ruby-glaze.webp";
import sunnyGlazeDonut        from "../assets/images/menu/color-crush/sunny-glaze.webp";
import blueBreezeDonut        from "../assets/images/menu/color-crush/blue-breeze.webp";
import snowDriftDonut         from "../assets/images/menu/color-crush/snow-drift.webp";

import springDuoDonut         from "../assets/images/menu/pack-of-two/spring-duo.webp";
import frostedFriendsDonut    from "../assets/images/menu/pack-of-two/frosted-friends.webp";
import chocoVanillaPairDonut  from "../assets/images/menu/pack-of-two/choco-vanilla-pair.webp";
import candyCloudDuoDonut     from "../assets/images/menu/pack-of-two/candy-cloud-duo.webp";
import doubleDelightDonut     from "../assets/images/menu/pack-of-two/double-delight.webp";

import pistachioParadiseDonut from "../assets/images/menu/premium-collection/pistachio-paradise.webp";
import royalGlazeDonut        from "../assets/images/menu/premium-collection/royal-glaze.webp";

import { menuItem }           from "../components/menu-item.js";

const menu = {
  bestSellers: [
    {
      name  : "Cocoa Crush",
      price : "$2.99",
      image : cocoaCrushDonut,
    },
    {
      name  : "Ocean Frost",
      price : "$2.99",
      image : oceanFrostDonut,
    },
    {
      name  : "Berry Bloom",
      price : "$2.99",
      image : berryBloomDonut,
    },
  ],
  colorCrush: [
    {
      name  : "Ruby Glaze",
      price : "$3.29",
      image : rubyGlazeDonut,
    },
    {
      name  : "Sunny Glaze",
      price : "$3.29",
      image : sunnyGlazeDonut,
    },
    {
      name  : "Blue Breeze",
      price : "$3.29",
      image : blueBreezeDonut,
    },
    {
      name  : "Snow Drift",
      price : "$3.29",
      image : snowDriftDonut,
    },
  ],
  packOfTwo: [
    {
      name  : "Spring Duo",
      price : "$5.49",
      image : springDuoDonut,
    },
    {
      name  : "Frosted Friends",
      price : "$5.49",
      image : frostedFriendsDonut,
    },
    {
      name  : "Choco Vanilla Pair",
      price : "$5.29",
      image : chocoVanillaPairDonut,
    },
    {
      name  : "Candy Cloud Duo",
      price : "$5.29",
      image : candyCloudDuoDonut,
    },
    {
      name  : "Double Delight",
      price : "$5.29",
      image : doubleDelightDonut,
    },
  ],
  premiumCollection: [
    {
      name  : "Pistachio Paradise",
      price : "$19.99",
      image : pistachioParadiseDonut,
    },
    {
      name  : "Royal Glaze",
      price : "$49.99",
      image : royalGlazeDonut,
    },
  ],
};

export function menuPage() {
  const el     = document.createElement("div");
  el.className = "menu-page";

  el.innerHTML = `
    <h1 class="page-heading">
      <span class="nowrap">
        <img class="page-heading-logo" src="${logo}" alt="O" />UR
      </span>
      MENU
    </h1>
    <div class="menu-page-content">
      <h2 class="page-subheading">
        Best Sellers
      </h2>
      <div class="menu-page-menu-grid">
        ${menu.bestSellers.map(item => `
          <div class="best-seller-item-slot"></div>
        `).join("")}
      </div>
      <h2 class="page-subheading">
        Color Crush
      </h2>
      <div class="menu-page-menu-grid">
        ${menu.colorCrush.map(item => `
          <div class="color-crush-item-slot"></div>
        `).join("")}
      </div>
      <h2 class="page-subheading">
        Pack of Two
      </h2>
      <div class="menu-page-menu-grid">
        ${menu.packOfTwo.map(item => `
          <div class="pack-of-two-item-slot"></div>
        `).join("")}
      </div>
      <h2 class="page-subheading">
        Premium Collection
      </h2>
      <div class="menu-page-menu-grid">
        ${menu.premiumCollection.map(item => `
          <div class="premium-collection-item-slot"></div>
        `).join("")}
      </div>
    </div>
  `;

  el.querySelectorAll(".best-seller-item-slot").forEach((item, index) => (
    item.replaceWith(
      menuItem(
        menu.bestSellers[index].image,
        menu.bestSellers[index].name,
        menu.bestSellers[index].price,
      )
    )
  ));

  el.querySelectorAll(".color-crush-item-slot").forEach((item, index) => (
    item.replaceWith(
      menuItem(
        menu.colorCrush[index].image,
        menu.colorCrush[index].name,
        menu.colorCrush[index].price,
      )
    )
  ));

  el.querySelectorAll(".pack-of-two-item-slot").forEach((item, index) => (
    item.replaceWith(
      menuItem(
        menu.packOfTwo[index].image,
        menu.packOfTwo[index].name,
        menu.packOfTwo[index].price,
      )
    )
  ));

  el.querySelectorAll(".premium-collection-item-slot").forEach((item, index) => (
    item.replaceWith(
      menuItem(
        menu.premiumCollection[index].image,
        menu.premiumCollection[index].name,
        menu.premiumCollection[index].price,
      )
    )
  ));

  return el;
}

