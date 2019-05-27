import Router from 'koa-trie-router'


import fetchUser from './routers/fetchUser'

const router = new Router()

export default () => {
	router.get('/fetchUser', fetchUser())

	export router.middleware()
}
