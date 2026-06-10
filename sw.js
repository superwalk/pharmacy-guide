const CACHE = 'pharmacy-v1';
const ASSETS = [
  '/', '/index.html', '/css/style.css',
  '/js/app.js', '/js/auth.js', '/js/data.js', '/js/search.js', '/js/nav.js',
  '/js/compare.js', '/js/favorites.js', '/js/notes.js',
  '/data/drugs.json', '/data/diseases.json', '/data/guidelines.json', '/data/laws.json',
  '/manifest.json'
];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); });
