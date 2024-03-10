const { themes } = require('prism-react-renderer');

const darkTheme = themes.dracula;

module.exports = {
	title: '2nf.it - The strange programmer',
	tagline: 'React components, snippets and humanity.',
	url: 'https://2nf.it',
	baseUrl: '/home',
	favicon: '/img/favicon.png',
	organizationName: '2nf',
	projectName: 'home',
	staticDirectories: ['static'],
	//
	// punto di partenza dei bottoni di github
	// LINK - https://buttons.github.io/
	//
	/*
	scripts: [
		{
			src: 'https://buttons.github.io/buttons.js',
			async: true,
			defer: true,
		}
	],
	*/
	themeConfig: {
		navbar: {
			logo: {
				alt: '2nf.it logo',
				src: '/img/logo.svg',
			},
			items: [
				{
					to: 'docs/welcome',
					activeBasePath: 'docs',
					label: 'docs',
					position: 'right',
				},
				/*{
					to: 'forms/welcome',
					activeBasePath: 'forms',
					label: 'Forms',
					position: 'right',
				},
				{
					to: '/storybook/',
					activeBasePath: 'storybook',
					label: 'Storybook',
					position: 'right',
				},*/
				{
					to: '/blog',
					activeBasePath: 'blog',
					label: 'Blog',
					position: 'right',
				},
				{
					to: '/showcase',
					activeBasePath: 'showcase',
					label: 'Showcase',
					position: 'right',
				},
			],
		},
		footer: {
			links: [
				{
					title: 'Community',
					items: [
						{
							label: 'GitHub',
							href: 'https://github.com/infinum',
							icon: 'github',
						},
						{
							label: 'Mail',
							href: 'mailto:giancarlo.ghigi@gmail.com',
							icon: 'mail',
						},
						{
							label: 'Facebook',
							href: 'https://facebook.com/infinumcom',
							icon: 'facebook',
						},
						{
							label: 'YouTube',
							href: 'https://youtube.com/infinumcom',
							icon: 'youtube',
						},
						{
							label: 'LinkedIn',
							href: 'https://linkedin.com/company/infinum/',
							icon: 'linkedin',
						},
						{
							label: 'Instagram',
							href: 'https://instagram.com/infinumcom/',
							icon: 'instagram',
						},
					],
				},
			],
			copyright: '(cc) 2024 - fork of infinium mit theme.',
		},
		algolia: {
			appId: 'CWB1S6U3C4',
			apiKey: 'cbae3fc769aee256328548eff1e91c1c',
			indexName: 'infinum_eightshift',
			startUrls: ['https://eightshift.com', 'https://eightshift.com/docs', 'https://eightshift.com/forms'],
			contextualSearch: false,
		},
		prism: {
			theme: darkTheme,
			additionalLanguages: ['php', 'scss', 'css'],
		},
		colorMode: {
			defaultMode: 'light',
			disableSwitch: true,
			respectPrefersColorScheme: false,
		},
		docs: {
			sidebar: {
				autoCollapseCategories: true,
			}
		},
		trailingSlash: false
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					sidebarCollapsible: true,
				},
				gtag: {
					trackingID: 'GTM-P5GG5DH',
					anonymizeIP: true,
				},
				theme: {
					customCss: [
						require.resolve('./css/base.css'),
						require.resolve('./css/style.css'),
					],
				},
				blog: {
					blogTitle: 'Tutorials and articles about Eightshift development kit',
					blogDescription: 'Tutorials and articles about Eightshift development kit',
					blogSidebarTitle: 'Latest posts',
					showReadingTime: true,
					postsPerPage: 9,
				},
				sitemap: {
					changefreq: 'weekly',
					priority: 0.5,
				},
			},
		],
	],

	plugins: [
		/*
		//
		// https://dev.to/shannonajclarke/using-tailwindcss-v3-in-docusaurus-in-5-steps-5c26
		//
		async function myPlugin(context, options) {
			return {
				name: "docusaurus-tailwindcss",
				configurePostCss(postcssOptions) {
					// Appends TailwindCSS and AutoPrefixer.
					postcssOptions.plugins.push(require("postcss-import"));
					postcssOptions.plugins.push(require("tailwindcss"));
					postcssOptions.plugins.push(require("autoprefixer"));
					return postcssOptions;
				},
			};
		},*/
		/*
				[
					'@docusaurus/plugin-content-docs',
					{
						id: 'forms',
						path: 'forms',
						routeBasePath: 'forms',
						sidebarPath: require.resolve('./sidebars-forms.js'),
					},
						],*/
	],

	customFields: {
		keywords: [
			'wordpress tools',
			'development tools',
			'wordpress project',
			'Gutenberg blocks',
			'development kit',
			'wordpress kit',
			'devkit'
		],
		image: 'img-why-boilerplate@2x.png',
	},
};
