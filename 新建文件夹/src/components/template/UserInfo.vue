<template>
	<div id="user_info">
		<img src="https://img.alicdn.com/tfscom/i1/2944846611/TB1FDdGckSWBuNjSszdXXbeSpXa_!!0-item_pic.jpg_q60" />
		<div>
			<span>{{userName}}</span>
			<p>{{ttl}}</p>
		</div>
		<button>活动规则</button>
	</div>
</template>

<script>
	export default {
		name:'userInfo',
		props: {
			userName: String,
			ttl: String
		}
	}
</script>

<style scoped="scoped" lang="scss">
	#user_info{
		display: flex;
		align-items: center;
		margin-bottom: 0.15rem;
		img{
			width: 0.4rem;
			height: 0.4rem;
			border-radius: 50%;
		}
		div{
			margin-left: 0.09rem;
			span{
				color: #545454;
				font-size: 0.14rem;
			}
			p{
				font-size: 0.15rem;
				color:#474747;
				width: 2.18rem;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
				margin-top: 0.02rem;
			}
		}
		button{
			width: 0.53rem;
			height: 0.19rem;
			border-radius: 0.05rem;
			border: 0.01rem solid #FF2E2E;
			font-size: 0.11rem;
			color:#FF2E2E;
			background: #FFFFFF;
			margin-left: 0.06rem;
		}
	}
	
</style>