const router = require('koa-router')()
const api = require('../controller/apiController');
router.get('/check',api.check);
module.exports = router;
