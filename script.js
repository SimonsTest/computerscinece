const namedColors = [
  { name: 'AliceBlue', hex: '#F0F8FF' },
  { name: 'AntiqueWhite', hex: '#FAEBD7' },
  { name: 'Aqua', hex: '#00FFFF' },
  { name: 'Aquamarine', hex: '#7FFFD4' },
  { name: 'Azure', hex: '#F0FFFF' },
  { name: 'Beige', hex: '#F5F5DC' },
  { name: 'Bisque', hex: '#FFE4C4' },
  { name: 'Black', hex: '#000000' },
  { name: 'BlanchedAlmond', hex: '#FFEBCD' },
  { name: 'Blue', hex: '#0000FF' },
  { name: 'BlueViolet', hex: '#8A2BE2' },
  { name: 'Brown', hex: '#A52A2A' },
  { name: 'BurlyWood', hex: '#DEB887' },
  { name: 'CadetBlue', hex: '#5F9EA0' },
  { name: 'Chartreuse', hex: '#7FFF00' },
  { name: 'Chocolate', hex: '#D2691E' },
  { name: 'Coral', hex: '#FF7F50' },
  { name: 'CornflowerBlue', hex: '#6495ED' },
  { name: 'Cornsilk', hex: '#FFF8DC' },
  { name: 'Crimson', hex: '#DC143C' },
  { name: 'Cyan', hex: '#00FFFF' },
  { name: 'DarkBlue', hex: '#00008B' },
  { name: 'DarkCyan', hex: '#008B8B' },
  { name: 'DarkGoldenrod', hex: '#B8860B' },
  { name: 'DarkGray', hex: '#A9A9A9' },
  { name: 'DarkGreen', hex: '#006400' },
  { name: 'DarkGrey', hex: '#A9A9A9' },
  { name: 'DarkKhaki', hex: '#BDB76B' },
  { name: 'DarkMagenta', hex: '#8B008B' },
  { name: 'DarkOliveGreen', hex: '#556B2F' },
  { name: 'DarkOrange', hex: '#FF8C00' },
  { name: 'DarkOrchid', hex: '#9932CC' },
  { name: 'DarkRed', hex: '#8B0000' },
  { name: 'DarkSalmon', hex: '#E9967A' },
  { name: 'DarkSeaGreen', hex: '#8FBC8F' },
  { name: 'DarkSlateBlue', hex: '#483D8B' },
  { name: 'DarkSlateGray', hex: '#2F4F4F' },
  { name: 'DarkSlateGrey', hex: '#2F4F4F' },
  { name: 'DarkTurquoise', hex: '#00CED1' },
  { name: 'DarkViolet', hex: '#9400D3' },
  { name: 'DeepPink', hex: '#FF1493' },
  { name: 'DeepSkyBlue', hex: '#00BFFF' },
  { name: 'DimGray', hex: '#696969' },
  { name: 'DimGrey', hex: '#696969' },
  { name: 'DodgerBlue', hex: '#1E90FF' },
  { name: 'FireBrick', hex: '#B22222' },
  { name: 'FloralWhite', hex: '#FFFAF0' },
  { name: 'ForestGreen', hex: '#228B22' },
  { name: 'Fuchsia', hex: '#FF00FF' },
  { name: 'Gainsboro', hex: '#DCDCDC' },
  { name: 'GhostWhite', hex: '#F8F8FF' },
  { name: 'Gold', hex: '#FFD700' },
  { name: 'Goldenrod', hex: '#DAA520' },
  { name: 'Gray', hex: '#808080' },
  { name: 'Green', hex: '#008000' },
  { name: 'GreenYellow', hex: '#ADFF2F' },
  { name: 'HoneyDew', hex: '#F0FFF0' },
  { name: 'HotPink', hex: '#FF69B4' },
  { name: 'IndianRed', hex: '#CD5C5C' },
  { name: 'Indigo', hex: '#4B0082' },
  { name: 'Ivory', hex: '#FFFFF0' },
  { name: 'Khaki', hex: '#F0E68C' },
  { name: 'Lavender', hex: '#E6E6FA' },
  { name: 'LavenderBlush', hex: '#FFF0F5' },
  { name: 'LawnGreen', hex: '#7CFC00' },
  { name: 'LemonChiffon', hex: '#FFFACD' },
  { name: 'LightBlue', hex: '#ADD8E6' },
  { name: 'LightCoral', hex: '#F08080' },
  { name: 'LightCyan', hex: '#E0FFFF' },
  { name: 'LightGoldenrodYellow', hex: '#FAFAD2' },
  { name: 'LightGray', hex: '#D3D3D3' },
  { name: 'LightGreen', hex: '#90EE90' },
  { name: 'LightGrey', hex: '#D3D3D3' },
  { name: 'LightPink', hex: '#FFB6C1' },
  { name: 'LightSalmon', hex: '#FFA07A' },
  { name: 'LightSeaGreen', hex: '#20B2AA' },
  { name: 'LightSkyBlue', hex: '#87CEFA' },
  { name: 'LightSlateGray', hex: '#778899' },
  { name: 'LightSlateGrey', hex: '#778899' },
  { name: 'LightSteelBlue', hex: '#B0C4DE' },
  { name: 'LightYellow', hex: '#FFFFE0' },
  { name: 'Lime', hex: '#00FF00' },
  { name: 'LimeGreen', hex: '#32CD32' },
  { name: 'Linen', hex: '#FAF0E6' },
  { name: 'Magenta', hex: '#FF00FF' },
  { name: 'Maroon', hex: '#800000' },
  { name: 'MediumAquamarine', hex: '#66CDAA' },
  { name: 'MediumBlue', hex: '#0000CD' },
  { name: 'MediumOrchid', hex: '#BA55D3' },
  { name: 'MediumPurple', hex: '#9370DB' },
  { name: 'MediumSeaGreen', hex: '#3CB371' },
  { name: 'MediumSlateBlue', hex: '#7B68EE' },
  { name: 'MediumSpringGreen', hex: '#00FA9A' },
  { name: 'MediumTurquoise', hex: '#48D1CC' },
  { name: 'MediumVioletRed', hex: '#C71585' },
  { name: 'MidnightBlue', hex: '#191970' },
  { name: 'MintCream', hex: '#F5FFFA' },
  { name: 'MistyRose', hex: '#FFE4E1' },
  { name: 'Moccasin', hex: '#FFE4B5' },
  { name: 'NavajoWhite', hex: '#FFDEAD' },
  { name: 'Navy', hex: '#000080' },
  { name: 'OldLace', hex: '#FDF5E6' },
  { name: 'Olive', hex: '#808000' },
  { name: 'OliveDrab', hex: '#6B8E23' },
  { name: 'Orange', hex: '#FFA500' },
  { name: 'OrangeRed', hex: '#FF4500' },
  { name: 'Orchid', hex: '#DA70D6' },
  { name: 'PaleGoldenrod', hex: '#EEE8AA' },
  { name: 'PaleGreen', hex: '#98FB98' },
  { name: 'PaleTurquoise', hex: '#AFEEEE' },
  { name: 'PaleVioletRed', hex: '#DB7093' },
  { name: 'PapayaWhip', hex: '#FFEFD5' },
  { name: 'PeachPuff', hex: '#FFDAB9' },
  { name: 'Peru', hex: '#CD853F' },
  { name: 'Pink', hex: '#FFC0CB' },
  { name: 'Plum', hex: '#DDA0DD' },
  { name: 'PowderBlue', hex: '#B0E0E6' },
  { name: 'Purple', hex: '#800080' },
  { name: 'RebeccaPurple', hex: '#663399' },
  { name: 'Red', hex: '#FF0000' },
  { name: 'RosyBrown', hex: '#BC8F8F' },
  { name: 'RoyalBlue', hex: '#4169E1' },
  { name: 'SaddleBrown', hex: '#8B4513' },
  { name: 'Salmon', hex: '#FA8072' },
  { name: 'SandyBrown', hex: '#F4A460' },
  { name: 'SeaGreen', hex: '#2E8B57' },
  { name: 'Seashell', hex: '#FFF5EE' },
  { name: 'Sienna', hex: '#A0522D' },
  { name: 'Silver', hex: '#C0C0C0' },
  { name: 'SkyBlue', hex: '#87CEEB' },
  { name: 'SlateBlue', hex: '#6A5ACD' },
  { name: 'SlateGray', hex: '#708090' },
  { name: 'SlateGrey', hex: '#708090' },
  { name: 'Snow', hex: '#FFFAFA' },
  { name: 'SpringGreen', hex: '#00FF7F' },
  { name: 'SteelBlue', hex: '#4682B4' },
  { name: 'Tan', hex: '#D2B48C' },
  { name: 'Teal', hex: '#008080' },
  { name: 'Thistle', hex: '#D8BFD8' },
  { name: 'Tomato', hex: '#FF6347' },
  { name: 'Turquoise', hex: '#40E0D0' },
  { name: 'Violet', hex: '#EE82EE' },
  { name: 'Wheat', hex: '#F5DEB3' },
  { name: 'White', hex: '#FFFFFF' },
  { name: 'WhiteSmoke', hex: '#F5F5F5' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'YellowGreen', hex: '#9ACD32' },
  { name: 'Grey', hex: '#808080' }
];

