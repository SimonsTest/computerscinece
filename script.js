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

const form = document.querySelector('.color-form');
const hexInput = document.getElementById('hex-input');
const pickerButton = document.querySelector('.picker-button');
const goButton = document.querySelector('.go-button');
const resultsContainer = document.querySelector('.results');
const fallbackColorInput = document.querySelector('.fallback-color');
const helpText = document.getElementById('input-help');
const backButton = document.querySelector('.back-button');
const body = document.body;

backButton.tabIndex = -1;
backButton.setAttribute('aria-hidden', 'true');

let currentColorHex = '#FFFFFF';

function normalizeHex(value) {
  if (!value) return null;
  let raw = value.trim();
  if (!raw) return null;
  raw = raw.replace(/^#+/, '');
  if (raw.length === 3 && /^[0-9a-fA-F]{3}$/.test(raw)) {
    raw = raw.split('').map((char) => char + char).join('');
  } else if (raw.length === 6 && /^[0-9a-fA-F]{6}$/.test(raw)) {
    // valid 6-digit hex
  } else {
    return null;
  }
  return `#${raw.toUpperCase()}`;
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

function rgbToHex({ r, g, b }) {
  const toHex = (component) => component.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
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
    const delta = max - min;
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    switch (max) {
      case rNorm:
        h = (gNorm - bNorm) / delta + (gNorm < bNorm ? 6 : 0);
        break;
      case gNorm:
        h = (bNorm - rNorm) / delta + 2;
        break;
      default:
        h = (rNorm - gNorm) / delta + 4;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

function srgbChannelToLinear(channel) {
  const c = channel / 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function relativeLuminance({ r, g, b }) {
  const rLin = srgbChannelToLinear(r);
  const gLin = srgbChannelToLinear(g);
  const bLin = srgbChannelToLinear(b);
  return 0.2126 * rLin + 0.7152 * gLin + 0.0722 * bLin;
}

function contrastRatio(colorA, colorB) {
  const lumA = relativeLuminance(colorA);
  const lumB = relativeLuminance(colorB);
  const lighter = Math.max(lumA, lumB);
  const darker = Math.min(lumA, lumB);
  return (lighter + 0.05) / (darker + 0.05);
}

function findNearestColor(rgb) {
  let nearest = namedColors[0];
  let minDistance = Number.POSITIVE_INFINITY;
  const target = [
    srgbChannelToLinear(rgb.r),
    srgbChannelToLinear(rgb.g),
    srgbChannelToLinear(rgb.b)
  ];

  for (const color of namedColors) {
    const comparisonRgb = hexToRgb(color.hex);
    if (!comparisonRgb) continue;
    const candidate = [
      srgbChannelToLinear(comparisonRgb.r),
      srgbChannelToLinear(comparisonRgb.g),
      srgbChannelToLinear(comparisonRgb.b)
    ];
    const distance = Math.sqrt(
      Math.pow(candidate[0] - target[0], 2) +
        Math.pow(candidate[1] - target[1], 2) +
        Math.pow(candidate[2] - target[2], 2)
    );
    if (distance < minDistance) {
      minDistance = distance;
      nearest = color;
    }
  }

  return nearest;
}

function computeRgbMix({ r, g, b }) {
  const total = r + g + b;
  if (total === 0) {
    return [0, 0, 0];
  }

  const raw = [r, g, b].map((component) => (component / total) * 100);
  const rounded = raw.map((value) => Math.round(value));
  const correction = 100 - (rounded[0] + rounded[1] + rounded[2]);
  if (correction !== 0) {
    const maxIndex = rounded.indexOf(Math.max(...rounded));
    rounded[maxIndex] += correction;
  }
  return rounded;
}

function setHelpMessage(message = '') {
  helpText.textContent = message;
}

function triggerInvalidFeedback() {
  setHelpMessage('Enter a valid hex (e.g., #1A2B3C)');
  hexInput.setAttribute('aria-invalid', 'true');
  hexInput.classList.add('shake');
  setTimeout(() => hexInput.classList.remove('shake'), 320);
}

function clearInvalidFeedback() {
  if (helpText.textContent) {
    setHelpMessage('');
  }
  hexInput.removeAttribute('aria-invalid');
}

function formatHsl({ h, s, l }) {
  return `${h}\u00B0 · ${s}% · ${l}%`;
}

function buildContrastSample(label, textColor, ratio, aaPass, aaaPass) {
  const badges = [
    `<span class="badge" data-status="${aaPass ? 'pass' : 'fail'}">AA ${aaPass ? 'pass' : 'fail'}</span>`,
    `<span class="badge" data-status="${aaaPass ? 'pass' : 'fail'}">AAA ${aaaPass ? 'pass' : 'fail'}</span>`
  ].join('');
  return `
    <div class="contrast-sample" style="background:${currentColorHex};color:${textColor};">
      <span class="sample-text">${label}</span>
      <span class="value">${ratio.toFixed(2)} : 1</span>
      <div class="badge-row">${badges}</div>
    </div>
  `;
}

function renderResults(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return;
  currentColorHex = normalizeHex(hex);
  const hsl = rgbToHsl(rgb);
  const nearest = findNearestColor(rgb);
  const mix = computeRgbMix(rgb);

  const whiteContrast = contrastRatio(rgb, { r: 255, g: 255, b: 255 });
  const blackContrast = contrastRatio(rgb, { r: 0, g: 0, b: 0 });

  const whiteSample = buildContrastSample(
    'White text',
    '#FFFFFF',
    whiteContrast,
    whiteContrast >= 4.5,
    whiteContrast >= 7
  );
  const blackSample = buildContrastSample(
    'Black text',
    '#111827',
    blackContrast,
    blackContrast >= 4.5,
    blackContrast >= 7
  );

  resultsContainer.innerHTML = `
    <div class="result-grid">
      <div class="result-card">
        <span class="label">Hex</span>
        <div class="color-summary">
          <span class="swatch" style="background:${currentColorHex}"></span>
          <span class="value">${currentColorHex}</span>
        </div>
      </div>
      <div class="result-card">
        <span class="label">RGB</span>
        <span class="value">${rgb.r}, ${rgb.g}, ${rgb.b}</span>
      </div>
      <div class="result-card">
        <span class="label">HSL</span>
        <span class="value">${formatHsl(hsl)}</span>
      </div>
      <div class="result-card">
        <span class="label">Nearest CSS name</span>
        <span class="value">${nearest.name}</span>
      </div>
      <div class="result-card">
        <span class="label">RGB Mix</span>
        <span class="value">R ${mix[0]}% · G ${mix[1]}% · B ${mix[2]}%</span>
      </div>
      <div class="result-card contrast-card">
        <span class="label">Contrast checks</span>
        <div class="contrast-row">
          ${whiteSample}
          ${blackSample}
        </div>
      </div>
    </div>
  `;
  resultsContainer.classList.add('visible');
}

function enterFillMode(hex) {
  const normalized = normalizeHex(hex);
  if (!normalized) return;
  const rgb = hexToRgb(normalized);
  const contrastWhite = contrastRatio(rgb, { r: 255, g: 255, b: 255 });
  const contrastBlack = contrastRatio(rgb, { r: 0, g: 0, b: 0 });
  const textColor = contrastWhite >= contrastBlack ? '#FFFFFF' : '#0F172A';
  const buttonBackground = contrastWhite >= contrastBlack ? 'rgba(15, 23, 42, 0.32)' : 'rgba(255, 255, 255, 0.32)';

  body.style.setProperty('--fill-color', normalized);
  body.classList.add('fill-mode');
  backButton.style.color = textColor;
  backButton.style.background = buttonBackground;
  backButton.style.borderColor = textColor === '#FFFFFF' ? 'rgba(255, 255, 255, 0.65)' : 'rgba(15, 23, 42, 0.32)';
  backButton.tabIndex = 0;
  backButton.removeAttribute('aria-hidden');
}

function exitFillMode() {
  body.classList.remove('fill-mode');
  backButton.style.color = '';
  backButton.style.background = '';
  backButton.style.borderColor = '';
  backButton.tabIndex = -1;
  backButton.setAttribute('aria-hidden', 'true');
  body.style.removeProperty('--fill-color');
  hexInput.focus({ preventScroll: true });
}

async function handlePicker() {
  if ('EyeDropper' in window) {
    try {
      const eyeDropper = new window.EyeDropper();
      const result = await eyeDropper.open();
      const normalized = normalizeHex(result.sRGBHex);
      if (normalized) {
        hexInput.value = normalized;
        clearInvalidFeedback();
        renderResults(normalized);
      }
    } catch (error) {
      if (error && error.name !== 'AbortError') {
        console.error('EyeDropper error:', error);
      }
    }
  } else {
    fallbackColorInput.click();
  }
}

function handleFallbackChange(event) {
  const value = event.target.value;
  const normalized = normalizeHex(value);
  if (normalized) {
    hexInput.value = normalized;
    clearInvalidFeedback();
    renderResults(normalized);
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  const normalized = normalizeHex(hexInput.value);
  if (!normalized) {
    triggerInvalidFeedback();
    return;
  }
  clearInvalidFeedback();
  hexInput.value = normalized;
  enterFillMode(normalized);
}

pickerButton.addEventListener('click', handlePicker);
form.addEventListener('submit', handleFormSubmit);
fallbackColorInput.addEventListener('change', handleFallbackChange);
backButton.addEventListener('click', exitFillMode);

goButton.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    form.requestSubmit();
  }
});

hexInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    form.requestSubmit();
  }
});

hexInput.addEventListener('input', () => {
  if (helpText.textContent || hexInput.getAttribute('aria-invalid')) {
    clearInvalidFeedback();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && body.classList.contains('fill-mode')) {
    exitFillMode();
  }
});
