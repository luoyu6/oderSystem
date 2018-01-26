import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import goods from '@/components/goods'
import login from '@/components/login'


Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'index',
			components: {
				"default": index
			}
		},{
			path: '/goods',
			name: 'goods',
			components: {
				"lefts":goods
			}
		},{
			path: '/login',
			name: 'goods',
			components: {
				"lefts":login
			}
		}

	]
})