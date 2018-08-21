<template>
	<div id="collage_commodity">
		<img src="http://imgs.726p.com/tbk/upload/goodsImg2018-08-15/kx-5b7393c2bb0d0.jpg" />
		<div class="commodity">
			<p>聪师傅冰皮麻薯夹心蛋糕整箱早餐食品面包糕点</p>
			<div><span><i>￥</i>99</span><span>9810人已免费拿<i></i></span></div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped" lang="scss">
	#collage_commodity{
		width:3.25rem;
		height: 1.155rem;
		border-radius: 0.095rem;
		background: #F6F4F4;
		margin: auto;
		display: flex;
		align-items: center;
		img{
			width: 1rem;
			height: 1rem;
			border-radius: 0.1rem;
			margin-left: 0.075rem;
		}
	}
	.commodity{
		width: 1.95rem;
		margin-left: 0.1rem;
		p{
			overflow:hidden; 
			text-overflow:ellipsis;
			display:-webkit-box; 
			-webkit-box-orient:vertical;
			-webkit-line-clamp:2; 
			width: 100%;
			font-size: 0.14rem;
			line-height: 0.2rem;
			color: #545454;
		}
		div{
			margin-top: 0.3rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			span:nth-of-type(1){
				font-size: 0.18rem;
				color: #FF2E2E;
				i{
					font-size: 0.14rem;
					margin-right: 0.02rem;
				}
			}
			span:nth-of-type(2){
				font-size: 0.14rem;
				color: #545454;
				vertical-align: middle;
				i{
					display: inline-block;
					width: 0.08rem;
					height: 0.14rem;
					background: url(../../assets/img/return.png) no-repeat;
					background-size:100% ;
					vertical-align: bottom;
					margin-left: 0.06rem;
				}
			}
		}
	}
	
</style>