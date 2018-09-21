<template>
	<div class="header">
		{{city}}{{name}}
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name:'indexHeader',
		computed: {
			...mapState(['city','name'])
		},
		mounted () {
			console.log(window.context)
		}
	}
</script>

<style scoped="scoped" lang="scss">
 @import '../../assets/commit/styl.scss';
 .header{
 	height: 0.44rem;
 	background: $bgColor;
 }
 /*@include firefox-message(".header");*/
</style>