document.addEventListener("DOMContentLoaded", () => {
  const productList = document.querySelector(".product-results");
  const searchInput = document.querySelector(".search-bar input");
  const sortLinks = document.querySelectorAll(".sort-link");
  const minPriceSelect = document.querySelector(".min-select");
  const maxPriceSelect = document.querySelector(".max-select");

  const brandCheckboxes = document.querySelectorAll(".brand-filter input[type='checkbox']");
const ramCheckboxes = document.querySelectorAll(".ram-filter input[type='checkbox']");
const screenCheckboxes = document.querySelectorAll(".screen-filter input[type='checkbox']");
const ratingCheckboxes = document.querySelectorAll(".rating-filter input[type='checkbox']");
const primaryCameraCheckboxes = document.querySelectorAll(".primary-filter input[type='checkbox']");
const secondaryCameraCheckboxes = document.querySelectorAll(".secondary-filter input[type='checkbox']");

  // ✅ Create filter tags container
  const filterTagsContainer = document.createElement("div");
  filterTagsContainer.className = "selected-filters-container";
  filterTagsContainer.style.cssText = `
    display: flex; flex-wrap: wrap; gap: 8px; background: #fff; 
    padding: 8px 12px; border-radius: 4px; margin-bottom: 10px; align-items: center;
  `;
  productList.parentNode.insertBefore(filterTagsContainer, productList);

  const clearAllBtn = document.createElement("button");
  clearAllBtn.textContent = "Clear All";
  clearAllBtn.style.cssText = `
    background: #2874f0; color: #fff; border: none; padding: 4px 10px; 
    border-radius: 3px; font-size: 12px; cursor: pointer; display: none;
  `;
  filterTagsContainer.appendChild(clearAllBtn);

  let filteredProducts = [...products];

  const extractPrice = (p) =>
    parseInt((p.price?.current_price || p.product_price?.current_price).replace(/[^0-9]/g, ""));

  // 🧩 Render Product Cards
  const renderProducts = (data) => {
    const html = data.map((product) => {
      const price = product.price || product.product_price || {};
      const specsList = product.specifications
        ? Object.values(product.specifications)
            .map((v) => `<li>${v}</li>`)
            .join("")
        : "";
      const mainOffer = product.offers?.exchange_offer || "";
      return `
        <div class="product-card">
          <div class="product-image"> 
            <div class="wishlist-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 16">
                <path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#C7C7C7" stroke="#FFF"></path>
              </svg>
            </div>
            <img src="${product.image}" alt="${product.product_name}">
            <div class="compare-checkbox-container">
              <label class="compare">
                <input type="checkbox" class="compare-checkbox" data-product-id="${product.id}">
              </label>    
              <label class="compare-text"><span>Add to Compare</span></label>
            </div>  
          </div>
          <div class="product-details">
            <h3>${product.product_name}</h3>
            <div class="rating">
              <span class="rating-value">${product.rating.score}★</span>
            </div>
            <span class="review-count">${product.rating.total_ratings} & ${product.rating.total_reviews}</span>
            <ul class="specs">
              ${specsList} 
              <li>${product.warranty.phone_warranty || product.warranty.accessories_warranty || ""}</li>
            </ul>
          </div>
          <div class="product-pricing">
            <div class="price-main">
              <span class="current-price">${price.current_price || ""}</span>
              ${
                (price.current_price &&
                  parseInt(price.current_price.replace(/[^\d]/g, "")) > 500)
                  ? '<span class="assured"><img src="./images/fa_9e47c1.png" alt="F-Assured"></span>'
                  : ""
              }
            </div>
            <div>
              <span class="old-price">${price.original_price || ""}</span>
              <span class="discount">${price.discount_percentage || ""}</span>
            </div>
            <p class="offer">${mainOffer}</p> 
            <p class="bank-offer">${product.offers?.bank_offer || ""}</p>
          </div>
        </div>
      `;
    }).join("");

    productList.querySelectorAll(".product-card").forEach(e => e.remove());
    productList.insertAdjacentHTML("beforeend", html || "<p>No products found.</p>");
  };

  renderProducts(filteredProducts);

  // 🔍 Search Filter
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    filteredProducts = products.filter(p =>
      p.product_name.toLowerCase().includes(query)
    );
    renderProducts(filteredProducts);
  });

  // 🔄 Sorting
  sortLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      sortLinks.forEach(l => l.classList.remove("active"));
      e.target.classList.add("active");
      const type = e.target.textContent.trim();

      if (type.includes("Low")) filteredProducts.sort((a, b) => extractPrice(a) - extractPrice(b));
      else if (type.includes("High")) filteredProducts.sort((a, b) => extractPrice(b) - extractPrice(a));
      else if (type.includes("Newest")) filteredProducts.reverse();
      else filteredProducts = [...products];

      renderProducts(filteredProducts);
    });
  });

  // 🧠 All Filter Groups
  const allFilters = [
    ...brandCheckboxes,
    ...ramCheckboxes,
    ...screenCheckboxes,
    ...ratingCheckboxes,
    ...primaryCameraCheckboxes,
    ...secondaryCameraCheckboxes,
  ];

  allFilters.forEach(chk => chk.addEventListener("change", applyFilters));
  minPriceSelect.addEventListener("change", applyFilters);
  maxPriceSelect.addEventListener("change", applyFilters);
  clearAllBtn.addEventListener("click", clearAllFilters);

  // ✅ Apply Filters Function
  function applyFilters() {
    const selectedBrands = getChecked(brandCheckboxes);
    const selectedRAM = getChecked(ramCheckboxes);
    const selectedScreen = getChecked(screenCheckboxes);
    const selectedRating = getChecked(ratingCheckboxes);
    const selectedPrimary = getChecked(primaryCameraCheckboxes);
    const selectedSecondary = getChecked(secondaryCameraCheckboxes);
    const minPrice = parseInt(minPriceSelect.value === "min" ? 0 : minPriceSelect.value);
    const maxPrice = parseInt(maxPriceSelect.value.replace(/\D/g, "")) || Infinity;

    // Filter logic
    filteredProducts = products.filter(p => {
      const price = extractPrice(p);
      const brandMatch = selectedBrands.length ? selectedBrands.some(b => p.product_name.toLowerCase().includes(b.toLowerCase())) : true;
      const ramMatch = selectedRAM.length ? selectedRAM.some(r => p.specifications.ram && p.specifications.ram.includes(r)) : true;
      const screenMatch = selectedScreen.length ? selectedScreen.some(s => p.specifications.display && p.specifications.display.includes(s.split(" ")[0])) : true;
      const ratingMatch = selectedRating.length ? selectedRating.some(r => p.rating.score >= parseInt(r)) : true;
      const primaryMatch = selectedPrimary.length ? selectedPrimary.some(pc => p.specifications.rear_camera && p.specifications.rear_camera.includes(pc.split(" ")[0])) : true;
      const secondaryMatch = selectedSecondary.length ? selectedSecondary.some(sc => p.specifications.front_camera && p.specifications.front_camera.includes(sc.split(" ")[0])) : true;
      const priceMatch = price >= minPrice && price <= maxPrice;
      return brandMatch && ramMatch && screenMatch && ratingMatch && primaryMatch && secondaryMatch && priceMatch;
    });

    updateFilterTags([...selectedBrands, ...selectedRAM, ...selectedScreen, ...selectedRating, ...selectedPrimary, ...selectedSecondary]);
    renderProducts(filteredProducts);
  }

  // 🏷️ Display selected filters above products
  function updateFilterTags(selected) {
    filterTagsContainer.innerHTML = "";
    clearAllBtn.style.display = selected.length ? "inline-block" : "none";

    selected.forEach(item => {
      const tag = document.createElement("div");
      tag.textContent = item;
      tag.style.cssText = `
        background: #e0e7ff; color: #2874f0; padding: 4px 8px;
        border-radius: 3px; font-size: 13px; display: flex; align-items: center; gap: 5px;
      `;
      const x = document.createElement("span");
      x.textContent = "✕";
      x.style.cssText = "cursor:pointer;font-weight:bold;";
      x.onclick = () => {
        const checkbox = [...allFilters].find(f => f.parentElement.textContent.trim() === item);
        if (checkbox) checkbox.checked = false;
        applyFilters();
      };
      tag.appendChild(x);
      filterTagsContainer.appendChild(tag);
    });
    filterTagsContainer.appendChild(clearAllBtn);
  }

  // 🧹 Clear all filters
  function clearAllFilters() {
    [...allFilters].forEach(f => (f.checked = false));
    minPriceSelect.value = "min";
    maxPriceSelect.value = "30000";
    filterTagsContainer.innerHTML = "";
    clearAllBtn.style.display = "none";
    filteredProducts = [...products];
    renderProducts(filteredProducts);
  }

  const getChecked = (nodeList) =>
    [...nodeList].filter(c => c.checked).map(c => c.parentElement.textContent.trim());
});

