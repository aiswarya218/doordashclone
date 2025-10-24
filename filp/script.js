// const sliderTrack = document.querySelector('.slider-active-range');
// const minThumb = document.querySelector('.min-thumb');
// const maxThumb = document.querySelector('.max-thumb');
// const minSelect = document.querySelector('.min-select');
// const maxSelect = document.querySelector('.max-select');

// const sliderWidth = 200; // width of track in px
// let minValue = 0;
// let maxValue = 30000;
// let minPosition = 0;
// let maxPosition = sliderWidth;

// // --- Set thumb positions initially ---
// function updateSlider() {
//   const leftPercent = (minPosition / sliderWidth) * 100;
//   const rightPercent = (maxPosition / sliderWidth) * 100;

//   minThumb.style.left = `${leftPercent}%`;
//   maxThumb.style.left = `${rightPercent}%`;

//   sliderTrack.style.left = `${leftPercent}%`;
//   sliderTrack.style.right = `${100 - rightPercent}%`;
// }

// // --- Drag functionality ---
// let activeThumb = null;

// [minThumb, maxThumb].forEach(thumb => {
//   thumb.addEventListener('mousedown', e => {
//     activeThumb = thumb;
//     document.addEventListener('mousemove', onDrag);
//     document.addEventListener('mouseup', stopDrag);
//   });
// });

// function onDrag(e) {
//   const rect = sliderTrack.parentElement.getBoundingClientRect();
//   const x = e.clientX - rect.left;
//   const pos = Math.max(0, Math.min(sliderWidth, x));

//   if (activeThumb === minThumb && pos < maxPosition - 20) {
//     minPosition = pos;
//   } else if (activeThumb === maxThumb && pos > minPosition + 20) {
//     maxPosition = pos;
//   }

//   const newMin = Math.round((minPosition / sliderWidth) * 30000);
//   const newMax = Math.round((maxPosition / sliderWidth) * 30000);

//   minSelect.value = newMin >= 1000 ? newMin : 'min';
//   maxSelect.value = newMax <= 30000 ? newMax : '30000';

//   updateSlider();
// }

// function stopDrag() {
//   document.removeEventListener('mousemove', onDrag);
//   document.removeEventListener('mouseup', stopDrag);
//   activeThumb = null;
// }

// // --- Dropdown changes ---
// minSelect.addEventListener('change', () => {
//   const val = minSelect.value === 'min' ? 0 : parseInt(minSelect.value);
//   minPosition = (val / 30000) * sliderWidth;
//   updateSlider();
// });

// maxSelect.addEventListener('change', () => {
//   const val = parseInt(maxSelect.value);
//   maxPosition = (val / 30000) * sliderWidth;
//   updateSlider();
// });

// // --- Initialize ---
// updateSlider();







// function applyFilters() {
//   const selectedBrands = getChecked(brandCheckboxes);
//   const selectedRAM = getChecked(ramCheckboxes);
//   const selectedStorage = getChecked(storageCheckboxes);
//   const selectedBattery = getChecked(batteryCheckboxes);
//   const selectedScreen = getChecked(screenCheckboxes);
//   const selectedRating = getChecked(ratingCheckboxes);
//   const selectedPrimary = getChecked(primaryCameraCheckboxes);
//   const selectedSecondary = getChecked(secondaryCameraCheckboxes);

//   const minPrice = minPriceSelect ? parseInt(minPriceSelect.value === "min" ? 0 : minPriceSelect.value) : 0;
//   const maxPrice = maxPriceSelect ? (parseInt((maxPriceSelect.value || "").replace(/\D/g, "")) || Infinity) : Infinity;

//   filteredProducts = (products || []).filter(p => {
//     const specs = p.specifications || {};
//     const productName = (p.product_name || "").toLowerCase();
//     const ramInfo = (specs.ram || "").toLowerCase();
//     const displayInfo = (specs.display || "").toLowerCase();
//     const batteryInfo = (specs.battery || "").toLowerCase();
//     const rearCameraInfo = (specs.rear_camera || "").toLowerCase();
//     const frontCameraInfo = (specs.rear_camera || "").toLowerCase(); // contains both primary + secondary
//     const price = parseInt((p.product_price?.current_price || "0").replace(/\D/g, "")) || 0;

//     // Brand detection based on product name
//     const brandMatch = selectedBrands.length ? selectedBrands.some(b => productName.includes(b.toLowerCase())) : true;
//     const ramMatch = selectedRAM.length ? selectedRAM.some(r => ramInfo.includes(r.toLowerCase())) : true;
//     const storageMatch = selectedStorage.length ? selectedStorage.some(s => ramInfo.includes(s.toLowerCase())) : true; // ROM info is in the same line as RAM
//     const batteryMatch = selectedBattery.length ? selectedBattery.some(b => batteryInfo.includes(b.toLowerCase())) : true;
//     const screenMatch = selectedScreen.length ? selectedScreen.some(s => displayInfo.includes(s.toLowerCase())) : true;
//     const primaryMatch = selectedPrimary.length ? selectedPrimary.some(c => rearCameraInfo.includes(c.toLowerCase())) : true;
//     const secondaryMatch = selectedSecondary.length ? selectedSecondary.some(c => frontCameraInfo.includes(c.toLowerCase())) : true;
//     const ratingMatch = selectedRating.length ? selectedRating.some(r => (p.rating?.score || 0) >= parseInt(r)) : true;
//     const priceMatch = price >= minPrice && price <= maxPrice;

//     return brandMatch && ramMatch && storageMatch && batteryMatch && screenMatch && ratingMatch && primaryMatch && secondaryMatch && priceMatch;
//   });

//   // Update selected filters display
//   updateFilterTags([
//     ...selectedBrands,
//     ...selectedRAM,
//     ...selectedStorage,
//     ...selectedBattery,
//     ...selectedScreen,
//     ...selectedRating,
//     ...selectedPrimary,
//     ...selectedSecondary
//   ]);

//   renderProducts(filteredProducts);
// }
