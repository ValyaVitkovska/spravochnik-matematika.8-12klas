// Математически справочник — Service Worker
// Версия на кеша — увеличи при промяна на файловете
const CACHE_NAME = 'math-handbook-v1';

// Файлове за кеширане при инсталация
const PRECACHE_URLS = [
  './index.html',
  './style.css',
  './app.js',
  './manifest.json'
];

// --- Инсталация ---
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_URLS);
    }).then(() => self.skipWaiting())
  );
});

// --- Активиране — изтрива стари кешове ---
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// --- Fetch — Cache First, после мрежа ---
self.addEventListener('fetch', event => {
  // Пропускаме не-GET заявки и external URLs
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        // Кешираме само успешни отговори
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const toCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, toCache);
        });
        return response;
      }).catch(() => {
        // При офлайн — върни index.html като fallback
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