// ===================================================

// document.addEventListener("DOMContentLoaded", () => {
//   const productList = document.querySelector(".product-results");
//   const searchInput = document.querySelector(".search-bar input");
//   const sortLinks = document.querySelectorAll(".sort-link");
//   const minPriceSelect = document.querySelector(".min-select");
//   const maxPriceSelect = document.querySelector(".max-select");

//   const brandCheckboxes = document.querySelectorAll(".brand-filter input[type='checkbox']");
//   const ramCheckboxes = document.querySelectorAll(".ram-filter input[type='checkbox']");
//   const screenCheckboxes = document.querySelectorAll(".filters-sidebar .filter-group:has(.header-text:contains('SCREEN')) input[type='checkbox']");
//   const ratingCheckboxes = document.querySelectorAll(".filters-sidebar .filter-group:has(.header-text:contains('CUSTOMER')) input[type='checkbox']");
//   const primaryCameraCheckboxes = document.querySelectorAll(".filters-sidebar .filter-group:has(.header-text:contains('PRIMARY CAMERA')) input[type='checkbox']");
//   const secondaryCameraCheckboxes = document.querySelectorAll(".filters-sidebar .filter-group:has(.header-text:contains('SECONDARY CAMERA')) input[type='checkbox']");

//   // ✅ Create filter tags container
//   const filterTagsContainer = document.createElement("div");
//   filterTagsContainer.className = "selected-filters-container";
//   filterTagsContainer.style.cssText = `
//     display: flex; flex-wrap: wrap; gap: 8px; background: #fff; 
//     padding: 8px 12px; border-radius: 4px; margin-bottom: 10px; align-items: center;
//   `;
//   productList.parentNode.insertBefore(filterTagsContainer, productList);

