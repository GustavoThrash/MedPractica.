'use strict';
const CACHE_NAME = 'practica-anatomica-v15';
const BASE_URL = new URL('./', self.registration.scope);
const APP_SHELL = [
  BASE_URL.href,
  new URL('index.html', BASE_URL).href,
  new URL('manifest.webmanifest', BASE_URL).href,
  new URL('config.js', BASE_URL).href,
  new URL('data/preguntas.json', BASE_URL).href,
  new URL('icons/icon-192.png', BASE_URL).href,
  new URL('icons/icon-512.png', BASE_URL).href,
  new URL('icons/apple-touch-icon.png', BASE_URL).href,
  new URL('icons/torax.webp', BASE_URL).href,
  new URL('icons/cuello.webp', BASE_URL).href,
  new URL('icons/cabeza.webp', BASE_URL).href,
  new URL('icons/abdomen.webp', BASE_URL).href,
  new URL('icons/icon-maskable-512.png', BASE_URL).href
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key.startsWith('practica-anatomica-') && key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  if (request.url.includes('/data/estructuras.json')) return; // catálogo de estructuras: comportamiento original
  if (request.url.includes('/data/preguntas.json')) {
    event.respondWith(fetch(request).then((response) => {
      if (response && response.ok) caches.open(CACHE_NAME).then((cache) => cache.put(request, response.clone()));
      return response;
    }).catch(async () => (await caches.match(request)) || Response.error()));
    return;
  }
  if (request.mode === 'navigate' || request.url.includes('/config.js')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(async () => (await caches.match(request)) || (await caches.match(BASE_URL.href)) || (await caches.match(new URL('index.html', BASE_URL).href))
      )
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});
