#!/usr/bin/env node
/**
* WG-CLI - Widgrid Cli Module
*
* Please, check the ./config/config.js for the
* proper configuration in according to your needings.
*
* @Documentation:
* http://pipipipopopo.com
*
* @author:    Widgrid Core Team
* @copyright: Resultage (c) All Rights Reserved
*/
global.__basedir = __dirname;

const paths = require('./config/paths')
const call  = require(`${paths.LIB}/caller`).call();
