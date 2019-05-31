const Koa = require('koa');
const render = require('koa-ejs');
const path = require('path');
const serve = require('koa-static');
const router = require('./src/router/index.js');
var sass = require('koa-sass');
const session = require('./src/middleware/session')


const app = new Koa();

app.use(session)

app.use(sass({
  src:  __dirname + '/src/assets/scss',
  dest: __dirname + '/src/assets/',
  debug: true
}));

app.use(serve(path.join(__dirname, 'src/assets')));

render(app, {
	root: path.join(__dirname, 'src/views'),
	layout: 'layout',
	viewExt: 'html',
	cache: false,
	debug: true
});

//app.use(router.middleware())
router(app)
// app.use(async ctx => {
//   await ctx.render('index', {user: 'username'});
// });

app.listen(3001);