import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
import './permission'
import '@/styles/index.scss' // global css

import $momentMini from 'moment-mini'
import App from './App.vue'
import ElementPlus from 'element-plus'
import axiosReq from '@/utils/axiosReq'
import commonMixin from '@/mixins/commonMixin'
import components from '@/components'
import { createApp } from 'vue'
import directive from '@/directive'
import elementMixin from '@/mixins/elementMixin'
import errorLog from '@/hooks/errorLogHook'
import router from './router'
import routerMixin from '@/mixins/routerMixin'
import store from './store'
import svgIcon from '@/icons/SvgIcon.vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)

app.use(store)

app.use(ElementPlus, {
  size: localStorage.getItem('size') || 'mini',
  locale: localStorage.getItem('language') === 'zhCn' && zhCn
})

app.mixin(elementMixin)
app.mixin(commonMixin)
app.mixin(routerMixin)
app.config.globalProperties.$axiosReq = axiosReq

app.component('svg-icon', svgIcon)
app.config.globalProperties.$momentMini = $momentMini

directive(app)

components(app)

errorLog(app)

app.use(router).mount('#app')