//   const clearAllBtn = document.createElement("button");
//   clearAllBtn.textContent = "Clear All";
//   clearAllBtn.style.cssText = `
//     background: #2874f0; color: #fff; border: none; padding: 4px 10px; 
//     border-radius: 3px; font-size: 12px; cursor: pointer; display: none;
//   `;
//   filterTagsContainer.appendChild(clearAllBtn);

//   let filteredProducts = [...products];

//   const extractPrice = (p) =>
//     parseInt((p.price?.current_price || p.product_price?.current_price).replace(/[^0-9]/g, ""));

//   // 🧩 Render Product Cards
//   const renderProducts = (data) => {
//     const html = data.map((product) => {
//       const price = product.price || product.product_price || {};
//       const specsList = product.specifications
//         ? Object.values(product.specifications)
//             .map((v) => `<li>${v}</li>`)
//             .join("")
//         : "";
//       const mainOffer = product.offers?.exchange_offer || "";
//       return `
//         <div class="product-card">
//           <div class="product-image"> 
//             <div class="wishlist-icon">
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 16">
//                 <path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#C7C7C7" stroke="#FFF"></path>
//               </svg>
//             </div>
//             <img src="${product.image}" alt="${product.product_name}">
//             <div class="compare-checkbox-container">
//               <label class="compare">
//                 <input type="checkbox" class="compare-checkbox" data-product-id="${product.id}">
//               </label>    
//               <label class="compare-text"><span>Add to Compare</span></label>
//             </div>  
//           </div>
//           <div class="product-details">
//             <h3>${product.product_name}</h3>
//             <div class="rating">
//               <span class="rating-value">${product.rating.score}★</span>
//             </div>
//             <span class="review-count">${product.rating.total_ratings} & ${product.rating.total_reviews}</span>
//             <ul class="specs">
//               ${specsList} 
//               <li>${product.warranty.phone_warranty || product.warranty.accessories_warranty || ""}</li>
//             </ul>
//           </div>
//           <div class="product-pricing">
//             <div class="price-main">
//               <span class="current-price">${price.current_price || ""}</span>
//               ${
//                 (price.current_price &&
//                   parseInt(price.current_price.replace(/[^\d]/g, "")) > 500)
//                   ? '<span class="assured"><img src="./images/fa_9e47c1.png" alt="F-Assured"></span>'
//                   : ""
//               }
//             </div>
//             <div>
//               <span class="old-price">${price.original_price || ""}</span>
//               <span class="discount">${price.discount_percentage || ""}</span>
//             </div>
//             <p class="offer">${mainOffer}</p> 
//             <p class="bank-offer">${product.offers?.bank_offer || ""}</p>
//           </div>
//         </div>
//       `;
//     }).join("");

//     productList.querySelectorAll(".product-card").forEach(e => e.remove());
//     productList.insertAdjacentHTML("beforeend", html || "<p>No products found.</p>");
//   };

//   renderProducts(filteredProducts);

//   // 🔍 Search Filter
//   searchInput.addEventListener("input", (e) => {
//     const query = e.target.value.toLowerCase();
//     filteredProducts = products.filter(p =>
//       p.product_name.toLowerCase().includes(query)
//     );
//     renderProducts(filteredProducts);
//   });

//   // 🔄 Sorting
//   sortLinks.forEach(link => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();
//       sortLinks.forEach(l => l.classList.remove("active"));
//       e.target.classList.add("active");
//       const type = e.target.textContent.trim();

