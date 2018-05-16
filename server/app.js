const Koa = require('koa');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');
const debug = require('debug')('vmanager');
const app = new Koa();
const init = require('./core/init');
init(app);
const config = app.config || {};
const port =  config.port || 3000 ;
app.listen(port,()=>{
    debug('server listen on %s', port);
});
module.exports = app;
