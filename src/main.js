// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vuex from 'vuex'
//管理登陆状态
import store from './vuex/store'
Vue.use(vuex)
import 'babel-polyfill'
//引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//注册element组件
Vue.use(ElementUI);
//引入公共样式 公共部门放入入口不要和其它组件耦合在一起
import '@/style/common.scss';
//footer
import Footer from '@/components/Footer';
//注册footer组件
Vue.component('Footer-bar', Footer);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created(){
  	store.state.isLogin = localStorage.getItem('isLogin')

  }
})