//       if (type.includes("Low")) filteredProducts.sort((a, b) => extractPrice(a) - extractPrice(b));
//       else if (type.includes("High")) filteredProducts.sort((a, b) => extractPrice(b) - extractPrice(a));
//       else if (type.includes("Newest")) filteredProducts.reverse();
//       else filteredProducts = [...products];

//       renderProducts(filteredProducts);
//     });
//   });

//   // 🧠 All Filter Groups
//   const allFilters = [
//     ...brandCheckboxes,
//     ...ramCheckboxes,
//     ...screenCheckboxes,
//     ...ratingCheckboxes,
//     ...primaryCameraCheckboxes,
//     ...secondaryCameraCheckboxes,
//   ];

//   allFilters.forEach(chk => chk.addEventListener("change", applyFilters));
//   minPriceSelect.addEventListener("change", applyFilters);
//   maxPriceSelect.addEventListener("change", applyFilters);
//   clearAllBtn.addEventListener("click", clearAllFilters);

//   // ✅ Apply Filters Function
//   function applyFilters() {
//     const selectedBrands = getChecked(brandCheckboxes);
//     const selectedRAM = getChecked(ramCheckboxes);
//     const selectedScreen = getChecked(screenCheckboxes);
//     const selectedRating = getChecked(ratingCheckboxes);
//     const selectedPrimary = getChecked(primaryCameraCheckboxes);
//     const selectedSecondary = getChecked(secondaryCameraCheckboxes);
//     const minPrice = parseInt(minPriceSelect.value === "min" ? 0 : minPriceSelect.value);
//     const maxPrice = parseInt(maxPriceSelect.value.replace(/\D/g, "")) || Infinity;

//     // Filter logic
//     filteredProducts = products.filter(p => {
//       const price = extractPrice(p);
//       const brandMatch = selectedBrands.length ? selectedBrands.some(b => p.product_name.toLowerCase().includes(b.toLowerCase())) : true;
//       const ramMatch = selectedRAM.length ? selectedRAM.some(r => p.specifications.ram && p.specifications.ram.includes(r)) : true;
//       const screenMatch = selectedScreen.length ? selectedScreen.some(s => p.specifications.display && p.specifications.display.includes(s.split(" ")[0])) : true;
//       const ratingMatch = selectedRating.length ? selectedRating.some(r => p.rating.score >= parseInt(r)) : true;
//       const primaryMatch = selectedPrimary.length ? selectedPrimary.some(pc => p.specifications.rear_camera && p.specifications.rear_camera.includes(pc.split(" ")[0])) : true;
//       const secondaryMatch = selectedSecondary.length ? selectedSecondary.some(sc => p.specifications.front_camera && p.specifications.front_camera.includes(sc.split(" ")[0])) : true;
//       const priceMatch = price >= minPrice && price <= maxPrice;
//       return brandMatch && ramMatch && screenMatch && ratingMatch && primaryMatch && secondaryMatch && priceMatch;
//     });

//     updateFilterTags([...selectedBrands, ...selectedRAM, ...selectedScreen, ...selectedRating, ...selectedPrimary, ...selectedSecondary]);
//     renderProducts(filteredProducts);
//   }

//   // 🏷️ Display selected filters above products
//   function updateFilterTags(selected) {
//     filterTagsContainer.innerHTML = "";
//     clearAllBtn.style.display = selected.length ? "inline-block" : "none";

//     selected.forEach(item => {
//       const tag = document.createElement("div");
//       tag.textContent = item;
//       tag.style.cssText = `
//         background: #e0e7ff; color: #2874f0; padding: 4px 8px;
//         border-radius: 3px; font-size: 13px; display: flex; align-items: center; gap: 5px;
//       `;
//       const x = document.createElement("span");
//       x.textContent = "✕";
//       x.style.cssText = "cursor:pointer;font-weight:bold;";
//       x.onclick = () => {
//         const checkbox = [...allFilters].find(f => f.parentElement.textContent.trim() === item);
//         if (checkbox) checkbox.checked = false;
//         applyFilters();
//       };
//       tag.appendChild(x);
//       filterTagsContainer.appendChild(tag);
//     });
//     filterTagsContainer.appendChild(clearAllBtn);
//   }

//   // 🧹 Clear all filters
//   function clearAllFilters() {
//     [...allFilters].forEach(f => (f.checked = false));
//     minPriceSelect.value = "min";
//     maxPriceSelect.value = "30000";
//     filterTagsContainer.innerHTML = "";
//     clearAllBtn.style.display = "none";
//     filteredProducts = [...products];
//     renderProducts(filteredProducts);
//   }

//   const getChecked = (nodeList) =>
//     [...nodeList].filter(c => c.checked).map(c => c.parentElement.textContent.trim());
// });

