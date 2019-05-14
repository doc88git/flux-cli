#!/usr/bin/env node

const rq = require("esm")(module /*, options*/);
rq("../src/cli").cli(process.argv);
