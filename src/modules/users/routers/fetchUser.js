
const Router = require('koa-trie-router')

const router = new Router()

const controller = require('../controllers/fetchUser')

module.exports = () => {
	router.get('/:id', async (ctx, next) => {
		let result
		try{
			await controller(ctx, next)
		} catch (err){
			ctx.throw(500, err)
		}
		//console.log('??????')
		//console.log(result)
		// ctx.type = 'json'
		// ctx.body = result
	})

	return router.middleware()
}