import Vue from 'vue'
import App from './App.vue'
// Importing Home.vue
import Home from './Home.vue'


//Use app-server to reference Home page
Vue.component('app-server', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
