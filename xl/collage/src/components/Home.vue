<template>
	<div id="container">
		<home-banner></home-banner>
		<scroll-top></scroll-top>
		<tabs></tabs>
	</div>
</template>

<script>
	import Tabs from './homeAssembly/Tabs'
	import HomeBanner from './homeAssembly/HomeBanner'
	import ScrollTop from './homeAssembly/ScrollTop'
	
	export default {
		name:'home',
		components:{
			Tabs,//选项卡
			HomeBanner,//homeBanner
			ScrollTop,//animation
		},
		data () {
			return {
			}
		},
		methods:{
			
		},
		mounted () {
		},
		beforeDestroy () {
			
		}
	}
</script>

<style scoped="scoped" lang="scss">
#container{
	background: #F4F4F4;
	height: 100%;
}
</style>