#!/usr/bin/env node

const require = require("esm")(module /*, options*/);
require("../src/cli").cli(process.argv);
