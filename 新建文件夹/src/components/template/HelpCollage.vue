<template>
	<div id="helpCollage">
		<h3>已有5人帮你拼团</h3>
		<ul>
			<li>
				<div class="left">
					<img src="https://img.alicdn.com/tfscom/i1/2944846611/TB1FDdGckSWBuNjSszdXXbeSpXa_!!0-item_pic.jpg_q60" />
					<div>
						<h4>天生傲娇</h4>
						<p>08-14&ensp;&ensp;16:00</p>
					</div>
				</div>
				<div class="right">
					拼掉<span>10.66</span>元
				</div>
			</li>
			<li>
				<div class="left">
					<img src="https://img.alicdn.com/tfscom/i1/2944846611/TB1FDdGckSWBuNjSszdXXbeSpXa_!!0-item_pic.jpg_q60" />
					<div>
						<h4>天生傲娇</h4>
						<p>08-14&ensp;&ensp;16:00</p>
					</div>
				</div>
				<div class="right">
					拼掉<span>10.66</span>元
				</div>
			</li>
			<li>
				<div class="left">
					<img src="https://img.alicdn.com/tfscom/i1/2944846611/TB1FDdGckSWBuNjSszdXXbeSpXa_!!0-item_pic.jpg_q60" />
					<div>
						<h4>天生傲娇</h4>
						<p>08-14&ensp;&ensp;16:00</p>
					</div>
				</div>
				<div class="right">
					拼掉<span>10.66</span>元
				</div>
			</li>
			
			<li>
				<div class="left">
					<img src="https://img.alicdn.com/tfscom/i1/2944846611/TB1FDdGckSWBuNjSszdXXbeSpXa_!!0-item_pic.jpg_q60" />
					<div>
						<h4>天生傲娇</h4>
						<p>08-14&ensp;&ensp;16:00</p>
					</div>
				</div>
				<div class="right">
					拼掉<span>10.66</span>元
				</div>
			</li>
			<li>
				<div class="left">
					<img src="https://img.alicdn.com/tfscom/i1/2944846611/TB1FDdGckSWBuNjSszdXXbeSpXa_!!0-item_pic.jpg_q60" />
					<div>
						<h4>天生傲娇</h4>
						<p>08-14&ensp;&ensp;16:00</p>
					</div>
				</div>
				<div class="right">
					拼掉<span>10.66</span>元
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped="scoped" lang="scss">
#helpCollage{
	width: 3.25rem;
	height: 1.825rem;
	background: rgba(255,208,46,0.17);
	border-radius: 0.1rem;
	h3{
		font-size: 0.14rem;
		color: #914E1E;
		line-height: 0.3rem;
		padding-left: 0.065rem;
		border-bottom:0.005rem solid #BFBFBF;
	}
	ul{
		padding:0 0.07rem;
		height: 1.52rem;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
		li{
			display:flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 0.13rem;
			.left{
				display: flex;
				align-items: center;
				img{
					width: 0.35rem;
					height: 0.35rem;
					border-radius: 50%;
					margin-right: 0.13rem;
				}
				div{
					h4{
						color: #545454;
						font-size: 0.14rem;
					}
					p{
						font-size: 0.12rem;
						margin-top: 0.07rem;
					}
				}
			}
			.right{
				font-size: 0.14rem;
				color: #545454;
				span{
					color: #FF2E2E;
				}
			}
		}
	}
}
</style>