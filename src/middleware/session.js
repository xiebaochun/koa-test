
let session = async (ctx, next) => {
	console.log(ctx)
	return next()
}

module.exports = session