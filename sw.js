---
layout: null
---

var cacheName = 'wandk-cache-v1.0';
var urlsToCache = [
    '/',
    '/index.html',      
    '/blog/',
    '/content/manifest/webapp.json',
    '/content/manifest/manifest_notpush.json',
    '/content/img/logo.png',
    '/content/img/IMG_0185.jpg',
    '/js/bootstrap.min.js',
    '/js/ekko-lightbox.js',
    '/js/front.js',
    '/js/imagesloaded.pkgd.min.js',
    '/js/jquery.cookie.js',
    '/js/jquery.min.js',
    '/js/jquery.scrollTo.min.js',
    '/js/main.js',
    '/js/masonry.pkgd.min.js',
    '/js/owl.carousel.min.js',
    '/css/bootstrap.min.css',
    '/css/bootstrap.min.css.map',
    '/css/custom.css',
    '/css/font-awesome.min.css',
    '/css/fonts/fontawesome-webfont.eot',
    '/css/fonts/fontawesome-webfont.svg',
    '/css/fonts/fontawesome-webfont.ttf',
    '/css/fonts/fontawesome-webfont.woff',
    '/css/fonts/fontawesome-webfont.woff2',
    '/css/fonts/FontAwesome.otf',
    '/css/helper.css',
    '/css/owl.carousel.css',
    '/css/owl.theme.css',
    '/css/owl.transitions.css',
    '/css/style.blue.css'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event) {
  console.log('Finally active. Ready to start serving content!');  
});
 
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
