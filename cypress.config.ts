import { defineConfig } from "cypress";

export default defineConfig({
chromeWebSecurity: false,
defaultCommandTimeout: 15000,
e2e: {
    baseUrl: 'https://www.saucedemo.com',
    chromeWebSecurity: false,
  },
  experimentalWebKitSupport: true,
});
