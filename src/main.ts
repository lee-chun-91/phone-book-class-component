import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import { Icon, Button, Input, Form, FormItem, Table, TableColumn} from 'element-ui'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(Icon, Button, Input, Form, FormItem, Table, TableColumn);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
