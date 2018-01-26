<template>
	<div id="app">
		<top></top>
		<leftnav></leftnav>
		<router-view></router-view>
		<router-view name="lefts"></router-view>
	</div>
</template>
<script src="/static/js/easydialog.min.js" ></script>
<script>
	import top from './components/top';
	import leftnav from './components/left';
	
	import './assets/css/iconfont/iconfont.css'
	
	
	
	
	
	export default {
		name: 'app',
		components: {
			leftnav,top
		}
	}
</script>

<style>
body{font-family: "微软雅黑";}
</style>