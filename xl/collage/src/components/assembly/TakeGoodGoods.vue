<template>
	<div id="takeGoodGoods">
		<div class="h3">
			<h3>如何免费拿好货</h3>
			<span v-if="tianxieFlag" @click="goFillBill">去填写</span>			
		</div>
		<ul>
			<li>
				<img src="../../assets/img/haoyou.png" />
				<span>邀请好友拼团</span>
			</li>
			<li>
				<img src="../../assets/img/gouwuche.png" />
				<span>淘宝下单购买</span>
			</li>
			<li>
				<img src="../../assets/img/dingdan.png" />
				<span>填写订单编号</span>
			</li>
			<li>
				<img src="../../assets/img/tuikuan.png" />
				<span>全额退款</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'takegoodgoods',
		data () {
			return {
				tianxieFlag: true
			}
		},
		props:{
			takegoodgoods:String
		},
		mounted () {
			this.takeGood()
		},
		methods:{
			takeGood () {
				if(this.takegoodgoods == '0'){
					this.tianxieFlag = false
				}
				if(this.takegoodgoods == "1"){
					this.tianxieFlag = true
				}
			},
			goFillBill () {
				this.$router.push({path:'/orderEditing'})
			}
		},
		watch: {
			takegoodgoods () {
				if(this.takegoodgoods == '0'){
					this.tianxieFlag = false
				}
				if(this.takegoodgoods == "1"){
					this.tianxieFlag = true
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
#takeGoodGoods{
	width: 3.45rem;
	height: 1.215rem;
	background: #FFFFFF;
	border-radius: 0.12rem;
	margin: auto;
	margin-top: 0.1rem;
	.h3{
		padding: 0.1rem;
		padding-bottom: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.14rem;
		color: #914E1E;
		span{
			font-size: 0.12rem;
			&:after{
				content: "";
				display: block;
				width: 0.35rem;
				height: 0.01rem;
				background: #914E1E;
				position: relative;
				top: 0.02rem;
			}
		}
	}
}
ul{
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 0.14rem;
	li{
		width: 25%;
		text-align:center;
		position: relative;
		img{
			width: 0.51rem;
			height: 0.51rem;
			border-radius: 50%;
			margin: auto;
			margin-bottom: 0.1rem;
		}
		span{
			color: #333333;
			font-size: 0.11rem;
		}
		&:after{
			content: '';
			display: block;
			width: 0.15rem;
			height: 0.15rem;
			background: url(../../assets/img/xiayibu.png) no-repeat;
			background-size:100% ;
			position: absolute;
			top: 0.22rem;
			right: -0.075rem;
		}
		&:last-of-type:after{
			width: 0;
			height: 0;
		}
	}
}
</style>