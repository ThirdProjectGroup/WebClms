module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '首页',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  plugins: [
    { src: '~/plugins/nuxt-swiper-plugin.js', ssr: false }
  ],
  css: [
    'swiper/dist/css/swiper.css'
  ],
 
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {

    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  plugins: [
    // ssr: Boolean (默认为 true) 如果值为 false，该文件只会在客户端被打包引入
    { src: '@/plugins/element-ui.js', ssr: true }
  ],
  build: {
    // 添加模块，配置只打包一次，减少应用bundle的体积
    vendor: ['element-ui']
  }
}

