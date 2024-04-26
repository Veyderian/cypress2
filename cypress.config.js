const { defineConfig } = require('cypress')
//
module.exports = defineConfig( {
  projectId: "pua588",
  e2e: {
  // baseUrl: "https://qamid.tmweb.ru/client/index.php",
    baseUrl: "https://petstore.swagger.io/v2",
    retries: 0,
    //supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});