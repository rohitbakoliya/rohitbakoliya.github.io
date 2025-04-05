/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-875ee06d378c2707ed06.js"
  },
  {
    "url": "styles.fdd4a941b12438ba166e.css"
  },
  {
    "url": "styles-0ec71dd62c66cb95665c.js"
  },
  {
    "url": "framework-70a2455d4a4320e97528.js"
  },
  {
    "url": "app-42b0bb17406b9ec69f55.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "19f41c78394442ac1d3faed308d396b6"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-c33574fbc14be9513f80.js"
  },
  {
    "url": "polyfill-f88fa77a70307660e63d.js"
  },
  {
    "url": "cb1608f2-6efbe64548a64a54813f.js"
  },
  {
    "url": "a9a7754c-5e833ff171031632f215.js"
  },
  {
    "url": "c1b84638563245626ff3baf5cb956f26cf52d901-e063b13ff89c36cc8987.js"
  },
  {
    "url": "b7bd831077c72f2643cdb0e3427093bfc5e144e4-41aa2809e6868fcbd503.js"
  },
  {
    "url": "c169b6902947a77fec05096cb4da441bfcc3d6f1-1169d838ea61b1cc4470.js"
  },
  {
    "url": "component---src-pages-index-js-53eec5ef55d0de1862f1.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "b60fbde21964d17a05e398230ea0f50a"
  },
  {
    "url": "page-data/sq/d/1693975798.json",
    "revision": "8385cb5709556b6f6264816f6073bbc8"
  },
  {
    "url": "page-data/sq/d/2559146422.json",
    "revision": "24857dea79fdeed033463f61caae1406"
  },
  {
    "url": "page-data/sq/d/3004019075.json",
    "revision": "e77bf25995ae7711d5d38a360f560040"
  },
  {
    "url": "page-data/sq/d/3610408210.json",
    "revision": "1ea045e17bec662937d3186e641748fc"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "22cc01d8c29283d83f5d5e4646cceca5"
  },
  {
    "url": "component---src-templates-project-template-js-d84f411ca783a99410eb.js"
  },
  {
    "url": "page-data/projects/chefs-arena/page-data.json",
    "revision": "ac41c63e7f03cdf2abf90da111b96141"
  },
  {
    "url": "page-data/projects/covid-19-india/page-data.json",
    "revision": "06aca9203d0b12fdccbeead2a235a44e"
  },
  {
    "url": "component---src-pages-projects-js-fb6c44259f97ccfd93c6.js"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "479fb28808af6da061e1eeba83c46138"
  },
  {
    "url": "page-data/sq/d/1605814322.json",
    "revision": "be90595d3a949f822289216fe04e257c"
  },
  {
    "url": "page-data/projects/no-que-x/page-data.json",
    "revision": "3a6f8da0dddc3d2cc1fcc14a4e0061bf"
  },
  {
    "url": "page-data/projects/shareby/page-data.json",
    "revision": "fcdfb0c46fa07f8829c9085db4b772a2"
  },
  {
    "url": "page-data/projects/sieve-ai/page-data.json",
    "revision": "419c74151f7ead27c909e32f881cd720"
  },
  {
    "url": "page-data/projects/test-gen-cli/page-data.json",
    "revision": "e7abec3bfb1c7cf296671120e442a98f"
  },
  {
    "url": "component---src-pages-blogs-js-6f54e43a6a12d386b7a8.js"
  },
  {
    "url": "page-data/blogs/page-data.json",
    "revision": "246ba5b9e930083d3f68a5de0489a4c2"
  },
  {
    "url": "page-data/sq/d/3975855023.json",
    "revision": "8fff38455947ee39cebe5bfb0ffb38f2"
  },
  {
    "url": "page-data/sq/d/744421611.json",
    "revision": "1bd069eb465b538973686261f28574b2"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "ec262f4ec9a0ee8ab018afe28bf1bb6a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-42b0bb17406b9ec69f55.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
