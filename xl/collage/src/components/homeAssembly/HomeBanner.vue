<template>
	<div class="bannerHome">
		<img src="../../assets/img/homeBanner.png" class="homeBanner" />
		<img src="../../assets/img/wenhao.png" class="wenhao" @click="goPupop" />
		<p>点击心仪商品——邀请好友拼团——拼成包邮发货</p>
		<popup :choice = 'choice' @reset="popupReset"></popup>
	</div>
</template>

<script>
	import Popup from '../assembly/Popup'
	export default {
		name:'homeBanner',
		components:{
			Popup//弹框
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
.bannerHome{
	width: 100%;
	height: 0.66rem;
	background: linear-gradient(180deg, #F95D42, #FA2C36);
	position: fixed;
	padding-top: 0.14rem;
	top: 0;
	z-index: 2;
	.homeBanner{
		width: 2.15rem;
		height: 0.29rem;
		margin: auto;
	}
	p{
		color: #FFFFFF;
		font-size: 0.12rem;
		margin-top: 0.15rem;
		text-align: center;
	}
	.wenhao{
		width: 0.1rem;
		height: 0.1rem;
		position: absolute;
		top: 0.1rem;
		right: 0.1rem;
	}
}
</style>