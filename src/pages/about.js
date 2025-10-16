import logo from "../assets/logos/logo.svg";

export function aboutPage() {
  const el     = document.createElement("div");
  el.className = "about-page";

  el.innerHTML = `
    <h1 class="page-heading">
      <span class="nowrap">
        AB<img class="page-heading-logo" src="${logo}" alt="O" />UT
      </span>
      US
    </h1>
    <div class="about-page-content">
      <h2 class="page-subheading">
        Who We Are
      </h2>
      <div class="page-paragraph">
        At <span class="text-primary">Donuts</span>, we believe every bite should feel like a little celebration.
        Our donuts are handcrafted daily with the finest ingredients and a sprinkle of creativity.
      </div>
      <h2 class="page-subheading">
        Our Promise
      </h2>
      <div class="page-paragraph">
        From classic glazes to bold new flavors, we’re always experimenting to bring you
        <span class="text-primary">fresh</span>, <span class="text-primary">fluffy</span>, and
        <span class="text-primary">fun</span> treats that make your day sweeter.
      </div>
      <h2 class="page-subheading">
        Our Mission
      </h2>
      <div class="page-paragraph">
        We’re here to spread happiness — one donut at a time.
        Whether it’s your morning pick-me-up or a weekend indulgence,
        <span class="text-primary">Donuts</span> is your happy place.
      </div>
    </div>
  `;

  return el;
}

