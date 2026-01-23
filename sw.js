self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  clients.claim();
});

self.addEventListener("fetch", (event) => {
  // pass-through – nie cache'ujemy Wix
});
