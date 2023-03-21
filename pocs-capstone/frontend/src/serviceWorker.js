// This is the service worker with the combined offline experience (Offline page + Offline copy of page from cache)
const CACHE = "pwabuilder-offline-page";

//UPDATE WITH ACTUAL OFFLINE ROUTING
const offlineFallbackPage = "/offline.html";

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("install", function (event) {
  console.log("[PWA Builder] Install Event processing");

  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      console.log("[PWA Builder] Cached offline page during install");

      if (offlineFallbackPage === "/offline.html") {
        return cache.add(new Response("TODO: Update the value of the offlineFallbackPage constant in the serviceworker."));
      }

      return cache.add(offlineFallbackPage);
    })
  );
});

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request).catch(async function (error) {
      console.error("[PWA Builder] Network request Failed. Serving offline page " + error);
      const cache = await caches.open(CACHE);
        return await cache.match(offlineFallbackPage);
    })
  );
});

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("refreshOffline", async function () {
  const offlinePageRequest = new Request(offlineFallbackPage);
  const response = await fetch(offlineFallbackPage);
    const cache = await caches.open(CACHE);
    console.log("[PWA Builder] Offline page updated from refreshOffline event: " + response.url);
    return await cache.put(offlinePageRequest, response);
});