import { fileURLToPath } from "url";
import _jiti from "jiti";

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
    serverComponentsExternalPackages: ["@extractus/article-extractor"],
  },

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default config;
