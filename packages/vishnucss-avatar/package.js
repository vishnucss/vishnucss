Package.describe({
	name: 'vishnucss:avatar',
	version: '1.1.0-rc.2',
	summary: 'Avatar toolkit with modern css.',
	git: 'https://github.com/vishnucss/vishnu.git',
	documentation: 'README.md'
})

Package.onUse((api) => {
	api.versionsFrom('METEOR@1.0')
	api.addFiles([
		'dist/vishnu.avatar.css'
	], 'client')
})
