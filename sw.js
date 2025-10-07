const CACHE_NAME = "day-finder-v2";
const urlsToCache = ["./", "./index.html", "./manifest.json"];

self.addEventListener("install", function(e) {
  e.waitUntil( caches.open(CACHE_NAME).then(function(cache){ cache.addAll(urlsToCache); }) );
});

self.addEventListener("fetch", function(e) {
  e.respondWith( caches.match(e.request).then(function(response){ return response || fetch(e.request) }) );
});