const MAX_STOPS = 8;
const MIN_STOPS = 1;

const form = document.querySelector('.color-form');
const stopsContainer = document.querySelector('.stops-container');
const addStopButton = document.querySelector('.add-stop-button');
const previewBar = document.querySelector('.gradient-preview');
const resultsContainer = document.querySelector('.results');
const helpText = document.getElementById('input-help');
const backButton = document.querySelector('.back-button');
const stopTemplate = document.getElementById('stop-row-template');

backButton.tabIndex = -1;
backButton.setAttribute('aria-hidden', 'true');

let stopIdCounter = 0;
const stopRows = [];
let currentFillStops = [];
let currentFillType = 'none';

function createStopRow(initialHex = '') {
  const fragment = stopTemplate.content.firstElementChild.cloneNode(true);
  const label = fragment.querySelector('.stop-label');
  const input = fragment.querySelector('.stop-input');
  const pickerButton = fragment.querySelector('.stop-picker');
  const removeButton = fragment.querySelector('.stop-remove');
  const fallbackInput = document.createElement('input');
  const id = `stop-${++stopIdCounter}`;

  fallbackInput.type = 'color';
  fallbackInput.className = 'stop-fallback';
  fallbackInput.tabIndex = -1;
  fallbackInput.setAttribute('aria-hidden', 'true');
  Object.assign(fallbackInput.style, {
    position: 'absolute',
    opacity: '0',
    pointerEvents: 'none',
    width: '1px',
    height: '1px'
  });

  input.id = id;
  input.setAttribute('aria-describedby', 'input-help');
  label.setAttribute('for', id);

  const inputGroup = fragment.querySelector('.stop-input-group');
  inputGroup.appendChild(fallbackInput);

  const row = { element: fragment, label, input, pickerButton, removeButton, fallbackInput };

  if (initialHex) {
    const normalized = normalizeHex(initialHex);
    if (normalized) {
      input.value = normalized;
    } else {
      input.value = initialHex;
    }
  }

  input.addEventListener('input', () => {
    input.classList.remove('invalid');
    clearHelp();
    renderGradientPreview();
    updateResultsPanel();
  });

  input.addEventListener('blur', () => {
    if (!input.value.trim()) {
      input.value = '';
      input.classList.remove('invalid');
      updateResultsPanel();
      return;
    }
    const normalized = normalizeHex(input.value);
    if (normalized) {
      input.value = normalized;
      input.classList.remove('invalid');
    } else {
      input.classList.add('invalid');
      setHelp('Enter a valid hex (e.g., #1A2B3C).');
    }
    renderGradientPreview();
    updateResultsPanel();
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      applyFill();
    }
  });

  pickerButton.addEventListener('click', () => pickColorForRow(row));

  removeButton.addEventListener('click', () => {
    removeStopRow(row);
  });

  fallbackInput.addEventListener('input', () => {
    if (!fallbackInput.value) return;
    input.value = normalizeHex(fallbackInput.value) ?? fallbackInput.value.toUpperCase();
    input.dispatchEvent(new Event('input'));
    input.dispatchEvent(new Event('blur'));
  });

  return row;
}

