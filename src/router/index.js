const Router = require('koa-trie-router');
const mount = require('koa-mount');
const user = require('../modules/users');

let router = new Router();
//console.log(router);

module.exports = (app) => {
  router
  .use(function(ctx, next) {
    console.log('* requests')
    return next()
  })
  .use(mount('/user', user()))
  .get(function(ctx, next) {
    console.log('GET requests')
    return next()
  }).
  get('/', async (ctx, next) => {
    await ctx.render('pages/index', {user: 'username'})
    //return next()
  })
  .put('/foo', function (ctx) {
    ctx.body = 'PUT /foo requests'
  })
  .post('/bar', function (ctx) {
    ctx.body = 'POST /bar requests'
  })

  app.use(router.middleware())
}