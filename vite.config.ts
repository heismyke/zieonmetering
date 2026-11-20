import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { seoPlugin } from "./build/seo-plugin";
import { SITE } from "./src/seo/meta";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [vue(), seoPlugin(env.VITE_SITE_URL || SITE.url)],
    server: {
      host: "127.0.0.1",
      port: 5175,
      strictPort: true,
    },
  };
});
