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
    "url": "webpack-runtime-a29df19dc269bc0eb030.js"
  },
  {
    "url": "styles.4cb0ab3d6e5ec14a4f40.css"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js"
  },
  {
    "url": "framework-eb684e3e828ad13b3940.js"
  },
  {
    "url": "app-d0734429ae27b043a899.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "7814f4d02d462d1563e677ba62952871"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-a95b272f8c25b9a8a758.js"
  },
  {
    "url": "polyfill-0a316007f9add4c2ffeb.js"
  },
  {
    "url": "cb1608f2-c7cd2f7954ea61eaa880.js"
  },
  {
    "url": "a9a7754c-817f330c695617819e0e.js"
  },
  {
    "url": "c1b84638563245626ff3baf5cb956f26cf52d901-5bb50d1869309875d482.js"
  },
  {
    "url": "b7bd831077c72f2643cdb0e3427093bfc5e144e4-d3726898a215319d6038.js"
  },
  {
    "url": "c169b6902947a77fec05096cb4da441bfcc3d6f1-d6ed225867e15ff2ce70.js"
  },
  {
    "url": "component---src-pages-index-js-a04a16977576170f33f9.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "b60fbde21964d17a05e398230ea0f50a"
  },
  {
    "url": "page-data/sq/d/1693975798.json",
    "revision": "623e74c59b138f66970c2ff37363315e"
  },
  {
    "url": "page-data/sq/d/2559146422.json",
    "revision": "24857dea79fdeed033463f61caae1406"
  },
  {
    "url": "page-data/sq/d/3004019075.json",
    "revision": "15b1a104e8637c222076f27d8c429e98"
  },
  {
    "url": "page-data/sq/d/3610408210.json",
    "revision": "d7c414d8e48815cde886dcfa33e38c97"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "94d2281d141b7ea50d223e9dd2e1e2da"
  },
  {
    "url": "component---src-templates-project-template-js-a71dd1dae69230963d91.js"
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
    "url": "component---src-pages-projects-js-ee7b0da73b7f3e4f6628.js"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "479fb28808af6da061e1eeba83c46138"
  },
  {
    "url": "page-data/sq/d/1605814322.json",
    "revision": "ac952cc92c758b4de051c76baa3651fa"
  },
  {
    "url": "page-data/projects/no-que-x/page-data.json",
    "revision": "4a10f4a77eb48dbe9f463bd893fe3652"
  },
  {
    "url": "page-data/projects/shareby/page-data.json",
    "revision": "cdc1d9cd491584f04bf7a545d6cc885f"
  },
  {
    "url": "page-data/projects/sieve-ai/page-data.json",
    "revision": "5aaa45fe484372b7412f7cf9b0756fd0"
  },
  {
    "url": "page-data/projects/test-gen-cli/page-data.json",
    "revision": "0c5b623561e6dac73b6426ce469b7b7c"
  },
  {
    "url": "component---src-pages-blogs-js-3ad708eda9f2c5330c86.js"
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
    "revision": "c432e7cbfeede4c1dda74b97b69c8ce9"
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
  if (!resources || !(await caches.match(`/app-d0734429ae27b043a899.js`))) {
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
