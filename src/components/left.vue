<template>
	<div class="main-left">
		<ul>
			<li>
				<router-link to="/"><i class="iconfont icon-trade"></i><span class="labelText">收银</span></router-link>
			</li>
			<li>
				<router-link to="/goods"><i class="iconfont icon-similarproduct"></i><span class="labelText">商品</span></router-link>
			</li>
			<li>
				<router-link to="/menber"><i class="iconfont icon-account"></i><span class="labelText">会员</span></router-link>
			</li>
			<li>
				<router-link to="/total"><i class="iconfont icon-data"></i><span class="labelText">统计</span></router-link>
			</li>
			<li>
				<router-link to="/setting"><i class="iconfont icon-set"></i><span class="labelText">设置</span></router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	
	
	
	.main-left {
		width: 5rem;
		float: left;
		background: #0A9AFF;
		height: 100%;
		position: absolute;
		z-index: 9999;
	}
	
	.main-left li {
		text-align: center;
		height: 70px;
	}
	
	.main-left li a {
		display: table;
		width: 32px;
		margin: 0 auto;
		color: #fff;
	}
	
	.main-left i {
		float: left;
		font-size: 26px;
	}
	
	.main-left .labelText {
		float: left;
	}
</style>