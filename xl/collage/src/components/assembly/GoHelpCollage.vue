<template>
	<div class="container">
		<div class="collage" v-if="collageIngFlag">
			<p>已拼<span>{{goCollageData.total_pop_price}}</span>元，还差<span>{{goCollageData.left_money}}</span>元</p>
			<button @click="goReceive(7)">助力好友拼团</button>
			<div>还剩&ensp;<span>{{hour}}:{{minute}}:{{second}}</span>&ensp;过期，快来拼团吧</div>
		</div>
		<div class="collage" v-if="!collageIngFlag && collageSuccessFlag">
			<div class="fail">好友已拼成，你也可以免费拿哦~</div>
			<button class="fail_button" @click.prevent='goHomeList'>我也要免费拿</button>
		</div>
		<div class="collage" v-if="!collageIngFlag && !collageSuccessFlag">
			<div class="fail">未在24小时内完成，拼团已过期</div>
			<button class="fail_button" @click="goHomeList">我也要免费拿</button>
		</div>
		<popup :choice = 'choice' @reset="popupReset"></popup>
	</div>
</template>

<script>
	import Popup from './Popup'
	import wexinPay from '../../assets/config/weixin-payment.js'
	export default {
		name:'goCollage',
		components:{
			Popup//弹窗
		},
		props: {
			'goCollageData':Object
		},
		data () {
			return {
				choice:'0',
				hour:'00',
				minute:'00',
				second:'00',
				intDiff: parseInt(0),//倒计时总秒数量
				countDownTime: null,
				collageSuccessFlag: false,
				collageIngFlag: true,
				token:'5b58535461d5b8275455dd910afb845275'
			}
		},
		mounted () {
			wexinPay("朋友",{'frident':'mu'},() => {
				console.log("成功")
			},() => {
				console.log("失败")
			})
			
		},
		watch:{
			goCollageData () {
//				console.log(this.goCollageData)
				this.intDiff = parseInt(this.goCollageData.remain_time);
				this.timer(this.intDiff);
				var status = this.goCollageData.status;//拼团状态 0失效 1有效 2成功
				if(status == 0){
					this.collageSuccessFlag = false;
					this.collageIngFlag = false;
				}else if(status == 1){
					this.collageSuccessFlag = false;
					this.collageIngFlag = true;
				}else if(status == 2){
					this.collageSuccessFlag = true;
					this.collageIngFlag = false;
				}
			}
		},
		methods: {
			goReceive (num) {
				this.choice=num;//2助力好友拼团  6老用户助力弹窗
			},
			popupReset (data) {
		     	this.choice=data;
		   },
		   timer(intDiff){
		   	//倒计时
		   		var _this = this;
			    this.countDownTime = setInterval(function(){
				    var day=0,
				        hour=0,
				        minute=0,
				        second=0;//时间默认值        
				    if(intDiff > 0){
				        day = Math.floor(intDiff / (60 * 60 * 24));
				        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
				        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
				        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
				    }else{
				    	clearInterval(this.countDownTime)
				    }
				    if (hour <= 9) hour = '0' + hour;
				    if (minute <= 9) minute = '0' + minute;
				    if (second <= 9) second = '0' + second;
				    _this.hour = hour;
				    _this.minute = minute;
				    _this.second = second;
				    intDiff--;
			    }, 1000);
			},
			goHomeList () {
				//去首页
				this.$router.push({path:'/'})
			},
			downloadApp () {
				var _this = this;
				if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){
					console.log("iphone")
					window.location.href='https://itunes.apple.com/cn/app/id1391124408?mt=8';
				}
				if(navigator.userAgent.match(/android/i)){
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
			},
			spellCutDown () {
				//砍价接口
				this.$axios({
					url:this.URL.BASEURL + this.URL.spellCutDown,
					method : "post",
					headers:{
						token:this.token
					},
					data : {
						goods_id:'00',//商品id
						group_id:'00',//团id
						open_id:'00',//微信open_id
						union_id:'00'//微信union_id
					}
				})
			}
		},
	}
</script>

<style scoped="scoped" lang="scss">
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
		-webkit-animation: start 1.5s infinite ease-in-out;
		box-shadow:0 0.08rem 0.13rem rgba(87,13,5,0.19);
	}
	div{
		font-size: 0.13rem;
		margin-top:0.135rem ;
		text-align: center;
		color: #545454;
	}
	.fail{
		font-size: 0.16rem;
		margin-bottom:0.175rem;
	}
	.fail_button{
		margin-bottom: 0.3rem;
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