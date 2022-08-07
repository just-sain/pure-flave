/** @type {import('next').NextConfig} */

// eslint-disable-next-line no-undef
module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['static.wixstatic.com']
	},
	webpack(config) {
		config.module.rules.push({
			loader: '@svgr/webpack',
			issuer: /\.[jt]sx?$/,
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [
						{
							name: 'preset-default',
							params: { override: { removeViewBox: false } }
						}
					]
				},
				titleProp: true
			},
			test: /\.svg$/
		});

		return config;
	}
};
