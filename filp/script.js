const sliderTrack = document.querySelector('.slider-active-range');
const minThumb = document.querySelector('.min-thumb');
const maxThumb = document.querySelector('.max-thumb');
const minSelect = document.querySelector('.min-select');
const maxSelect = document.querySelector('.max-select');

const sliderWidth = 200; // width of track in px
let minValue = 0;
let maxValue = 30000;
let minPosition = 0;
let maxPosition = sliderWidth;

// --- Set thumb positions initially ---
function updateSlider() {
  const leftPercent = (minPosition / sliderWidth) * 100;
  const rightPercent = (maxPosition / sliderWidth) * 100;

  minThumb.style.left = `${leftPercent}%`;
  maxThumb.style.left = `${rightPercent}%`;

  sliderTrack.style.left = `${leftPercent}%`;
  sliderTrack.style.right = `${100 - rightPercent}%`;
}

// --- Drag functionality ---
let activeThumb = null;

[minThumb, maxThumb].forEach(thumb => {
  thumb.addEventListener('mousedown', e => {
    activeThumb = thumb;
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);
  });
});

function onDrag(e) {
  const rect = sliderTrack.parentElement.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const pos = Math.max(0, Math.min(sliderWidth, x));

  if (activeThumb === minThumb && pos < maxPosition - 20) {
    minPosition = pos;
  } else if (activeThumb === maxThumb && pos > minPosition + 20) {
    maxPosition = pos;
  }

  const newMin = Math.round((minPosition / sliderWidth) * 30000);
  const newMax = Math.round((maxPosition / sliderWidth) * 30000);

  minSelect.value = newMin >= 1000 ? newMin : 'min';
  maxSelect.value = newMax <= 30000 ? newMax : '30000';

  updateSlider();
}

function stopDrag() {
  document.removeEventListener('mousemove', onDrag);
  document.removeEventListener('mouseup', stopDrag);
  activeThumb = null;
}

// --- Dropdown changes ---
minSelect.addEventListener('change', () => {
  const val = minSelect.value === 'min' ? 0 : parseInt(minSelect.value);
  minPosition = (val / 30000) * sliderWidth;
  updateSlider();
});

maxSelect.addEventListener('change', () => {
  const val = parseInt(maxSelect.value);
  maxPosition = (val / 30000) * sliderWidth;
  updateSlider();
});

// --- Initialize ---
updateSlider();
