const router = require('koa-router')()
const home = require('../controller/homeController');
router.get('/',home.index);
router.get('/ticket',async(ctx,next)=>{
    ctx.body = 'success';
});
module.exports = router;
