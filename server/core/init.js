const debug = require('debug')('vmanager');
const views = require('koa-views');
const path = require('path');
const koaBody = require('koa-body');
const koaStatic = require('koa-static')

const config = require('../config');
const xRequestId = require('../middlewares/xRequestId');
const router = require('../router');

module.exports = function init(app){
    app.config = config;
    app.use(async(ctx,next)=>{
        if(!ctx.config){
            ctx.config = config;
        }
    });
    debug('[init] add config on ctx, config: %j', config);
    app.use(xRequestId());
    debug('[init] add x_request_id on ctx');

    app.use(koaBody());
    app.use(koaStatic(path.join(__dirname,'../../public')));
    app.use(views(path.join(__dirname, '../../views'), {
        extension: 'ejs'
    }));

    app.use(router.routes());
    app.use(router.allowedMethods());
    debug('[init] add router');
}