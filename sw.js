const CACHE = 'pharmacy-v8';
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(['/','/index.html','/css/style.css','/js/app.js','/js/auth.js','/js/data.js','/js/nav.js','/js/calc.js','/js/admin.js','/manifest.json']))); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); });
