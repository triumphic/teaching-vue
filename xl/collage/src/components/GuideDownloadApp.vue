<template>
	<div id="guideDownloadApp">
		<div class="download-top">如需下载，请复制此网址并使用浏览器打开</div>
		<div class="appLink"><span>http://apitbk.726p.com/everydaysave_android.apk</span></div>
		<button type="button" 
			     v-clipboard:copy="message"
			     v-clipboard:success="onCopy"
			     v-clipboard:error="onError"
			     class="button">一键复制</button>
		<div class="logo">
			<img src="../assets/img/logo.png" />
			<span>天天省钱快报</span>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	import { Toast } from 'mint-ui';
	export default {
		name:'guideDownLoadApp',
		data () {
			return {
				message: 'http://apitbk.726p.com/everydaysave_android.apk',
			}
		},
		computed:{
//			...mapState(['token'])
		},
		mounted () {
			console.log(this.token)
		},
		methods : {
			onCopy: function (e) {
		      Toast({
				  message: '复制成功 ',
				  duration: 1500
				});
		    },
		    onError: function (e) {
		      Toast({
				  message: '无法复制文本！',
				  duration: 1500
				});
		    },
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.download-top{
		text-align: center;
		width: 100%;
		padding-top:1.7rem ;
		color: #333333;
		font-size: 0.16rem;
		margin-bottom:0.14rem ;
	}
	.appLink{
		text-align: center;	
		span{
			color: #333333;
			font-size: 0.12rem;
			padding-bottom: 0.05rem;
			border-bottom: 0.01rem solid rgba(51,51,51,0.11);
		}
	}
	.button{
		width: 2rem;
		height: 0.4rem;
		background: #FB3D38;
		border-radius: 0.2rem;
		border: none;
		color: #FFFFFF;
		font-size: 0.16rem;
		display: block;
		margin: auto;
		margin-top:0.32rem ;
	}
	.logo{
		text-align: center;
		img{
			width: 0.76rem;
			height: 0.76rem;
			margin: auto;
			margin-top:1.3rem ;
			margin-bottom:0.15rem ;
		}
		span{
			color: #FB1042;
			font-size: 0.13rem;
		}
	}
</style>