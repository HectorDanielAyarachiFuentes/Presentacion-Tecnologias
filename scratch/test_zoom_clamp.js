// Test clamping behavior
function clampPan(zoomLevel, panX, panY, boxW = 900, boxH = 700, imgW = 600, imgH = 600) {
  if (zoomLevel <= 1) {
    return { panX: 0, panY: 0, zoomLevel: 1 };
  }

  const scaledW = imgW * zoomLevel;
  const scaledH = imgH * zoomLevel;

  const maxPanX = Math.max(0, (scaledW - boxW) / 2) + 60;
  const maxPanY = Math.max(0, (scaledH - boxH) / 2) + 60;

  const clampedX = Math.max(-maxPanX, Math.min(maxPanX, panX));
  const clampedY = Math.max(-maxPanY, Math.min(maxPanY, panY));

  return { panX: clampedX, panY: clampedY, maxPanX, maxPanY };
}

// Case 1: zoom = 1, user tries to drag 5000px
const c1 = clampPan(1, 5000, -3000);
console.log('Case 1 (1x zoom):', c1);
if (c1.panX !== 0 || c1.panY !== 0) throw new Error('Failed Case 1');

// Case 2: zoom = 2x, user tries to drag extreme 10000px
const c2 = clampPan(2, 10000, -10000);
console.log('Case 2 (2x zoom extreme drag):', c2);
if (Math.abs(c2.panX) > c2.maxPanX || Math.abs(c2.panY) > c2.maxPanY) throw new Error('Failed Case 2');

// Case 3: zoom = 3.5x, user drags within bounds
const c3 = clampPan(3.5, 100, -50);
console.log('Case 3 (3.5x normal drag):', c3);
if (c3.panX !== 100 || c3.panY !== -50) throw new Error('Failed Case 3');

console.log('ALL CLAMPING TESTS PASSED!');