function addStop(initialHex = '') {
  if (stopRows.length >= MAX_STOPS) {
    setHelp(`You can add up to ${MAX_STOPS} color stops.`);
    shakeElement(addStopButton);
    return null;
  }
  const row = createStopRow(initialHex);
  stopRows.push(row);
  stopsContainer.appendChild(row.element);
  refreshStopLabels();
  updateRemoveButtons();
  updateAddButtonState();
  renderGradientPreview();
  updateResultsPanel();
  return row;
}

function removeStopRow(row) {
  if (stopRows.length <= MIN_STOPS) {
    return;
  }
  const index = stopRows.indexOf(row);
  if (index !== -1) {
    stopRows.splice(index, 1);
    row.element.remove();
    refreshStopLabels();
    updateRemoveButtons();
    updateAddButtonState();
    renderGradientPreview();
    updateResultsPanel();
  }
}

function refreshStopLabels() {
  stopRows.forEach((row, index) => {
    const stopNumber = index + 1;
    row.label.textContent = `Stop ${stopNumber}`;
    row.pickerButton.setAttribute('aria-label', `Pick color for stop ${stopNumber}`);
    row.removeButton.setAttribute('aria-label', `Remove color stop ${stopNumber}`);
  });
}

function updateRemoveButtons() {
  const shouldHide = stopRows.length <= MIN_STOPS;
  stopRows.forEach((row) => {
    row.removeButton.classList.toggle('hidden', shouldHide);
  });
}

