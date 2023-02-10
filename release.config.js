export default {
  extends: 'semantic-release-monorepo',
  branches: ['master', { name: 'beta', prerelease: true }],
  repositoryUrl: 'https://github.com/kilohealth/eslint-config',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [{ type: 'build', release: 'patch' }],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            { type: 'feat', section: 'Features' },
            { type: 'fix', section: 'Bug Fixes' },
            { type: 'build', section: 'Build System / Dependencies' },
            { type: 'chore', section: 'Chore' },
            { type: 'refactor', section: 'Refactor' },
            { type: 'docs', hidden: true },
            { type: 'perf', hidden: true },
            { type: 'style', hidden: true },
            { type: 'test', hidden: true },
          ],
        },
      },
    ],
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'yarn.lock'],
      },
    ],
  ],
};
