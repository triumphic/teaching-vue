<template>
	<div class="container">
		<div class="collage" v-if="collageIngFlag">
			<p class="ing">已拼<span>{{goCollageData.total_pop_price}}</span>元，还差<span>{{goCollageData.left_money}}</span>元</p>
			<button>邀请好友拼团</button>
			<div>还剩&ensp;<span>{{hour}}:{{minute}}:{{second}}</span>&ensp;过期，快来拼团吧</div>
		</div>
		<div class="collage" v-if="!collageIngFlag && collageSuccessFlag">
			<p class="success">恭喜您，拼团成功</p>
			<button @click.prevent='goReceive'>去领取</button>
			<div>淘宝下单，收货后全额返利，0元获得此商品</div>
		</div>
		<div class="collage" v-if="!collageIngFlag && !collageSuccessFlag">
			<button class="fail" @click="goHomeList">免费拿更多</button>
			<div>拼团已过期，去重新拼团或挑选其他商品吧~</div>
		</div>
		<popup :choice = 'choice' @reset="popupReset" :message = 'message'></popup>
	</div>
</template>

<script>
	import Popup from './Popup'
	export default {
		name:'goCollage',
		components:{
			Popup//弹窗
		},
		props:{
			'goCollageData':Object,
			'message':String
		},
		data () {
			return {
				collageSuccessFlag: false,
				collageIngFlag: true,
				choice:'0',
				intDiff: parseInt(0),//倒计时总秒数量
				countDownTime: null,
				day:"00",//天
				hour: "00",//时
				minute:"00",//分
				second:"00",//秒
			}
		},
		created () {
			
		},
		mounted () {
		},
		watch: {
			message () {
				
			},
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
			goReceive () {
				this.choice='1';
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
			}
		},
	}
</script>

<style scoped="scoped" lang="scss">
.collage{
	margin-top: 0.22rem;
	margin-bottom: 0.15rem;
	.ing{
		text-align: center;
		color: #333333;
		font-size: 0.16rem;
		span{
			font-size: 0.16rem;
			color: #FF2E2E;
		}
	}
	.success{
		font-size: 0.16rem;
		color: #FF2E2E;
		text-align: center;
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
		position:relative;
		-webkit-animation: start 1.5s infinite ease-in-out;
		box-shadow:0 0.08rem 0.13rem rgba(87,13,5,0.19);
	}
	/*.fail{
		background: #FF2E2E;
		color: #FFFFFF;
		-webkit-animation: start 1.5s infinite ease-in-out;
	}*/
	div{
		font-size: 0.13rem;
		margin-top:0.135rem ;
		text-align: center;
		color: #545454;
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