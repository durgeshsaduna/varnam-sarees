import { supabase } from "./supabase.js";


const app = document.getElementById("app");

supabase.auth.getSession().then(({ data, error }) => {
  if (error) {
    console.error("Supabase error:", error.message);
  } else {
    console.log("Varnam Sarees Supabase connection ready!");
  }
});

const whatsappNumber = "919788417352";

const categories = [
  "All Sarees",
  "Silk Sarees",
  "Kanjivaram",
  "Cotton Sarees",
  "Designer Sarees",
  "Party Wear"
];

const products = [
  {
    name: "Traditional Kanjivaram",
    category: "Kanjivaram",
    price: "Contact for price",
    image: ""
  },
  {
    name: "Elegant Silk Saree",
    category: "Silk Sarees",
    price: "Contact for price",
    image: ""
  },
  {
    name: "Classic Cotton Saree",
    category: "Cotton Sarees",
    price: "Contact for price",
    image: ""
  },
  {
    name: "Designer Party Wear",
    category: "Designer Sarees",
    price: "Contact for price",
    image: ""
  }
];

let selectedCategory = "All Sarees";

function orderOnWhatsApp(productName) {
  const message = `Hello Varnam Sarees! I am interested in ${productName}. Please share the details.`;
  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

function renderProducts() {
  const filtered = selectedCategory === "All Sarees"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return filtered.map(product => `
    <article class="product">
      <div class="product-image">
        ${product.image
          ? `<img src="${product.image}" alt="${product.name}">`
          : `<span>✿</span>`
        }
      </div>
      <div class="product-info">
        <p class="category">${product.category}</p>
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick="orderOnWhatsApp('${product.name}')">
          Enquire on WhatsApp
        </button>
      </div>
    </article>
  `).join("");
}

function render() {
  app.innerHTML = `
    <header>
      <div class="brand">VARNAM <span>SAREES</span></div>
      <p>THE ART OF TRADITIONAL ELEGANCE</p>
      <nav>
        <a href="#home">Home</a>
        <a href="#collections">Collections</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <section class="hero" id="home">
      <div class="hero-content">
        <p>CELEBRATING INDIAN HERITAGE</p>
        <h1>Elegance Woven<br>Into Every Thread</h1>
        <p>Discover the beauty of timeless Indian sarees.</p>
        <a class="shop-button" href="#collections">
          EXPLORE COLLECTION
        </a>
      </div>
    </section>

    <section class="collections" id="collections">
      <p class="eyebrow">OUR COLLECTION</p>
      <h2>Discover Varnam</h2>
      <div class="categories">
        ${categories.map(category => `
          <button
            class="${selectedCategory === category ? "active" : ""}"
            onclick="selectCategory('${category}')">
            ${category}
          </button>
        `).join("")}
      </div>
      <div class="products">
        ${renderProducts()}
      </div>
    </section>

    <section class="about" id="about">
      <p class="eyebrow">OUR STORY</p>
      <h2>Tradition Meets Timeless Beauty</h2>
      <p>
        At Varnam Sarees, every saree celebrates the richness
        of Indian tradition, craftsmanship and elegance.
        Find something special for every occasion.
      </p>
    </section>

    <section class="contact" id="contact">
      <h2>Find Your Perfect Saree</h2>
      <p>We would love to help you choose.</p>
      <button onclick="orderOnWhatsApp('Varnam Sarees collection')">
        Chat With Us on WhatsApp
      </button>
    </section>

    <footer>
      <h2>VARNAM SAREES</h2>
      <p>Elegance in Every Thread.</p>
      <p>© 2026 Varnam Sarees. All rights reserved.</p>
    </footer>
  `;
}

window.selectCategory = function(category) {
  selectedCategory = category;
  render();
};

window.orderOnWhatsApp = orderOnWhatsApp;

const style = document.createElement("style");

style.textContent = `
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Georgia, serif;
  color: #3e2029;
  background: #fffaf5;
}

header {
  text-align: center;
  padding: 25px 12px;
  background: #fffaf5;
}

.brand {
  font-size: 32px;
  letter-spacing: 5px;
  color: #761e40;
  font-weight: bold;
}

.brand span {
  display: block;
  font-size: 15px;
  letter-spacing: 8px;
}

header p {
  font-size: 10px;
  letter-spacing: 3px;
}

nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 22px;
  margin-top: 22px;
}

nav a {
  text-decoration: none;
  color: #542333;
  font-size: 14px;
}

.hero {
  min-height: 420px;
  display: flex;
  align-items: center;
  padding: 45px 8%;
  background: linear-gradient(120deg, #48192e, #9c5265);
  color: white;
}

.hero-content {
  max-width: 600px;
}

.hero-content h1 {
  font-size: clamp(38px, 8vw, 64px);
  line-height: 1.1;
  margin: 15px 0;
}

.hero-content p {
  line-height: 1.8;
}

.shop-button {
  display: inline-block;
  margin-top: 20px;
  padding: 14px 22px;
  background: #e6c38b;
  color: #421b2d;
  text-decoration: none;
  font-size: 12px;
  letter-spacing: 2px;
}

.collections, .about, .contact {
  padding: 65px 6%;
  text-align: center;
}

.eyebrow {
  color: #a16a4b;
  letter-spacing: 3px;
  font-size: 12px;
}

.collections h2, .about h2, .contact h2 {
  font-size: 32px;
}

.categories {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 30px 0;
}

.categories button {
  padding: 10px 15px;
  border: 1px solid #8c5364;
  background: transparent;
  color: #652a42;
  cursor: pointer;
}

.categories button.active {
  background: #722644;
  color: white;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 22px;
  max-width: 1100px;
  margin: auto;
}

.product {
  background: white;
  border: 1px solid #eadbd5;
  text-align: center;
  padding-bottom: 20px;
}

.product-image {
  height: 240px;
  background: #f0e1d9;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-image span {
  font-size: 55px;
  color: #a45a72;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-info {
  padding: 12px;
}

.product-info h3 {
  font-size: 20px;
}

.category {
  color: #a16a4b;
  font-size: 12px;
}

button {
  cursor: pointer;
  font-family: inherit;
}

.product-info button, .contact button {
  background: #722644;
  color: white;
  border: 0;
  padding: 12px 16px;
}

.about {
  background: #f4e9e2;
}

.about p:last-child {
  max-width: 650px;
  margin: auto;
  line-height: 1.9;
}

.contact {
  background: #fffaf5;
}

footer {
  text-align: center;
  padding: 35px 15px;
  background: #421b2d;
  color: white;
  line-height: 1.8;
}

@media(max-width: 500px) {
  nav {
    gap: 12px;
  }

  .hero {
    min-height: 350px;
  }
}
`;

document.head.appendChild(style);

render();

supabase.auth.getSession().then(({ data, error }) => {
  if (error) {
    console.error("Supabase connection error:", error.message);
  } else {
    console.log("Varnam Sarees connected to Supabase!");
  }
});

