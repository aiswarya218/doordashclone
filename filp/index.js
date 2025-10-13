// Show/hide category dropdown menus on hover
function ShowCategories(categoryId, categoryElementsId) {
    const clickedCategory = document.getElementById(categoryId);
    const displayElements = document.getElementById(categoryElementsId);

    if (!clickedCategory || !displayElements) return;

    const showCategoryEl = () => {
        displayElements.style.display = 'flex';
    };

    const hideCategoryEl = () => {
        displayElements.style.display = 'none';
    };

    clickedCategory.addEventListener('mouseenter', showCategoryEl);
    displayElements.addEventListener('mouseenter', showCategoryEl);
    clickedCategory.addEventListener('mouseleave', hideCategoryEl);
    displayElements.addEventListener('mouseleave', hideCategoryEl);
}

// Initialize category dropdowns
ShowCategories('electronics', 'show-electronics');
ShowCategories('tv-appliances', 'show-tvappliances');
ShowCategories('men', 'show-men');
ShowCategories('women', 'show-women');
ShowCategories('babyandkid', 'show-babykids');
ShowCategories('home', 'show-home');
ShowCategories('sports', 'show-sports');
ShowCategories('flights', 'show-flights');
ShowCategories('offerzone', 'show-offerzone');

// Toggle elements display helper
function showOptions(id, id2 = '') {
    const element = document.getElementById(id);
    const element2 = id2 ? document.getElementById(id2) : null;
    if (element) {
        element.style.display = (element.style.display === 'none' || element.style.display === "") ? 'block' : 'none';
    }
    if (element2) {
        element2.style.display = (element2.style.display === 'none' || element2.style.display === "") ? 'block' : 'none';
    }
}

// Product container and global variables
const containerONE = document.getElementById('product-list'); // Use product-list as container
let allProducts = [];

// Fetch products data (assuming products.json is accessible)
fetch("products.json")
    .then(response => response.json())
    .then(products => {
        allProducts = products;
        renderProducts(allProducts);
    })
    .catch(error => console.error('Error loading products:', error));

// Render product cards inside container
function renderProducts(products) {
    containerONE.innerHTML = "";
    products.forEach(p => {
        // Template for each product card - adapt to your HTML design
        const productHTML = `
        <div class="product-card">
            <a href="${p.link || '#'}"> 
                <div class="product box">
                    <img src="${p.image}" class="pdtimg" alt="${p.name}">
                </div>
                <button class="wishlist-btn" aria-label="Add to wishlist">
                    <img src="${p.wishlistIcon}" alt="wishlist">
                </button>
                <div class="product-info"> 
                    <img src="${p.brandLogo}" class="brand-logo" alt="${p.brand}">
                    <a class="product-name">${p.name}</a>
                    <div class="packet">${p.packet || ''}</div>
                    <div class="rating">  
                        <span class="rate-part"> 
                            <div class="rating-sct">${p.rating}
                                <img src="${p.ratingStarIcon}" alt="star"> 
                            </div>               
                        </span>
                        <span class="reviews">(${p.reviews})</span>
                        <div class="assure-sct">
                            <img height="21" src="${p.assuredBadge}" alt="assured" class="assured"> 
                        </div>
                    </div>
                    <a class="price-part" href="#" target="_blank" rel="noopener noreferrer">  
                        <div class="cost-part">      
                            <div class="price">₹${p.price}</div>
                            <div class="original">₹${p.originalPrice}</div>  
                            <div class="discount">
                                <span>${p.discountPercent}% off</span> 
                            </div>
                        </div>
                    </a>
                </div>
                <div class="offer-message">${p.offerMessage || ''}</div>
                <div class="quantity-section">
                    <span class="quantity-label">Quantity:</span>
                    <button class="quantity-btn" onclick="toggleQuantityPopUp(this)">
                        ${p.quantities ? p.quantities[0] : '1'}
                    </button>
                    <div class="quantity-popup">
                        ${p.quantities ? p.quantities.map(q => `<div onclick="selectQuantity(this)">${q}</div>`).join('') : ''}
                    </div>
                </div> 
            </a>
        </div>`;
        containerONE.insertAdjacentHTML('beforeend', productHTML);
    });
}

