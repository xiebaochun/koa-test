const Router = require('koa-trie-router');

let router = new Router();

router
  .use(function(ctx, next) {
    console.log('* requests')
    return next()
  })
  .get(function(ctx, next) {
    console.log('GET requests')
    return next()
  }).
  get('/', async (ctx, next) => {
  	//await ctx.render('pages/index', {user: 'username'})
  	//return next()
  })
  .put('/foo', function (ctx) {
    ctx.body = 'PUT /foo requests'
  })
  .post('/bar', function (ctx) {
    ctx.body = 'POST /bar requests'
  })
module.exports = router