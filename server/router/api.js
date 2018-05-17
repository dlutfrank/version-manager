const router = require('koa-router')({prefix:'/v1'})
const api = require('../controller/apiController');
router.get('/check',api.check);
module.exports = router;
