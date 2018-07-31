var cacheName = 'cache-v2';

/* 
* Files to be served from cache
*/
var files = [
    './',
    './index.html',
    './css/styles.css',
    '/js/notify.js',
    '/js/app.js',
    '/js/networkChange.js',
    './manifest.json',
    './images/icon_16.png',
    './images/icon_32.png',
    './images/icon_192.png',
    './images/icon_256.png',
    './images/icon_512.png',
    "https://use.fontawesome.com/releases/v5.2.0/css/all.css"
];


self.addEventListener('install', (event) => {
    console.info('Installing Service Worker');
    event.waitUntil(
        caches.open(cacheName)
            .then((cache) => {
                return cache.addAll(files)
                    .then(() => {
                        console.info('Sucessfully Cached');
                        return self.skipWaiting();
                    })
                    .catch((error) => {
                        console.error('Failed to cache', error);
                    })
            })
    );
});

self.addEventListener('activate', (event) => {
    console.info('Activating service worker');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== cacheName) {
                        return caches.delete(cache);
                    }
                })
            );
        }).then(function () {
            return self.clients.claim();
        })
    );
});

self.addEventListener('fetch', (event) => {
    console.info('Event: Fetch');
    var request = event.request;
    event.respondWith(
        /**
         * Add caching strategy here
         * e.g. Cache first
         */
        caches.match(request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(request).then((response) => {
                var responseToCache = response.clone();
                caches.open(cacheName).then((cache) => {
                    cache.put(request, responseToCache).catch((err) => {
                        console.warn(request.url + ': ' + err.message);
                    });
                });
                return response;
            });
        })
    );
});

self.addEventListener('push', (event) => {
    console.info('Event: Push', event);
    event.waitUntil(self.registration.showNotification("abcd", {body: 'xyz'}));
});