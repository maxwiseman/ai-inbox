import type { PrecacheEntry } from "@serwist/precaching";
import { defaultCache } from "@serwist/next/browser";
import { installSerwist } from "@serwist/sw";

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents -- its fine
declare const self: ServiceWorkerGlobalScope & {
  // Change this attribute's name to your `injectionPoint`.
  // `injectionPoint` is an InjectManifest option.
  // See https://serwist.pages.dev/docs/build/inject-manifest/configuring
  __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call -- its ok
installSerwist({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- its ok
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
});
