// Animation initializer for the Tubes cursor effect.
// Exported function `initTubes` dynamically imports the CDN bundle at runtime
// and initializes the effect on the provided canvas element.

export async function initTubes (canvasElement) {
  if (!canvasElement) {
    throw new Error('Canvas element is required to initialize tubes cursor.');
  }

  // Dynamically import the tubes cursor module from CDN so it runs in the browser
  const module = await import("https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js");
  // The CDN bundle exports a default factory
  const TubesCursor = module && module.default ? module.default : module;

  const app = TubesCursor(canvasElement, {
    tubes: {
      colors: ["#f967fb", "#53bc28", "#6958d5"],
      lights: {
        intensity: 200,
        colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
      }
    }
  });

  // Click to randomize colors
  const onClick = () => {
    const colors = randomColors(3);
    const lightsColors = randomColors(4);
    try {
      app.tubes.setColors(colors);
      app.tubes.setLightsColors(lightsColors);
    } catch { void 0; }
  };

  document.body.addEventListener('click', onClick);

  // Return a cleanup function on the returned object
  return {
    app,
    destroy: () => {
      try {
        if (app && app.dispose) app.dispose();
      } catch { void 0; }
      document.body.removeEventListener('click', onClick);
    }
  };
}

function randomColors (count) {
  return new Array(count)
    .fill(0)
    .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
}