const npm = require('npm');
const TscWatchClient = require('tsc-watch/client');
const watch = new TscWatchClient();

// menti: tsc-watch reference: https://www.npmjs.com/package/tsc-watch
npm.load(() => {
  // // use first_success when need
  watch.on('success', () => {
    npm.commands["run-script"](['babel'], () => {});
  });

  watch.on('compile_errors', () => {
    // we don't want to stop babel compilation on minor issues like unused variable
    npm.commands["run-script"](['babel'], () => {});
  });

  watch.start('--project', './tsconfig.build.json');
});