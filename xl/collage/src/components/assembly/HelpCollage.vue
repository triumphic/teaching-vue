<template>
	<div id="helpCollage">
		<h3>已有{{friendsList.length}}人帮你拼团</h3>
		<ul>
			<li v-for="item in friendsList">
				<div class="left">
					<img  v-lazy="item.user_pic" />
					<div>
						<h4>{{item.name}}</h4>
						<p>{{item.create_time}}</p>
					</div>
				</div>
				<div class="right">
					拼掉<span>{{item.pop_price}}</span>元
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'helpCollage',
		propS: {
			friendsList: Array
		},
		data () {
			return {
				
			}
		},
		watch : {
			friendsList () {
//				console.log(this.friendsList)
			}
		},
		mounted () {
		}
	}
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