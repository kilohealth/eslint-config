const baseConfig = require('../../release.config');

const config = {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    [
      'semantic-release-slack-bot',
      {
        notifyOnSuccess: false,
        notifyOnFail: false,
        markdownReleaseNotes: true,
        branchesConfig: [
          {
            pattern: 'master',
            notifyOnSuccess: true,
            notifyOnFail: false,
          },
        ],
      },
    ],
  ],
};

export default config;
