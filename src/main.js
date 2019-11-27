// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// var data = { message: 'hi....this the my first Application' }
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app1',
  router,
  data: {
    message: '页面加载于 ' + new Date().toLocaleString(),
    test: '页面加载于111 ' + new Date().toLocaleString(),
    seen: true,
    todos: [
      { text: '学习C#' }, { text: '学习Vue' }, { text: '整个牛项目' }],
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').join('')
      }
    }
  }
})
vm.$data.seen = true
vm.$watch('message', function (newVal, oldVal) {
  console.log(newVal, oldVal)
})