function updateAddButtonState() {
  const atLimit = stopRows.length >= MAX_STOPS;
  addStopButton.disabled = atLimit;
  if (!atLimit && helpText.textContent === `You can add up to ${MAX_STOPS} color stops.`) {
    clearHelp();
  }
}

function normalizeHex(value) {
  if (!value) return null;
  let raw = value.trim();
  if (!raw) return null;
  raw = raw.replace(/^#+/, '');
  if (raw.length === 3 && /^[0-9a-fA-F]{3}$/.test(raw)) {
    raw = raw.split('').map((char) => char + char).join('');
  } else if (raw.length === 6 && /^[0-9a-fA-F]{6}$/.test(raw)) {
    // valid six digit hex
  } else {
    return null;
  }
  return `#${raw.toUpperCase()}`;
}

function collectValidStops() {
  return stopRows
    .map((row) => ({ row, hex: normalizeHex(row.input.value) }))
    .filter((item) => item.hex);
}

function renderGradientPreview() {
  const validStops = collectValidStops();
  if (validStops.length === 0) {
    previewBar.style.background = 'rgba(15, 23, 42, 0.08)';
    return;
  }
  if (validStops.length === 1) {
    previewBar.style.background = validStops[0].hex;
    return;
  }
  const gradient = `linear-gradient(90deg, ${validStops.map((item) => item.hex).join(', ')})`;
  previewBar.style.background = gradient;
}

function setHelp(message) {
  helpText.textContent = message || '';
}

function clearHelp() {
  setHelp('');
}

function applyFill() {
  clearHelp();
  const invalidRows = stopRows.filter((row) => {
    const value = row.input.value.trim();
    return value && !normalizeHex(value);
  });

  if (invalidRows.length > 0) {
    invalidRows.forEach((row) => {
      row.input.classList.add('invalid');
      shakeElement(row.element.querySelector('.stop-input-group'));
    });
    setHelp('Enter a valid hex (e.g., #1A2B3C).');
    return;
  }

  const validStops = collectValidStops();
  if (validStops.length === 0) {
    setHelp('Enter at least one valid color to continue.');
    shakeElement(stopsContainer);
    return;
  }

  currentFillStops = validStops.map((item) => item.hex);

  if (currentFillStops.length === 1) {
    currentFillType = 'solid';
    enterFillMode(currentFillStops[0], currentFillStops[0]);
    renderSingleColorResults(currentFillStops[0]);
  } else {
    currentFillType = 'gradient';
    const gradient = `linear-gradient(90deg, ${currentFillStops.join(', ')})`;
    enterFillMode(gradient);
    renderGradientResults(currentFillStops);
  }
}

function enterFillMode(background, representativeColor = null) {
  document.documentElement.style.setProperty('--fill-background', background);
  document.body.classList.add('fill-mode');
  backButton.tabIndex = 0;
  backButton.setAttribute('aria-hidden', 'false');
  backButton.focus();
  const colorForContrast = representativeColor || midpointColor(currentFillStops[0], currentFillStops[currentFillStops.length - 1]);
  updateBackButtonContrast(colorForContrast);
}

function exitFillMode() {
  document.body.classList.remove('fill-mode');
  document.documentElement.style.setProperty('--fill-background', 'transparent');
  backButton.tabIndex = -1;
  backButton.setAttribute('aria-hidden', 'true');
  backButton.style.color = '';
  currentFillType = 'none';
  currentFillStops = [];
  if (stopRows[0]) {
    stopRows[0].input.focus();
  }
}

function updateBackButtonContrast(referenceHex) {
  const normalized = normalizeHex(referenceHex);
  if (!normalized) {
    backButton.style.color = '#0f172a';
    return;
  }
  const backgroundRgb = hexToRgb(normalized);
  const whiteContrast = contrastRatio(backgroundRgb, { r: 255, g: 255, b: 255 });
  const blackContrast = contrastRatio(backgroundRgb, { r: 0, g: 0, b: 0 });
  backButton.style.color = whiteContrast >= blackContrast ? '#ffffff' : '#0f172a';
}

function pickColorForRow(row) {
  if (window.EyeDropper) {
    const eyeDropper = new EyeDropper();
    eyeDropper
      .open()
      .then((result) => {
        if (result && result.sRGBHex) {
          row.input.value = normalizeHex(result.sRGBHex) ?? result.sRGBHex.toUpperCase();
          row.input.dispatchEvent(new Event('input'));
          row.input.dispatchEvent(new Event('blur'));
        }
      })
      .catch((error) => {
        if (error && error.name === 'AbortError') return;
        openFallbackPicker(row);
      });
  } else {
    openFallbackPicker(row);
  }
}

function openFallbackPicker(row) {
  row.fallbackInput.click();
}

function renderSingleColorResults(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return;
  const hsl = rgbToHsl(rgb);
  const nearest = nearestNamedColor(hex);
  const mix = rgbMixPercentages(rgb);
  resultsContainer.innerHTML = `
    <div class="results-grid">
      <article class="result-card">
        <h3>Hex</h3>
        <div class="swatch-wrap">
          <div class="swatch" style="background:${hex}"></div>
          <p>${hex}</p>
        </div>
      </article>
      <article class="result-card">
        <h3>RGB</h3>
        <p>${rgb.r}, ${rgb.g}, ${rgb.b}</p>
        <p class="mix-line">${mix}</p>
      </article>
      <article class="result-card">
        <h3>HSL</h3>
        <p>${formatHsl(hsl)}</p>
        <p class="mix-line">Nearest: ${nearest.name}</p>
      </article>
      <article class="result-card">
        <h3>Contrast</h3>
        <div class="contrast-row">
          ${renderContrastSample('White', '#FFFFFF', hex)}
          ${renderContrastSample('Black', '#000000', hex)}
        </div>
      </article>
    </div>
  `;
  resultsContainer.classList.add('visible');
}

function renderGradientResults(stops) {
  const cards = stops
    .map((hex, index) => {
      const rgb = hexToRgb(hex);
      if (!rgb) {
        return '';
      }
      const nearest = nearestNamedColor(hex);
      return `
        <article class="stop-summary-card">
          <div class="swatch" style="background:${hex}"></div>
          <strong>Stop ${index + 1}</strong>
          <span>HEX ${hex}</span>
          <span>RGB ${rgb.r}, ${rgb.g}, ${rgb.b}</span>
          <span>Nearest: ${nearest.name}</span>
        </article>
      `;
    })
    .join('');
  resultsContainer.innerHTML = `<div class="stop-summary">${cards}</div>`;
  resultsContainer.classList.add('visible');
}

function updateResultsPanel() {
  const validStops = collectValidStops();
  if (validStops.length === 0) {
    resultsContainer.classList.remove('visible');
    resultsContainer.innerHTML = '';
    return;
  }
  if (validStops.length === 1) {
    renderSingleColorResults(validStops[0].hex);
  } else {
    renderGradientResults(validStops.map((item) => item.hex));
  }
}

function renderContrastSample(label, foregroundHex, backgroundHex) {
  const foreground = hexToRgb(foregroundHex);
  const background = hexToRgb(backgroundHex);
  if (!foreground || !background) {
    return '';
  }
  const ratio = contrastRatio(foreground, background);
  const aa = ratio >= 4.5 ? 'AA pass' : 'AA fail';
  const aaa = ratio >= 7 ? 'AAA pass' : 'AAA fail';
  return `
    <div class="contrast-sample" style="color:${foregroundHex}; background:${backgroundHex};">
      <span>${label} text</span>
      <span>${ratio.toFixed(2)}:1</span>
      <span class="badge">${aa}</span>
      <span class="badge">${aaa}</span>
    </div>
  `;
}

function rgbMixPercentages({ r, g, b }) {
  const total = r + g + b;
  if (total === 0) {
    return 'R 0% · G 0% · B 0%';
  }
  const raw = {
    r: (r / total) * 100,
    g: (g / total) * 100,
    b: (b / total) * 100
  };
  const rounded = {
    r: Math.round(raw.r),
    g: Math.round(raw.g),
    b: Math.round(raw.b)
  };
  const diff = 100 - (rounded.r + rounded.g + rounded.b);
  if (diff !== 0) {
    const largest = Object.entries(raw).sort(([, valueA], [, valueB]) => valueB - valueA)[0][0];
    rounded[largest] += diff;
  }
  return `R ${rounded.r}% · G ${rounded.g}% · B ${rounded.b}%`;
}

function hexToRgb(hex) {
  const normalized = normalizeHex(hex);
  if (!normalized) return null;
  const value = normalized.slice(1);
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16)
  };
}

