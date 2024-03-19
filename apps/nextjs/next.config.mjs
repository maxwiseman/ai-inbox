import { fileURLToPath } from "url";
import withSerwistInit from "@serwist/next";
import _jiti from "jiti";

const withSerwist = withSerwistInit({
  // Note: This is only an example. If you use Pages Router,
  // use something else that works, such as "service-worker/index.ts".
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
});

const jiti = _jiti(fileURLToPath(import.meta.url));

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
jiti("./src/env");
jiti("@ai-inbox/auth/env");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@ai-inbox/api",
    "@ai-inbox/auth",
    "@ai-inbox/db",
    "@ai-inbox/ui",
    "@ai-inbox/validators",
  ],

  experimental: {
    serverComponentsExternalPackages: [
      "@extractus/article-extractor",
      "@serwist/next",
    ],
  },

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default withSerwist(config);
