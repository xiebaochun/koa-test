
import Router from 'koa-trie-router'

const router = new Router()
export default () => {
	router.get('/:id', async (ctx, next) => {
		let result
		try{
			await controller(ctx, next)
		} catch (err){
			ctx.throw(500, err)
		}

		ctx.type = 'json'
		ctx.body = result
	})

	return router.middleware()
}