<template>
	<div id="collage_commodity">
		<router-link :to="{path:'/detail',query:{'goods_id':commodityDetail.goods_id,'is_coupon':commodityDetail.is_coupon,'time':new Date().getTime()}}">
			<img :src="commodityDetail.goods_img" />
			<div class="commodity">
				<p>{{commodityDetail.goods_title}}</p>
				<div><span><i>￥</i>{{commodityDetail.goods_price}}</span></div>
				<div><span>{{commodityDetail.over_num}}人已免费拿<i></i></span></div>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name:'collageCommodity',
		props:{
			'commodityDetail':Object
		},
		data () {
			return {
				
			}
		},
		mounted () {
		},
		watch: {
			commodityDetail () {
//				console.log(this.commodityDetail)
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	#collage_commodity{
		width:3.05rem;
		border-radius: 0.095rem;
		background: #F6F4F4;
		margin: auto;
		padding: 0.1rem;
		a{
			display: flex;
			align-items: center;
			img{
				width: 1rem;
				height: 1rem;
				border-radius: 0.1rem;
			}
		}
	}
	.commodity{
		width: 1.95rem;
		margin-left: 0.1rem;
		p{
			overflow:hidden; 
			text-overflow:ellipsis;
			display:-webkit-box; 
			/*! autoprefixer: off */
			 -webkit-box-orient: vertical;
			/* autoprefixer: on */
			-webkit-line-clamp:2; 
			width: 100%;
			font-size: 0.14rem;
			line-height: 0.2rem;
			color: #545454;
		}
		div{
			&:nth-of-type(1){
				margin-top:0.15rem ;
				span{
					font-size: 0.18rem;
					color: #FF2E2E;
					i{
						font-size: 0.14rem;
						margin-right: 0.02rem;
					}
				}
			}
			&:nth-of-type(2) {
				margin-top:0.05rem ;
				text-align: right;
				span{
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
	}
	
</style>