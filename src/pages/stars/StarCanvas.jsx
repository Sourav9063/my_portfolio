import React, { useEffect, useRef } from "react";

const defaultGlowStops = [
  [0, "rgba(0, 0, 0, 0.1)"],
  [0.4, "rgba(0, 0, 0, 0.52)"],
  [1, "rgba(0, 0, 0, 0.94)"],
];

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const randomBetween = (min, max) => Math.random() * (max - min) + min;

const getResponsiveValue = (value, ratio) => {
  if (typeof value === "number") {
    return value;
  }

  return ratio > 1 ? value.portrait : value.landscape;
};

const createStar = ({
  hue,
  saturation,
  lightness,
  minOpacity,
  maxOpacity,
  minSize,
  maxSize,
  minTwinkleSpeed,
  maxTwinkleSpeed,
}) => ({
  top: Math.random() * 100,
  left: Math.random() * 100,
  opacity: randomBetween(minOpacity, maxOpacity),
  size: randomBetween(minSize, maxSize),
  color: `hsl(${randomBetween(hue[0], hue[1])}, ${saturation}%, ${lightness}%)`,
  phase: Math.random() * Math.PI * 2,
  speed: randomBetween(minTwinkleSpeed, maxTwinkleSpeed),
});

const createStars = (count, starOptions) =>
  Array.from({ length: count }, () => {
    const star = createStar(starOptions);

    return {
      ...star,
      renderLeft: star.left,
      renderTop: star.top,
      renderOpacity: star.opacity,
    };
  });

