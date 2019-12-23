Package.describe({
  name: 'wildhart:env-var-set',
  version: '0.0.1',
  summary: 'Add .set() method to Meteor.EnvironmentVariable()',
  git: 'https://github.com/wildhart/meteor.envVarSet',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.mainModule('env-var-set.js', 'server');
});