function rgbToHsl({ r, g, b }) {
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;
  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rNorm:
        h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0);
        break;
      case gNorm:
        h = (bNorm - rNorm) / d + 2;
        break;
      case bNorm:
        h = (rNorm - gNorm) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

function formatHsl({ h, s, l }) {
  return `HSL(${h}°, ${s}%, ${l}%)`;
}

function srgbComponentToLinear(component) {
  const normalized = component / 255;
  if (normalized <= 0.04045) {
    return normalized / 12.92;
  }
  return Math.pow((normalized + 0.055) / 1.055, 2.4);
}

function linearToSrgb(value) {
  if (value <= 0.0031308) {
    return value * 12.92;
  }
  return 1.055 * Math.pow(value, 1 / 2.4) - 0.055;
}

function relativeLuminance({ r, g, b }) {
  const rLin = srgbComponentToLinear(r);
  const gLin = srgbComponentToLinear(g);
  const bLin = srgbComponentToLinear(b);
  return 0.2126 * rLin + 0.7152 * gLin + 0.0722 * bLin;
}

function contrastRatio(rgb1, rgb2) {
  const lum1 = relativeLuminance(rgb1) + 0.05;
  const lum2 = relativeLuminance(rgb2) + 0.05;
  return lum1 > lum2 ? lum1 / lum2 : lum2 / lum1;
}

