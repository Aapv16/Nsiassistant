const cacheName = "NsiAssistant-v2"; // Ganti versi jika update
const preCache = ["/", "/style.css", "/script.js"];

self.addEventListener("install", (e) => {
  console.log("Service Worker installed");

  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(preCache);
    })
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== cacheName)
            .map((key) => caches.delete(key))
        )
      )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(e.request).then((networkResponse) => {
        return caches.open(cacheName).then((cache) => {
          cache.put(e.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});
