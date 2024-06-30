const { LHCIConfig } = require("./config/lighthouse/lighthouse.ts");

const urls = LHCIConfig.LHCI_MONITORING_PAGE_NAMES.map(
  (name) => `https://ncnc.vercel.app${LHCIConfig.getLhciUrlFromPageName(name)}`,
);

module.exports = {
  ci: {
    collect: {
      startServerCommand: "yarn run start",
      url: urls,
      numberOfRuns: 1,
      settings: {
        preset: "desktop",
      },
    },
    upload: {
      target: "filesystem",
      outputDir: "./lhci_reports/desktop",
      reportFilenamePattern: "%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%",
    },
  },
};