function nearestNamedColor(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) {
    return { name: 'Unknown', hex };
  }
  const target = [srgbComponentToLinear(rgb.r), srgbComponentToLinear(rgb.g), srgbComponentToLinear(rgb.b)];
  let best = { name: 'Unknown', hex: '#000000' };
  let bestDistance = Number.POSITIVE_INFINITY;
  namedColors.forEach((color) => {
    const colorRgb = hexToRgb(color.hex);
    const linear = [srgbComponentToLinear(colorRgb.r), srgbComponentToLinear(colorRgb.g), srgbComponentToLinear(colorRgb.b)];
    const distance = Math.sqrt(
      Math.pow(target[0] - linear[0], 2) +
      Math.pow(target[1] - linear[1], 2) +
      Math.pow(target[2] - linear[2], 2)
    );
    if (distance < bestDistance) {
      bestDistance = distance;
      best = color;
    }
  });
  return best;
}

function midpointColor(hexA, hexB) {
  const rgbA = hexToRgb(hexA);
  const rgbB = hexToRgb(hexB);
  if (!rgbA || !rgbB) {
    return hexA || hexB || '#FFFFFF';
  }
  const aLinear = [srgbComponentToLinear(rgbA.r), srgbComponentToLinear(rgbA.g), srgbComponentToLinear(rgbA.b)];
  const bLinear = [srgbComponentToLinear(rgbB.r), srgbComponentToLinear(rgbB.g), srgbComponentToLinear(rgbB.b)];
  const midLinear = aLinear.map((value, index) => (value + bLinear[index]) / 2);
  const toHex = (value) => {
    const srgb = Math.min(1, Math.max(0, linearToSrgb(value)));
    return Math.round(srgb * 255);
  };
  const midRgb = {
    r: toHex(midLinear[0]),
    g: toHex(midLinear[1]),
    b: toHex(midLinear[2])
  };
  return rgbToHex(midRgb);
}

function rgbToHex({ r, g, b }) {
  const toHex = (component) => component.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function shakeElement(element) {
  if (!element) return;
  element.classList.remove('shake');
  void element.offsetWidth;
  element.classList.add('shake');
  setTimeout(() => {
    element.classList.remove('shake');
  }, 360);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  applyFill();
});

addStopButton.addEventListener('click', () => {
  const row = addStop('');
  if (row) {
    row.input.focus();
  }
});

backButton.addEventListener('click', () => {
  exitFillMode();
});

backButton.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    exitFillMode();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && document.body.classList.contains('fill-mode')) {
    exitFillMode();
  }
});

addStop('#0099FF');
addStop('#FF6A00');
refreshStopLabels();
updateRemoveButtons();
updateAddButtonState();
renderGradientPreview();
updateResultsPanel();
if (stopRows[0]) {
  stopRows[0].input.focus();
}
