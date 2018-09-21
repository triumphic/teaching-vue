<template>
	<div id="user_info">
		<img v-lazy="userImg"/>
		<div class="userInfo">
			<div class="userName">
				<span>{{userName}}</span>
				<button @click="goPupop">活动规则</button>
			</div>
			<p>我发现一件好货，帮忙拼团0元拿</p>
		</div>
		<popup :choice = 'choice' @reset="popupReset"></popup>
	</div>
</template>

<script>
	import Popup from './Popup'
	export default {
		name:'userInfo',
		components:{
			Popup//弹窗
		},
		props: {
			userName: String,
			userImg: String,
		},
		data () {
			return {
				choice:'0'
			}
		},
		methods: {
			goPupop () {
				this.choice='3';
			},
			popupReset (data) {
		     	this.choice=data;
		    }
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
		.userInfo{
			margin-left: 0.09rem;
			flex: 1;
			.userName{
				display:flex;
				align-items: center;
				justify-content: space-between;
				span{
					color: #545454;
					font-size: 0.14rem;
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
			p{
				font-size: 0.15rem;
				color:#474747;
				width: 2.18rem;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
				margin-top: 0.08rem;
			}
		}
	}
	
</style>