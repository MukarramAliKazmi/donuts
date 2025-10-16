import "../styles/components/footer.css";

import logo from "../assets/logos/logo.svg";

export function footer() {
  const el      = document.createElement("div");
  el.className  = "footer";

  el.innerHTML  = `
    <div class="logo">
      <span class="nowrap">
        D<img class="logo-image" src="${logo}" alt="O">O</img>NUTS
      <span>
    </div>
    <div class="footer-contact">
      <p class="footer-contact-item">
        <strong>Email:</strong> <a href="mailto:hello@donuts.com" class="text-primary">hello@donuts.com</a>
      </p>
      <p class="footer-contact-item">
        <strong>Phone:</strong> <a href="tel:+1234567890" class="text-primary">+1 (234) 567-890</a>
      </p>
      <p class="footer-contact-item">
        <strong>Location:</strong> 123 Sweet Street, Sugar City
      </p>
    </div>
  `;

  return el;
}

