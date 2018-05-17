const Koa = require('koa');
const debug = require('debug')('vmanager');
const app = new Koa();
const init = require('./core/init');
const TAG = '[APP]'
init(app);
process.on('uncaughtException', function (err) {
    const log = app.logger;
    const env = process.env.NODE_ENV;
    if (env !== 'test') {
        log.fatal(TAG, 'process uncaughtException', err);
        process.exit(1);
    }
});
const config = app.config || {};
const port =  config.port || 3000 ;
app.listen(port,()=>{
    debug('server listen on %s', port);
});
module.exports = app;
