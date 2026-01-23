const CACHE_NAME = 'atn-v3';
const ASSETS = [
  'atn.html',
  'manifest.json',
  'atn-icon-192.png',
  'icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});
