const log4js = require('koa-log4');
const logConfig = require('./logconfig');
const path = require('path');
log4js.configure(logConfig);

const logger = log4js.getLogger('server');
const httpLogger = log4js.koaLogger(log4js.getLogger('http'),{level:'auto'});
module.exports = {
    logger,
    httpLogger
}