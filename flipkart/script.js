async function loadProducts() {
  const res = await fetch("product.json");
  const products = await res.json();

  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div class="product-info">
        <h2>${p.name}</h2>
        <p>${p.ram} RAM | ${p.storage} Storage</p>
        <p>${p.display}</p>
        <p>${p.rearCamera} Rear | ${p.frontCamera} Front</p>
        <p>${p.battery} Battery</p>
        <p>Processor: ${p.processor}</p>
        <p class="rating">⭐ ${p.rating} (${p.reviews})</p>
        <p class="price">₹${p.price} <span class="old-price">₹${p.oldPrice}</span> <span>(${p.discount})</span></p>
      </div>
    `;

    container.appendChild(card);
  });
}

loadProducts();
