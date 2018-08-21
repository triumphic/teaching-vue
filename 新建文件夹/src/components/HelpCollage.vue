<template>
	<div id="container">
		<div class="collage_con">
			<user-info :userName = 'userName' :ttl = 'title'></user-info>
			<collage-commodity></collage-commodity>
			<div class="collage">
				<p>已拼<span>66.66</span>元，还差<span>36</span>元</p>
				<button>助力好友拼团</button>
				<div>还剩<span>22:37:24</span>过期，快来拼团吧</div>
			</div>
			<partake-collage></partake-collage>
		</div>
		<collage-recommend></collage-recommend>
	</div>
</template>

<script>
	import UserInfo from './template/UserInfo'
	import CollageCommodity from './template/CollageCommodity'
	import PartakeCollage from './template/PartakeCollage'
	import CollageRecommend from './template/CollageRecommend'
	export default {
		name:'invitingRegiment',
		components:{
			UserInfo,
			CollageCommodity,
			PartakeCollage,
			CollageRecommend
		},
		data () {
			return {
				userName:"高秀丽",
				title:"哈哈哈哈"
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	#container{
		min-height: calc(100% - 0.11rem);
		background: #FF2E2E;
		padding-top: 0.11rem;
		padding-bottom: 0.25rem;
	}
	.collage_con{
		width: 3.25rem;
		background: #FFFFFF;
		border-radius: 0.12rem;
		margin: auto;
		padding: 0.15rem 0.1rem;
	}
	.collage{
		margin-top: 0.22rem;
		margin-bottom: 0.15rem;
		p{
			text-align: center;
			color: #333333;
			font-size: 0.16rem;
			span{
				font-size: 0.16rem;
				color: #FF2E2E;
			}
		}
		button{
			width: 2.63rem;
			height: 0.34rem;
			display: block;
			margin: auto;
			margin-top: 0.11rem;
			border-radius: 0.17rem;
			background: #FF2E2E;
			font-size: 0.16rem;
			color: #FFFFFF;
			border: none;
		}
		div{
			font-size: 0.13rem;
			margin-top:0.135rem ;
			text-align: center;
			color: #545454;
		}
	}
</style>!