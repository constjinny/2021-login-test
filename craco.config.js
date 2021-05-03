const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@components": "./src/components",
          "@features": "./src/features",
          "@assets/*": "./src/assets/*",
          "@data/*": "./src/data/*",
          "@api/*": "./src/api/*",
          "@app/*": "./src/app/*",
        },
      },
    },
  ],
};
