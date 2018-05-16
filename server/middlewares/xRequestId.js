
module.exports = () => async function addRequestId(ctx, next) {
    if (!ctx.x_request_id) {
      ctx.x_request_id = `${process.pid}-${new Date().getTime()}`;
    }
    await next();
  };
  