'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4cf7bb480b6f04d4a9a0020e976c86ec",
"assets/AssetManifest.bin.json": "ae284bb34ddfc009e42f5e5e4eb82bbb",
"assets/AssetManifest.json": "17dd725bec5c9e0d596159a5083c471e",
"assets/assets/icon/appIcon.png": "201415093fb3431e75a951aaa2873f0b",
"assets/assets/icon/close.png": "9246c941fb1dd18dd049b347e30b2073",
"assets/assets/icon/close.svg": "f20850ae3b09edf989375f7a82b249f3",
"assets/assets/icon/github.png": "8a514b19e35eabd928c5019b9ff05048",
"assets/assets/icon/instagram.png": "d7164fdcd8a34adb780c3e9e819780eb",
"assets/assets/icon/linked.png": "79dbea309a0ce72feba962234545b78c",
"assets/assets/icon/menu.png": "c04d5c38116eebbb7b4ce3e467486b76",
"assets/assets/icon/menu.svg": "ea0511640a9e0a57c8fa87bedb0bdf9a",
"assets/assets/icon/skills/android-studio.png": "9ec33d4cf993b0688f3b17a62aea7d88",
"assets/assets/icon/skills/css.png": "6911651d5ff91162917ee88e5b218cd0",
"assets/assets/icon/skills/figma.png": "1cd0266a8d23996d67f74db36860574f",
"assets/assets/icon/skills/firebase.png": "59928059177e6e2405c7c5504c4fffc3",
"assets/assets/icon/skills/flutter.png": "4bd6977f8f4a59546f466082c1528e49",
"assets/assets/icon/skills/git.png": "139eeb4203f718a1b44145838dddc90c",
"assets/assets/icon/skills/html.png": "2c79aae5a34b98fe904b03b14b5923c0",
"assets/assets/icon/skills/js.png": "63cf9c6f8153aef1e884b7ae2815e06d",
"assets/assets/icon/skills/mongodb.png": "fa4d389d553220cb9298c8022dceca61",
"assets/assets/icon/skills/node-js.png": "cb22dbe84ea2bb6caff22c24df430dd4",
"assets/assets/icon/skills/postman.png": "26be8326c0a5f5eb7a69f11e21066073",
"assets/assets/icon/skills/python.png": "9ba70a18c5b4325e23bde7100a1af528",
"assets/assets/icon/skills/vscode.png": "173e47ec8898f4c0749d1615f53d6421",
"assets/assets/images/Animation.json": "902676e1680d5dace4b1ebfc3e910a67",
"assets/assets/images/appstore.webp": "eb15ea410abcc2c8177f4dba08c7d83a",
"assets/assets/images/classhub.webp": "ae1aab0372e9a6fa6d218778fb9ce84d",
"assets/assets/images/dp.webp": "08eb56274a48c9de52752fa3658f4bc2",
"assets/assets/images/portfolio.png": "c6f5095dbc92878c8f36b69ab9fa2af0",
"assets/assets/images/portfolio.webp": "08eb56274a48c9de52752fa3658f4bc2",
"assets/assets/images/portfolio2.webp": "08eb56274a48c9de52752fa3658f4bc2",
"assets/assets/images/portfolion.webp": "bd92af2b639470045dd31c2e5136518b",
"assets/assets/images/portfolionew.webp": "792191149d6465eafefee95f10850c76",
"assets/assets/images/portfolioold.webp": "1f41edf068508e2f5cfb7dd0f282b702",
"assets/assets/images/profile.webp": "cd8fffb802883970e309feba600bfbd0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "cc0ce7de8e6806c4b7e459a8c2fe1df3",
"assets/NOTICES": "f0189c9a0bcfa984a4e7d22c20f1263d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "327a3060925e525407f4f2747a4712d6",
"canvaskit/skwasm_st.wasm": "809674c831d83f7f9c71d9dd93771403",
"favicon.png": "035175f8fa7673be7584ef27a21ef017",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "54e4c0fb7e042bf2dccaee02ff11e8cd",
"icons/Icon-192.png": "c7762031e5a28ba72359a8b5078944fb",
"icons/Icon-512.png": "00e8963a0b9ebc68eea1f53159794a08",
"icons/Icon-maskable-192.png": "c7762031e5a28ba72359a8b5078944fb",
"icons/Icon-maskable-512.png": "00e8963a0b9ebc68eea1f53159794a08",
"index.html": "05fd6191f4faa77d0c9e4d2e0266cd80",
"/": "05fd6191f4faa77d0c9e4d2e0266cd80",
"main.dart.js": "e5bf87a4c9e0898bde1de600fa572b98",
"manifest.json": "d65829d0c534dfb4cda3718689822dc1",
"version.json": "5670f615c138715ebea69960167a6c5a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