export default function StarCanvas({
  className,
  starCount={ portrait: 500, landscape: 650 },
  hue = [240, 340],
  saturation = 100,
  lightness = 50,
  minOpacity = 0.2,
  maxOpacity = 0.8,
  minSize = 4,
  maxSize = 20,
  minTwinkleSpeed = 0.0001,
  maxTwinkleSpeed = 0.00026,
  twinkleDepth = 0.32,
  maxDevicePixelRatio = 2,
  initialPointer = { x: 50, y: 50 },
  pointerEase = 0.12,
  starEase = 0.1,
  opacityEase = 0.12,
  interactionRadius = { portrait: 12, landscape: 15 },
  minInteractionDistance = 255,
  repelStrength = 1,
  brightenNearPointer = true,
  glow = {
    enabled: true,
    innerRadius: 0.08,
    outerRadius: 0.34,
    stops: defaultGlowStops,
  },
  edgeThreshold = 20,
  onEdgeEnter,
  onEdgeLeave,
  onPointerChange,
  onClick,
}) {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const edgeActiveRef = useRef(false);
  const starsRef = useRef([]);
  const pointerRef = useRef(initialPointer);
  const renderPointerRef = useRef(initialPointer);
  const interactionRadiusRef = useRef(Math.sqrt(minInteractionDistance));

  const configRef = useRef({});
  configRef.current = {
    starCount,
    hue,
    saturation,
    lightness,
    minOpacity,
    maxOpacity,
    minSize,
    maxSize,
    minTwinkleSpeed,
    maxTwinkleSpeed,
    twinkleDepth,
    maxDevicePixelRatio,
    pointerEase,
    starEase,
    opacityEase,
    interactionRadius,
    minInteractionDistance,
    repelStrength,
    brightenNearPointer,
    glow,
    edgeThreshold,
    onEdgeEnter,
    onEdgeLeave,
    onPointerChange,
  };

  const updatePointer = (clientX, clientY) => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const pointer = {
      x: clamp(((clientX - rect.left) / rect.width) * 100, 0, 100),
      y: clamp(((clientY - rect.top) / rect.height) * 100, 0, 100),
    };

    pointerRef.current = pointer;
    configRef.current.onPointerChange?.(pointer);

    const isOnEdge =
      pointer.x <= configRef.current.edgeThreshold ||
      pointer.x >= 100 - configRef.current.edgeThreshold;

    if (isOnEdge && !edgeActiveRef.current) {
      edgeActiveRef.current = true;
      configRef.current.onEdgeEnter?.(pointer);
    } else if (!isOnEdge && edgeActiveRef.current) {
      edgeActiveRef.current = false;
      configRef.current.onEdgeLeave?.(pointer);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");

    const syncCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      const devicePixelRatio = Math.min(
        window.devicePixelRatio || 1,
        configRef.current.maxDevicePixelRatio
      );
      const ratio = rect.height / rect.width;
      const count = getResponsiveValue(configRef.current.starCount, ratio);
      const radiusPercent = getResponsiveValue(
        configRef.current.interactionRadius,
        ratio
      );

      canvas.width = Math.floor(rect.width * devicePixelRatio);
      canvas.height = Math.floor(rect.height * devicePixelRatio);
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      interactionRadiusRef.current = Math.max(
        radiusPercent,
        Math.sqrt(configRef.current.minInteractionDistance)
      );
      starsRef.current = createStars(count, configRef.current);
    };

    const drawGlow = (width, height, pointer) => {
      const { glow: glowConfig } = configRef.current;

      if (!glowConfig?.enabled) {
        return;
      }

      const gradient = context.createRadialGradient(
        (pointer.x / 100) * width,
        (pointer.y / 100) * height,
        Math.min(width, height) * glowConfig.innerRadius,
        (pointer.x / 100) * width,
        (pointer.y / 100) * height,
        Math.max(width, height) * glowConfig.outerRadius
      );

      (glowConfig.stops || defaultGlowStops).forEach(([stop, color]) => {
        gradient.addColorStop(stop, color);
      });

      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);
    };

    const render = (time) => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const pointer = pointerRef.current;
      const renderPointer = renderPointerRef.current;
      const interactionRadiusPx =
        (interactionRadiusRef.current / 100) * Math.min(width, height);
      const interactionDistance = interactionRadiusPx * interactionRadiusPx;
      const safeTwinkleDepth = clamp(configRef.current.twinkleDepth, 0, 1);

      context.clearRect(0, 0, width, height);

      renderPointer.x +=
        (pointer.x - renderPointer.x) * configRef.current.pointerEase;
      renderPointer.y +=
        (pointer.y - renderPointer.y) * configRef.current.pointerEase;

      starsRef.current.forEach((star) => {
        const dx = ((star.left - renderPointer.x) / 100) * width;
        const dy = ((star.top - renderPointer.y) / 100) * height;
        const baseDist = dx * dx + dy * dy;
        let targetLeft = star.left;
        let targetTop = star.top;
        let targetOpacity =
          star.opacity *
          (1 -
            safeTwinkleDepth +
            Math.sin(time * star.speed + star.phase) * safeTwinkleDepth);

        if (baseDist < interactionDistance) {
          const angle = Math.atan2(dy, dx);
          const repelDistance =
            interactionRadiusPx * configRef.current.repelStrength;

          targetLeft =
            renderPointer.x + (Math.cos(angle) * repelDistance * 100) / width;
          targetTop =
            renderPointer.y + (Math.sin(angle) * repelDistance * 100) / height;

          if (configRef.current.brightenNearPointer) {
            targetOpacity = 1;
          }
        }

        star.renderLeft +=
          (targetLeft - star.renderLeft) * configRef.current.starEase;
        star.renderTop +=
          (targetTop - star.renderTop) * configRef.current.starEase;
        star.renderOpacity +=
          (targetOpacity - star.renderOpacity) * configRef.current.opacityEase;

        context.globalAlpha = clamp(star.renderOpacity, 0, 1);
        context.fillStyle = star.color;
        context.beginPath();
        context.arc(
          (star.renderLeft / 100) * width,
          (star.renderTop / 100) * height,
          star.size / 2,
          0,
          Math.PI * 2
        );
        context.fill();
      });

      context.globalAlpha = 1;
      drawGlow(width, height, renderPointer);
      animationRef.current = window.requestAnimationFrame(render);
    };

    syncCanvasSize();
    animationRef.current = window.requestAnimationFrame(render);
    window.addEventListener("resize", syncCanvasSize);

    return () => {
      window.cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", syncCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      onMouseMove={(e) => updatePointer(e.clientX, e.clientY)}
      onTouchMove={(e) =>
        updatePointer(e.touches[0].clientX, e.touches[0].clientY)
      }
      onClick={onClick}
    />
  );
}
