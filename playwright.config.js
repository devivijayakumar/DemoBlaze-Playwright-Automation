const { workers } = require("node:cluster");
const { trace } = require("node:console");


const config = ({
    testDir: './tests',   
    retries: 1,
    workers: 3,
    timeout: 60*1000,  
    expect: {
      timeout: 60*1000
    },
 //reporter: 'html',
  reporter:'html',
    projects: [
      /*{
      name: 'safari',
    use:{
      browserName: 'webkit',
      headless: true,
      screenshot: 'on',
      trace: 'on',
    },
  },*/
  {
    name: 'chrome',
use: {
  browserName: 'chromium',
  channel: 'chrome',     // ⭐ THIS OPENS REAL CHROME
  headless: false,
  screenshot: 'on',
  trace: 'on',
  video: 'retain-on-failure'
}
  },
  /*{
    name: 'firefox',
    use:{
      browserName: 'firefox',
      headless: true,
      screenshot: 'on',
      trace: 'on',
    },
  },*/
],  
  use: {
    // 📸 Screenshot for ALL tests
    screenshot: 'on',

    // 🎥 Video only if test fails
    video: 'retain-on-failure',

    // 🔍 Trace only on failure (very helpful debugging)
    trace: 'retain-on-failure',
    browserName: 'chromium',
    headless: false,   // ✅ correct place
  },
});

module.exports = config;

