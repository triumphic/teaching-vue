<template>
	<div id="orderEditing">
		<ul>
			<li>
				<label>订单编号</label>
				<input  type="tel"  placeholder="请输入订单编号"/>
				<span>修改</span>
			</li>
			<li>
				<label>真实姓名</label>
				<input  type="text"  placeholder="请输入真实姓名"/>
			</li>
			<li>
				<label>支付宝账号</label>
				<input  type="text"  placeholder="请输入支付宝账号"/>
			</li>
			<li>
				<label>手机号</label>
				<input  type="tel"  :value="phoneNum" disabled="disabled"/>
			</li>
			<li>
				<label>验证码</label>
				<input  type="tel"  placeholder="请输入验证码"/>
				<div>获取验证码</div>
			</li>
		</ul>
		<button>提交</button>
		<p class="describe">填写淘宝订单编号以及支付宝账号，您会在确认收货后24小时之内收到全额退款</p>
	</div>
</template>

<script>
	export default {
		name:'orderEditing',
		data () {
			return {
				phoneNum: '18710002314'
			}
		},
		mounted () {
			document.title = '填写订单编号';
			this.phoneNum = this.phoneNum.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
			console.log(this.phoneNum)
		},
		updated () {
		}
	}
</script>

<style scoped="scoped" lang="scss">
#orderEditing{
	background: #FFFFFF;
	ul{
		margin:0 0.15rem;
		li{
			height: 0.5rem;
			border-bottom: 0.005rem solid #9C9C9E;
			line-height: 0.5rem;
			font-size: 0.15rem;
			color: #333333;
			label{
				display: inline-block;
				width: 1.195rem;
			}
			input{
				color: #666666;
				font-size: 0.15rem;
				background: #FFFFFf;
				border: none;
				-webkit-user-select:text !important;
			}
			&:first-of-type{
			    display: flex;
			    justify-content: space-between;
			    align-items: center;
			    span{
			    	font-size: 0.12rem;
			    	color: #333333;
			    }
			}
			&:last-of-type{
				display: flex;
				align-items: center;
				input{
					width: 1.48rem;
				}
				div{
					width: 0.76rem;
					height: 0.27rem;
					font-size: 0.12rem;
					color: #FB3D38;
					border-radius: 0.05rem;
					border: 0.01rem solid #FB3D38;
					line-height: 0.29rem;
					text-align: center;
				}
			}
		}
	}
}
button{
	width: 2rem;
	height: 0.4rem;
	border-radius: 0.2rem;
	background: #FB3D38;
	border: none;
	font-size: 0.15rem;
	color: #FFFFFF;
	display: block;
	margin: auto ;
	margin-top: 0.62rem;
}
.describe{
	font-size: 0.15rem;
	color: #333333;
	line-height: 0.25rem;
	width: 3.14rem;
	margin: auto;
	margin-top: 0.47rem;
	text-align: center;
}
</style>