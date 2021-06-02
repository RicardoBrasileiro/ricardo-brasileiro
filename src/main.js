import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';

import Home from './components/Home.vue';
import Knowledges from './components/Knowledges.vue';
import Projects from './components/Projects.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/knowledges',
      component: Knowledges
    },
    {
      path: '/projects',
      component: Projects
    },
  ]
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
