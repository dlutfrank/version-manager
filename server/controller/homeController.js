module.exports.index = async (ctx, next) => {
    // let config = ctx.config || {};    
    const name = ctx.request.body.name || 'frank';    
    await ctx.render('welcome',{name});
};
