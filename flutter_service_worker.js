'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a40199a643cd9349f36124c817b0ec11",
"version.json": "c060abc9d7e6d111dbac9065829e0a03",
"index.html": "132fb32575eb096a2798e8ac2b23c2c2",
"/": "132fb32575eb096a2798e8ac2b23c2c2",
"main.dart.js": "18422ffc957129864633e1ed4b4addd3",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5572678995164e5c006d90f31fd92d01",
"assets/AssetManifest.json": "2286acfa15e51061e13cf5f03d274c32",
"assets/NOTICES": "2ed4b341af1debd6efbfebdf6e9b4b4b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0ac22c7806e3ccd3c65e29a8a6f2241f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "991963da7a66720e6080c36d8f6f426e",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass.frag": "86932129b315ef24e14c1b86d2970983",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_arbitrary.frag": "cf147b62117ce1f904fd04535deefa9e",
"assets/packages/glass/images/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/assets/images/office7.png": "d68541cdc36fe85e2627d458ba47e26b",
"assets/lib/assets/images/mmgsll_b.png": "9dc0c83a0a7ffb67bf7ad59f2c4e72f1",
"assets/lib/assets/images/freight_forwarding.jpg": "d5d2f6b71e526704b9c7fe9192c83265",
"assets/lib/assets/images/office6.png": "918e618438bab1e49c51d56c8c2d2053",
"assets/lib/assets/images/office4.png": "0c6087556511ea267402c71f325d95ad",
"assets/lib/assets/images/mmgsll_w.png": "d0329c85782f6093229586ee41b2a700",
"assets/lib/assets/images/office5.png": "6b80da7ddae9d9a9199258967472c8c1",
"assets/lib/assets/images/industrial.jpg": "208012c850fecab5c6feba1d30efd6b1",
"assets/lib/assets/images/mmseaways_logo.png": "1e3ce4790a99fb081f94e4042b5752b9",
"assets/lib/assets/images/ship.jpg": "b48843910561ff37a3b08aa991a94844",
"assets/lib/assets/images/ship.png": "4ba1a2f3fb082959dfd494b81fcbdf4e",
"assets/lib/assets/images/office3.png": "2688ea392ebe240b2bf19d03736fb974",
"assets/lib/assets/images/customs_clearance.jpg": "8a751196aaf9e54b86701b7816f15dcb",
"assets/lib/assets/images/power.jpg": "5591617c4340dfa7097bd545d16ee416",
"assets/lib/assets/images/outlook.png": "46e941f4359daa252b4db06903fedbf4",
"assets/lib/assets/images/dealership.webp": "2ff0ff7ecabaf440216475f96aa92c3a",
"assets/lib/assets/images/mmgsll_logo.png": "8295f3472f775a6a94e5992fc5b99519",
"assets/lib/assets/images/logistic_services.webp": "4c208623a7ce3c0d043765347acb5996",
"assets/lib/assets/images/telecommunications.jpg": "6513264b16753d7df732e20d00c40753",
"assets/lib/assets/images/real_estate.jpg": "6166001f477599d2ffbbf715649187b1",
"assets/lib/assets/images/mmg_logo.png": "762803233a36bbf8e144fd7c3dd2a457",
"assets/lib/assets/images/logistic_services.jpg": "30ab5833bbc1b43e97b2739dde230e62",
"assets/lib/assets/images/mmg_logo_w.png": "0e71d086be0cb0fa1f6e74af86859616",
"assets/lib/assets/images/containers.jpg": "ab62aafb5325706f29c9e7ddf29d2eb2",
"assets/lib/assets/images/mmg_logo_b.png": "b15503905f50e51d6416fa7b521ce695",
"assets/lib/assets/images/mmgsll_w%2520(new).png": "e1479986ba8cb45ad554b2e1e9381435",
"assets/lib/assets/images/logo.png": "7b4ae405328d6e835dd0e1a0626d1aab",
"assets/lib/assets/images/fisheries.jpg": "2f53b0740f34bb78e6c4bed0fb8b7d1e",
"assets/lib/assets/images/linkedin.png": "1ab447ad550549860accead38f806a58",
"assets/lib/assets/images/investment.webp": "db301615a6b5d4d46ab6fc348dd36858",
"assets/lib/assets/images/mmgsll_new_logo.png": "3b32280e21afb3d73808fa84e8bc28e8",
"assets/lib/assets/images/whatsapp.png": "cfd67ca3caccbc5ce393eff43f8e2363",
"assets/lib/assets/images/mmgsll_b%2520(new).png": "45cfd84796e75ba93a3ae266876cfe4a",
"assets/lib/assets/images/mmgsll_logo_white.png": "253b03b1d2de4973b30117623a61d3f2",
"assets/lib/assets/shaders/text_shader.frag": "c2e9effcd8cca92fd8cffe54e34d9729",
"assets/lib/assets/masks/text_mask.glsl": "b9572730e52e1d92470267d28c911f6b",
"assets/AssetManifest.bin": "845aa7e6cb52607028f441168a98a458",
"assets/fonts/MaterialIcons-Regular.otf": "ddc305b9736da4f903377c4a5be6425d",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
