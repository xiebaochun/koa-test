const Router = require('koa-trie-router')

const fetchUser = require('./routers/fetchUser')

const router = new Router()

module.exports = () => {
	router.get(fetchUser())
	return router.middleware()
}