// Brand filter checkbox event handling
const brandcheckBoxes = document.querySelectorAll(".brandname-checkbox");
brandcheckBoxes.forEach(cBox => {
    cBox.addEventListener('change', () => {
        const selectedBrands = Array.from(brandcheckBoxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        if (selectedBrands.length === 0) {
            renderProducts(allProducts);
        } else {
            const filtered = allProducts.filter(product => selectedBrands.includes(product.brand));
            renderProducts(filtered);
        }
    });
});

// Display filter checkboxes event handling
const displayCheckBoxes = document.querySelectorAll('.displayCB');
displayCheckBoxes.forEach(cBox => {
    cBox.addEventListener('change', () => {
        const selectedItems = Array.from(displayCheckBoxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        if (selectedItems.length === 0) {
            renderProducts(allProducts);
        } else {
            const filtered = allProducts.filter(product => selectedItems.includes(product.display));
            renderProducts(filtered);
        }
    });
});

// Sorting buttons event listeners
const popularity = document.getElementById('pop');
const lowToHigh = document.getElementById('low-high');
const highToLow = document.getElementById('high-low');
const newest = document.getElementById('newest');

if (popularity) {
    popularity.addEventListener('click', () => {
        const popularProducts = [...allProducts].sort((a, b) => b.popular - a.popular);
        renderProducts(popularProducts);
    });
}

if (lowToHigh) {
    lowToHigh.addEventListener('click', () => {
        const lowHighProducts = [...allProducts].sort((a, b) => a.price - b.price);
        renderProducts(lowHighProducts);
    });
}

if (highToLow) {
    highToLow.addEventListener('click', () => {
        const highLowProducts = [...allProducts].sort((a, b) => b.price - a.price);
        renderProducts(highLowProducts);
    });
}

if (newest) {
    newest.addEventListener('click', () => {
        const newestProducts = [...allProducts].sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        renderProducts(newestProducts);
    });
}

// Selected filters UI and clear button handling
const AllcheckBoxes = document.querySelectorAll('.common-input');
const selectedFilters = document.getElementById('selectedFilters');
const clearButtonTop = document.getElementById('topClearBox');

AllcheckBoxes.forEach(cb => {
    cb.addEventListener('change', updateSelectedFilters);
});

function updateSelectedFilters() {
    const selected = Array.from(AllcheckBoxes).filter(cb => cb.checked);
    selectedFilters.innerHTML = "";
    clearButtonTop.style.display = selected.length > 0 ? 'inline' : 'none';

    selected.forEach(item => {
        const label = item.nextElementSibling ? item.nextElementSibling.textContent : item.value;
        selectedFilters.innerHTML += `
            <div class="selected-filter-container" data-value="${item.value}">
                <div class="intoMark" data-value="${item.value}" style="cursor:pointer;">X</div>
                <div class="selected-item">${label}</div>
            </div>`;
    });

    // Add event listeners to remove filter on 'X' click
    const intoMarks = selectedFilters.querySelectorAll('.intoMark');
    intoMarks.forEach(into => {
        into.addEventListener('click', () => {
            const value = into.getAttribute('data-value');
            const checkbox = Array.from(AllcheckBoxes).find(cb => cb.value === value);
            if (checkbox) {
                checkbox.checked = false;
            }
            updateSelectedFilters();
            filterProductByBrand();
        });
    });
}

// Clear all filters button
if (clearButtonTop) {
    clearButtonTop.innerHTML = `<span id="clearBtnTop" style="cursor:pointer;">Clear All</span>`;
    clearButtonTop.addEventListener('click', () => {
        AllcheckBoxes.forEach(cb => cb.checked = false);
        selectedFilters.innerHTML = "";
        renderProducts(allProducts);
    });
}

// Price filter elements and logic
const minSelect = document.getElementById('min-select');
const maxSelect = document.getElementById('max-select');
const priceLine = document.getElementById("priceline");
const leftPointer = document.getElementById('left-pointer');
const rightPointer = document.getElementById('right-pointer');
const blueLine = document.getElementById('blueLine');
const PriceSteps = [0, 500, 1000, 2000, 5000, 10000, 30000];

// Convert price to slider position
function priceToPosition(price) {
    const index = PriceSteps.indexOf(price);
    if (index === -1) return 0;
    return (index / (PriceSteps.length - 1)) * priceLine.offsetWidth;
}

// Convert slider position to closest price step
function positionToClosestPrice(position) {
    const ratio = position / priceLine.offsetWidth;
    const index = Math.round(ratio * (PriceSteps.length - 1));
    return PriceSteps[index];
}

// Enable dragging for slider pointers
function enableDragging(pointer, isLeft) {
    pointer.addEventListener("mousedown", (e) => {
        e.preventDefault();
        document.onmousemove = (e) => {
            let rect = priceLine.getBoundingClientRect();
            let position = Math.min(rect.width, Math.max(0, e.clientX - rect.left));
            let price = positionToClosestPrice(position);
            let snapPosition = priceToPosition(price);

            pointer.style.left = snapPosition + "px";
            if (isLeft) {
                minSelect.value = price;
            } else {
                maxSelect.value = price;
            }

            updateBlueLine();
            filterByPrice();
        };
        document.onmouseup = () => (document.onmousemove = null);
    });
}

function updateBlueLine() {
    const leftPosition = parseInt(leftPointer.style.left) || 0;
    const rightPosition = parseInt(rightPointer.style.left) || priceLine.offsetWidth;

    blueLine.style.left = leftPosition + "px";
    blueLine.style.width = (rightPosition - leftPosition) + "px";
}

enableDragging(leftPointer, true);
enableDragging(rightPointer, false);

function filterByPrice() {
    let min = parseInt(minSelect.value);
    let max = parseInt(maxSelect.value);

    if (isNaN(min)) min = 0;
    if (isNaN(max)) max = Infinity;

    const filtered = allProducts.filter(product => product.price >= min && product.price <= max);
    renderProducts(filtered);
}

// Update slider positions and filtering on select change
if (minSelect && maxSelect) {
    minSelect.addEventListener('change', () => {
        let minVal = parseInt(minSelect.value) || 0;
        let maxVal = parseInt(maxSelect.value) || PriceSteps[PriceSteps.length - 1];
        if (minVal > maxVal) minVal = maxVal;
        leftPointer.style.left = priceToPosition(minVal) + "px";
        updateBlueLine();
        filterByPrice();
    });

    maxSelect.addEventListener('change', () => {
        let minVal = parseInt(minSelect.value) || 0;
        let maxVal = parseInt(maxSelect.value) || PriceSteps[PriceSteps.length - 1];
        if (maxVal < minVal) maxVal = minVal;
        rightPointer.style.left = priceToPosition(maxVal) + "px";
        updateBlueLine();
        filterByPrice();
    });
}

// Brand clear button functionality
const allBrandCheckBoxes = document.querySelectorAll('.brandname-checkbox');
const BrandClear = document.getElementById('brandClear');

if (BrandClear) {
    allBrandCheckBoxes.forEach(cBox => {
        cBox.addEventListener('change', () => {
            const anyChecked = Array.from(allBrandCheckBoxes).some(cb => cb.checked);
            BrandClear.style.display = anyChecked ? 'inline-block' : 'none';
        });
    });

    BrandClear.addEventListener('click', () => {
        allBrandCheckBoxes.forEach(cb => cb.checked = false);
        BrandClear.style.display = 'none';
        renderProducts(allProducts);
    });
}

// Rating clear button functionality (assuming you have rating checkboxes)
const allRatingCheckboxes = document.querySelectorAll('.ratingboxes');
const clearRatings = document.getElementById('ratingClear');

if (clearRatings) {
    allRatingCheckboxes.forEach(cBox => {
        cBox.addEventListener('change', () => {
            const anyChecked = Array.from(allRatingCheckboxes).some(cb => cb.checked);
            clearRatings.style.display = anyChecked ? 'inline-block' : 'none';
        });
    });

    clearRatings.addEventListener('click', () => {
        allRatingCheckboxes.forEach(cb => cb.checked = false);
        clearRatings.style.display = 'none';
        renderProducts(allProducts);
    });
}

// Helper functions to toggle quantity popup and select quantity (implement these as needed)
function toggleQuantityPopUp(button) {
    const popup = button.nextElementSibling;
    if (popup) {
        popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    }
}

function selectQuantity(element) {
    const quantity = element.textContent;
    const popup = element.parentElement;
    const button = popup.previousElementSibling;
    if (button) {
        button.textContent = quantity;
    }
    popup.style.display = 'none';
}

// Optional: Implement filterProductByBrand for your filter clear 'X' clicks if needed
function filterProductByBrand() {
    const selectedBrands = Array.from(document.querySelectorAll('.brandname-checkbox'))
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    if (selectedBrands.length === 0) {
        renderProducts(allProducts);
    } else {
        const filtered = allProducts.filter(product => selectedBrands.includes(product.brand));
        renderProducts(filtered);
    }
}