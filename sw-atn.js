const CACHE_NAME = 'atn-v3.2'; // ഓരോ മാറ്റത്തിലും ഈ പേര് മാറ്റുക (v3.2, v3.3...)
const ASSETS = [
  'atn.html',
  'manifest-atn.json',
  'atn-icon-192.png',
  'icon-512.png'
];

// ഇൻസ്റ്റാൾ ചെയ്യുമ്പോൾ തന്നെ പഴയ വേർഷൻ സ്കിപ്പ് ചെയ്യാൻ
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// പഴയ ക്യാഷ് ഡിലീറ്റ് ചെയ്യാൻ
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
