import { defineConfig } from "cypress";

export default defineConfig({
chromeWebSecurity: false,
defaultCommandTimeout: 15000,



  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
