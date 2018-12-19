// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import 'iview/dist/styles/iview.css';
// import VueI18n from 'vue-i18n'
import './common/rem.js'
import axios from 'axios'
import service from './assets/js/service'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  preLoad: 1.3,
  error:'../assets/images/6.jpg',
  loading:'../assets/images/6.jpg',
  attempt: 1
})
Vue.prototype.$http= axios
Vue.use(Mint)
Vue.config.productionTip = false
Vue.prototype.service = service;
axios.defaults.baseURL = service.BASE_URL;
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面meta */
  if(to.meta.content){
    let head = document.getElementsByTagName('head');
    let meta = document.createElement('meta');
    meta.content = to.meta.content;
    head[0].appendChild(meta)
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
})
router.afterEach(route => {
  // 从路由的元信息中获取 title 属性
  if (route.meta.title) {
      document.title = route.meta.title;
      // 如果是 iOS 设备，则使用如下 hack 的写法实现页面标题的更新
      if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
          const hackIframe = document.createElement('iframe');
          hackIframe.style.display = 'none';
          hackIframe.src = '/path/fixIosTitle.html?r=' + Math.random();
          document.body.appendChild(hackIframe);
          setTimeout(() => {
              document.body.removeChild(hackIframe)
          }, 300)
      }
  }
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
