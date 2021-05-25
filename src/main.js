import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'

import '/public/styles/_main.scss'
import '/public/styles/_fonts.scss'
import '/public/styles/navigation-bar-styles.scss'
import '/public/styles/application-styles.scss'
import '/public/styles/about-me-styles.scss'
import '/public/styles/my-skills-styles.scss'
import '/public/styles/work-experience-styles.scss'
import '/public/styles/education-styles.scss'
import '/public/styles/contacts-styles.scss'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')