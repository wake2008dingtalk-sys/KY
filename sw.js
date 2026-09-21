const CACHE_NAME = 'worktime-v1';
const ASSETS = [
  '/',
  '/index.html',
  'https://api.map.baidu.com/api?v=3.0&ak=JqOK6BELzHU0SGk8WDnURxZZTU44x20G'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request).catch(() => {
        // 离线时返回缓存的 index.html
        if (e.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
