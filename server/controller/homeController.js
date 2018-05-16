module.exports.index = async (ctx, next) => {
    // let config = ctx.config || {};    
    const name = ctx.request.body.name || 'frank';    
    ctx.logger.error('error in welcome');
    await ctx.render('welcome',{name});
};
