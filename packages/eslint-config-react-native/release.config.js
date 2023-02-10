const config = require('../../release.config');

module.exports = {
  ...config,
  plugins: [
    ...config.plugins,
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
