git clone https://github.com/bdd-training-clt/clt-bdd-ui.git into your workspace directory (example: open git bash and type /c/users/**your-username**/workspace)
cd clt-bdd-ui
npm install --chromedriver_skip_download=true
node ./node_modules/selenium-cucumber-js/index.js -s ./step-definitions
