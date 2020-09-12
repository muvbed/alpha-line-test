import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'hash',
	routes: [
		{
			path: '/', 
			name: 'enter',
			component: () => import('./views/enter.vue')
		},
		{
			path: '/mainframe',
			name: 'mainframe',
			component: () => import('./views/mainframe.vue')
		}
	]
})

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
