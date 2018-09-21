<template>
	<div id="popup" v-if="popupFlag">
		<div class="con" v-if="popupOneFlag">
			<img class="bgimg" src="../../assets/img/caidai01.png" />
			<div class="popup_one">
				<h3>恭喜您，拼团成功</h3>
				<p>您将免费获得这件商品</p>
				<button type="button" 
			     v-clipboard:copy="message"
			     v-clipboard:success="onCopy"
			     v-clipboard:error="onError"
			     v-show="copyFlag">复制淘口令</button>
			     <div class="copySuccess"v-show="!copyFlag">
			     	复制成功，请打开淘宝完成购买，订单确认收货后将全额返还实付金额至支付宝账户
			     </div>
			</div>
			<div class="close" @click="closePopup"></div>
		</div>
		<div class="con" v-if="popupTwoFlag">
			<div>
				<img class="bgimg" src="../../assets/img/caidai.png" />
				<div class="userImg">
					<img src="https://img.alicdn.com/tfscom/i1/2944846611/TB1FDdGckSWBuNjSszdXXbeSpXa_!!0-item_pic.jpg_q60" />
				</div>
			</div>
			<div class="popup_two">
				<div>
					<p>谢谢你为我助力<span>6.3</span>元</p>
					<p>你也可以免费拿哦</p>
					<p>快去挑选心仪商品吧~</p>
					<button>我也要免费拿</button>
				</div>
			</div>
			<div class="close" @click="closePopup"></div>
		</div>
		<div class="con" v-if="popupSevenFlag">
			<div class="popup_two">
				<div class="download">
					<p>下载省钱达人APP并登录，才能为他助力哦~</p>
					<p>下载省钱达人APP并登录</p>
					<p>为他助力并有海量好货0元拿</p>
					<button @click="downloadApp">一键下载</button>
				</div>
			</div>
			<div class="close" @click="closePopup"></div>
		</div>
		<div class="con"  v-if="popupThreeFlag">
			<div class="popup_three">
				<h3>活动规则</h3>
				<p>1.参与活动的商品仅限本活动页面【拼团商品】区商品。</p>
				<p>2.选择您心仪的商品，邀请好友一起拼团，在24小时之内好友为你助力拼到0元就可以免费获得商品。</p>
				<p>3.拼团成功后，需复制淘口令前往淘宝下单购买，拼团订单确认收货后，全额返还实付金额至支付宝账户。</p>
				<p>4.如用户发生退货，则订单失效。</p>
			</div>
			<div class="close" @click="closePopup"></div>
		</div>
		<div class="con" v-if="popupFourFlag">
			<div class="popup_four">
				<h3>免单攻略</h3>
				<p>1.选择您心仪的商品，邀请好友一起拼团，只要在24小时之内好友为你助力拼到0元就可以免费获得商品。</p>
				<p>2.拼团成功后，前往淘宝下单购买，确认收货后平台会将购买付的钱全额返给您，相当于您免费获得这件商品。</p>
				<p>3.每个好友拼团减掉的金额随机，参与好友越多越容易成功。</p>
				<p>4.对于一个拼团活动每个好友只能参与一次。</p>
			</div>
			<div class="close" @click="closePopup"></div>
		</div>
		<div class="con" v-if="popupFiveFlag">
			<div class="popup_five">
				<p>下载天天省钱快报APP</p>
				<p>海量好货0元拿</p>
				<button @click="downloadApp">一键下载</button>
			</div>
			<div class="close" @click="closePopup"></div>
		</div>
		<div class="con" v-if="popupSixFlag">
			<div class="popup_two">
				<div>
					<p style="margin-top:0.1rem ;">新用户才能为他助力哦~</p>
					<p>你也可以免费拿，快去挑选</p>
					<p>心仪商品吧~</p>
					<button>我也要免费拿</button>
				</div>
			</div>
			<div class="close" @click="closePopup"></div>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default {
		name:'popup',
		props:["choice","message"],
		data () {
			return {
				popupFlag:false,//是否显示弹框
				popupOneFlag:false,//拼团成功 立即领取
				popupTwoFlag:false,//助力好友弹框
				popupThreeFlag:false,//活动规则
				popupFourFlag:false,//免单攻略
				popupFiveFlag:false,//用户没下载app，引导下载去拼团
				popupSixFlag:false,//老用户助力弹窗
				popupSevenFlag:false,//帮助好友砍价   是否有app
				copyFlag:true,//复制淘口令是否成功
			}
		},
		created () {
		},
		mounted () {
			
		},
		watch: {
			choice () {
				if(this.choice != '0'){
					this.popupFlag = true
					document.documentElement.style.overflow='hidden';
					document.body.style.overflow='hidden';//禁止滑动
					if(this.choice == 1){//1去领取 2助力好友拼团 3活动规则 4免单攻略 5用户拼团下载app
						this.popupOneFlag = true
					}
					if(this.choice == 2){
						this.popupTwoFlag = true
					}
					if(this.choice == 3){
						this.popupThreeFlag = true
					}
					if(this.choice == 4){
						this.popupFourFlag = true
					}
					if(this.choice == 5){
						this.popupFiveFlag = true
					}
					if(this.choice == 6){
						this.popupSixFlag = true
					}
					if(this.choice == 7){
						this.popupSevenFlag = true
					}
				}
			}
		},
		methods: {
			onCopy: function (e) {
		      console.log('你刚刚复制: ' + e.text)
		      this.copyFlag = false;
		    },
		    onError: function (e) {
		      console.log('无法复制文本！')
		    },
			closePopup () {
				this.popupFlag = false;
				this.copyFlag = true;
				this.popupOneFlag = false;
				this.popupThreeFlag = false;
				this.popupTwoFlag = false;
				document.documentElement.style.overflow='scroll';
				document.body.style.overflow='scroll';//开启滑动
				this.$emit('reset', 0)
			},
			downloadApp () {
				var _this = this;
				if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){
					console.log("iphone")
					window.location.href='https://itunes.apple.com/cn/app/id1391124408?mt=8';
				}
				if(navigator.userAgent.match(/android/i)){
//					_this.$router.push({name:'guideDownloadApp',params:{'token':'00000'}})
					if(navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger"){
						//微信
						_this.$router.push({name:'guideDownloadApp',params:{'token':'00000'}})
					}else if (navigator.userAgent.toLowerCase().match(/WeiBo/i) == "weibo"){
						//新浪微博
					}else if (navigator.userAgent.toLowerCase().match(/QQ/i) == "qq"){
						//qq空间
					}else{
						window.location.href='http://apitbk.726p.com/everydaysave_android.apk';
					}
				}
			}
		},
	}
