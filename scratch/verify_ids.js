const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const ids = [
  'media-lightbox-modal', 'media-lightbox-backdrop', 'lightbox-title',
  'lightbox-badge', 'lightbox-tag', 'lightbox-img', 'lightbox-video',
  'lightbox-caption', 'lightbox-close', 'gif-zoom-hint', 'gif-viewport',
  'slide-card', 'slide-bullets', 'main-stage'
];

ids.forEach(id => {
  const present = html.includes(`id="${id}"`);
  console.log(`${id}: ${present ? 'OK' : 'MISSING'}`);
});

