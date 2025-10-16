import logo from "../assets/logos/logo.svg";

export function contactPage() {
  const el     = document.createElement("div");
  el.className = "contact-page";

  el.innerHTML = `
    <h1 class="page-heading">
      <span class="nowrap">
        C<img class="page-heading-logo" src="${logo}" alt="O" />NTACT
      </span>
      US
    </h1>
    <div class="contact-page-content">
      <h2 class="page-subheading">
        Get in Touch
      </h2>
      <div class="page-paragraph">
        Have a question, craving, or just want to say hi? Reach out — we’d love to hear from you!
        <ul class="page-paragraph-list">
          <li class="page-paragraph-list-element">
            <strong>Email:</strong> <a href="mailto:hello@donuts.com" class="text-primary">hello@donuts.com</a>
          </li>
          <li class="page-paragraph-list-element">
            <strong>Phone:</strong> <a href="tel:+1234567890" class="text-primary">+1 (234) 567-890</a>
          </li>
          <li class="page-paragraph-list-element">
            <strong>Location:</strong> 123 Sweet Street, Sugar City
          </li>
        </ul>
      </div>
      <div class="page-paragraph">
        Open daily from <span class="text-primary">8 AM – 8 PM</span>.
      </div>
    </div>
  `;

  return el;
}

