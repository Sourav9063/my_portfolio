export const randomRGBA = (alpha = 0.35) => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgba(${r},${g},${b},${alpha})`;
};

export const isIn = (start, value, end) => {
  return start <= value && value <= end;
};

export const clamp = (num, min, max) => Math.max(min, Math.min(num, max));
