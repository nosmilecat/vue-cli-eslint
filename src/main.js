import 'babel-polyfill'
import App from './App'
import router from './router'
import axios from '@/request'
import api from '@/request/api.js'
import filters from '@/filters'
import '@/assets/css/reset.scss'
import '@/assets/iconfont/iconfont.css'
// import '@/assets/css/index.scss'   // 配置项已经引用，无需再次引用
import '@/assets/css/iconfont.css'
import echarts from 'echarts'
import utils from './utils'
import store from './store/index'
import MetaInfo from 'vue-meta-info'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'

Vue.use(preview)
Vue.use(MetaInfo)
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

Vue.prototype.$api = api
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.prototype.$utils = utils
Vue.prototype.$store = store

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

new Vue({
  el: '#app',
  router,
  store,
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  },
  components: {
    App
  },
  template: '<App/>'
})
