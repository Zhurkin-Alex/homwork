import Vue from 'vue';
import App from './App.vue';
import routes from './router/routes';
// import store from './store'
import SimpleVueValidation from 'simple-vue-validator';

Vue.use(SimpleVueValidation);

new Vue({
  el: "#app-root",
  routes,
  
  render: h => h(App)
});