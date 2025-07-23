const CACHE_NAME = 'healthsathi-v1';
const urlsToCache = [
  '/',
  '/images/cybernetic-recovery-chamber.jpg',
  '/images/logo/healthsathi-logo.svg',
  '/images/logo/groq.png',
  '/images/logo/openai.png',
  '/images/logo/emory.png',
  '/images/logo/microsoft.png',
  '/images/logo/meta.png',
  '/images/logo/google.png',
  '/images/logo/apple.png',
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event - clean up old caches
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