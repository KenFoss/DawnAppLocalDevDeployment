/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "monorepo-template",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const storage = await import("./infra/storage");
    const aurora = await import("./infra/aurora");

    return {
      AuthDb: aurora.database,
    };
  },
});
