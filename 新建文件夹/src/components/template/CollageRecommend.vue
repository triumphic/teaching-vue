<template>
	<div id="collageRecommend">
		<h2><i></i>0元拼团精选</h2>
		<ul>
			<li>
				<img src="http://imgs.726p.com/tbk/upload/goodsImg2018-08-15/kx-5b7393c2bb0d0.jpg" />
				<div class="con">
					<p>百草味香芒蜜语麻薯210gx3袋台式点心芒果味</p>
					<div class="price">
						<div>
							<span>￥38元</span>
							<span>9810人已免费拿</span>
						</div>
						<button>点击0元拿</button>
					</div>
				</div>
			</li>
			<li>
				<img src="http://imgs.726p.com/tbk/upload/goodsImg2018-08-15/kx-5b7393c2bb0d0.jpg" />
				<div class="con">
					<p>百草味香芒蜜语麻薯210gx3袋台式点心芒果味</p>
					<div class="price">
						<div>
							<span>￥38元</span>
							<span>9810人已免费拿</span>
						</div>
						<button>点击0元拿</button>
					</div>
				</div>
			</li>
			<li>
				<img src="http://imgs.726p.com/tbk/upload/goodsImg2018-08-15/kx-5b7393c2bb0d0.jpg" />
				<div class="con">
					<p>百草味香芒蜜语麻薯210gx3袋台式点心芒果味</p>
					<div class="price">
						<div>
							<span>￥38元</span>
							<span>9810人已免费拿</span>
						</div>
						<button>点击0元拿</button>
					</div>
				</div>
			</li>
			<li>
				<img src="http://imgs.726p.com/tbk/upload/goodsImg2018-08-15/kx-5b7393c2bb0d0.jpg" />
				<div class="con">
					<p>百草味香芒蜜语麻薯210gx3袋台式点心芒果味</p>
					<div class="price">
						<div>
							<span>￥38元</span>
							<span>9810人已免费拿</span>
						</div>
						<button>点击0元拿</button>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped="scoped" lang="scss">
	#collageRecommend{
		width: 3.45rem;
		background: #FFFFFF;
		border-radius: 0.12rem;
		margin: auto;
		margin-top: 0.115rem;
		h2{
			color:#42210B;
			font-size: 0.17rem;
			vertical-align: middle;
			text-align: center;
			padding-top: 0.055rem;
			i{
				width: 0.175rem;
				height: 0.185rem;
				display: inline-block;
				background: url(../../assets/img/collage.png) no-repeat;
				background-size:100% ;
				vertical-align: bottom;
				margin-right: 0.045rem;
			}
		}
		ul{
			li{
				width: 3.25rem;
				margin: auto;
				display:flex;
				align-items: center;
				margin-top: 0.13rem;
				padding-bottom: 0.165rem;
				border-bottom: 0.005rem solid #9C9C9C;
				&:last-of-type{
					border-bottom: none;
				}
				img{
					border-radius: 0.1rem;
					width: 1rem;
					height: 1rem;
				}
				.con{
					margin-left: 0.1rem;
					p{
						font-size: 0.14rem;
						line-height: 0.2rem;
						color: #545454;
						overflow:hidden; 
						text-overflow:ellipsis;
						display:-webkit-box; 
						-webkit-box-orient:vertical;
						-webkit-line-clamp:2; 
					}
					.price{
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						margin-top: 0.2rem;
						div{
							span{
								display: block;
								&:nth-of-type(1){
									color: #9C9C9C;
									font-size: 0.13rem;
								}
								&:nth-of-type(2){
									color: #FF2E2E;
									font-size: 0.14rem;
									margin-top: 0.1rem;
								}
							}
						}
						button{
							background:#FF2E2E;
							width: 0.76rem;
							height: 0.27rem;
							color: #FFFFFF;
							border-radius: 0.05rem;
							font-size: 0.14rem;
							border: none;
						}
					}
				}
			}
		}
	}
</style>