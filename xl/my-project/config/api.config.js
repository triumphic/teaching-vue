const isPro = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
	baseUrl: isPro ? 'https://tbk.726p.com' : 'api'
}
