const fs = require('fs');

// Simple DOM mock
class MockElement {
  constructor(tag = 'div') {
    this.tagName = tag;
    this.children = [];
    this.innerHTML = '';
    this.className = '';
    this.style = {};
    this.classList = {
      add: () => {},
      remove: () => {},
      toggle: () => {},
      contains: () => false
    };
  }
  appendChild(child) {
    this.children.push(child);
  }
  addEventListener() {}
  removeEventListener() {}
  setAttribute() {}
  getAttribute() { return ''; }
  querySelectorAll() { return []; }
  querySelector() { return null; }
}

global.document = {
  createElement: (tag) => new MockElement(tag),
  getElementById: (id) => new MockElement(id),
  querySelectorAll: () => [],
  addEventListener: () => {}
};

global.window = {
  addEventListener: () => {}
};
global.Image = class {
  constructor() {
    this.onload = null;
    this.onerror = null;
  }
};

// Load presentacion_data.js
eval(fs.readFileSync('data/presentacion_data.js', 'utf8'));

// Load app.js partially to test methods
const appCode = fs.readFileSync('js/app.js', 'utf8');

// We can test each render method directly
const vm = require('vm');
const context = {
  document: global.document,
  window: global.window,
  Image: global.Image,
  console: console,
  PRESENTACION_DATA: window.PRESENTACION_DATA,
  gsap: null,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  setInterval: setInterval,
  clearInterval: clearInterval
};

vm.createContext(context);
// Give window PRESENTACION_DATA
context.window.PRESENTACION_DATA = context.PRESENTACION_DATA;

vm.runInContext(appCode, context);

// Trigger DOMContentLoaded
const app = context.window.app;
console.log("App instantiated on window:", !!app);

if (!app) {
  // Call init
  const inst = vm.runInContext('new PresentationApp(PRESENTACION_DATA)', context);
  console.log("Instantiated manually:", !!inst);
  for (let i = 0; i < window.PRESENTACION_DATA.slides.length; i++) {
    inst.renderSlide(i);
    console.log(`Rendered slide ${i+1} successfully. Bullets children: ${inst.bulletsElement.children.length}`);
    inst.openMediaLightbox();
    console.log(`Slide ${i+1} Lightbox opened: display=${inst.mediaLightboxModal.style.display}, tag=${inst.lightboxTag.textContent}`);
    inst.closeMediaLightbox();
    console.log(`Slide ${i+1} Lightbox closed: display=${inst.mediaLightboxModal.style.display}`);
  }
} else {
  for (let i = 0; i < window.PRESENTACION_DATA.slides.length; i++) {
    app.renderSlide(i);
    console.log(`Rendered slide ${i+1} successfully. Bullets children: ${app.bulletsElement.children.length}`);
  }
}

console.log("\n>>> ALL SLIDE RENDERING COMPLETED WITH ZERO ERRORS! <<<");