</script>

<style scoped="scoped" lang="scss">
	.popup_one,.popup_two,.popup_three,.popup_four,.popup_five{
		position: relative;
		button{
			width: 1.415rem;
			height: 0.27rem;
			border-radius: 0.135rem;
			background: #FF2E2E;
			font-size: 0.14rem;
			color: #FFFFFF;
			border: none;
			display: block;
			margin: auto;
			margin-top: 0.3rem;
			margin-bottom: 0.23rem;
		}
	}
	#popup{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.7);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
	}
	.con{
		width: 2.775rem;
		border-radius: 0.12rem;
		background: #FFFFFF;
		position: absolute;
		top: 2rem;
		left: 0;
		right: 0;
		margin: auto;
	}
	.popup_one{
		font-size: 0.15rem;
		color: #FF2E2E;
		line-height: 0.3rem;
		h3{
			margin-top: 0.3rem;
		}
		h3,p{
			text-align: center;
		}
		.copySuccess{
			margin-top: 0.3rem;
			margin-bottom: 0.23rem;
			color: #333333;
			font-size: 0.14rem;
			text-align: center;
			line-height: 0.27rem;
		}
	}
	.close{
		width: 0.34rem;
		height: 0.34rem;
		background: url(../../assets/img/close.png) no-repeat;
		background-size:100% 100%;
		position: absolute;
		bottom: -0.475rem;
		left: 0;
		right: 0;
		margin: auto;
	}
	.popup_two{
		p{
			text-align:center; 
			&:nth-of-type(1){
				font-size: 0.12rem;
				color: #333333;
				margin-top: 0.35rem;
				line-height: 0.3rem;
				span{
					color: #FF2E2E;
				}
			}
			&:nth-of-type(2),&:nth-of-type(3){
				color: #333333;
				font-size: 0.15rem;
				line-height: 0.3rem;
			}
		}
		button{
			margin-top: 0.225rem;
			-webkit-animation: start 1.5s infinite ease-in-out;
			box-shadow:0 0.08rem 0.13rem rgba(87,13,5,0.19);
		}
		.download{
			p:nth-of-type(1){
				margin-top: 0.12rem;
				margin-bottom: 0.1rem;
			}
		}
	}
	.popup_three,.popup_four{
		width: 2.66rem;
		margin: auto;
		margin-bottom: 0.16rem;
		h3{
			color: #333333;
			font-size: 0.16rem;
			margin-top: 0.15rem;
			padding-bottom: 0.08rem;
			border-bottom: 0.01rem solid #333333;
			text-align: center;
			margin-bottom: 0.11rem;
			font-weight: bold;
		}
		p{
			font-size: 0.13rem;
			color: #333333;
			margin-bottom: 0.13rem;
			line-height: 0.21rem;
		}
	}
	.popup_five{
		p{
			color: #333333;
			font-size: 0.16rem;
			line-height: 0.3rem;
			text-align: center;
			&:nth-of-type(1){
				margin-top: 0.2rem;
			}
		}
	}
	.con{
		.bgimg{
			position: absolute;
			width: 3.285rem;
			top: -0.575rem;
			left: -0.26rem;
		}
		.userImg{
			width: 0.52rem;
			height: 0.52rem;
			border-radius: 50%;
			border: 0.02rem solid #FFFFFF;
			overflow: hidden;
			position: absolute;
			left: 0;
			right: 0;
			top: -0.275rem;
			margin: auto;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
@-webkit-keyframes start {
	0% {transform: scale(0.9);}
	50% {transform: scale(1);}
	100% {transform: scale(0.9);}
}
@-moz-keyframes start {
	0% {transform: scale(0.9);}
	50% {transform: scale(1);}
	100% {transform: scale(0.9);}
}
@keyframes start {
	0% {transform: scale(0.9);}
	50% {transform: scale(1);}
	100% {transform: scale(0.9);}
}
</style>