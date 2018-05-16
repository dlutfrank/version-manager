const debug = require('debug')('vmanager');
module.exports.check = async (ctx, next) => {
    debug('in api controller, x_request_id: %s',ctx.x_request_id);
    ctx.body = 'ok';
};
