module.exports = {
  // ** Config
  srcDir: 'src/',

  css: [
  // ** Transitions Routes
    'assets/main.css',
  ],
  
  // ** Headers of the page
  head: {
    title: 'frizadiga',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'frizadiga site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/hiu-favicon.png' }
    ]
  },
  
  // ** Customize the progress bar color
  loading: { color: '#35495e' },
  
  // ** Build configuration
  build: {
    // ** Run ESLint on save
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
