<template>
	<div id="helpCollage" v-show="userList.length == 0?false:true">
		<h3>已有{{userList.length}}人参与拼团</h3>
		<div class="userList">
			<ul>
				<li v-for="item in userList">
					<img :src="item.user_pic" />
					<p>{{item.name}}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name:'partakeCollage',
		props:['userList'],
		data () {
			return {
				timeUser: null
			}
		},
		watch : {
			userList() {
				console.log(this.userList)
			}
		},
		methods:{
			animationTop () {
				var n = 0;
				var _this = this;
				var arr = _this.userList.slice(0,3);
				_this.userList = _this.userList.concat(arr);
				if(_this.userList != 0 ){
					_this.timeUser = setInterval(function () {
						n ++;
						$(".userList ul").animate({top: -0.42*n + "rem"},800,'linear',function (){
							if( n == _this.userList.length-3 ){
								n = 0;
								$(".userList ul").css("top",0)
							}
						});
					},2000)
				}
			}
		},
		mounted () {
			this.animationTop()
		},
		beforeDestroy () {
			clearInterval(this.timeUser)
		}
	}
</script>

<style scoped="scoped" lang="scss">
#helpCollage{
	width: 3.25rem;
	height: 1.66rem;
	background: rgba(255,208,46,0.17);
	border-radius: 0.1rem;
	h3{
		font-size: 0.14rem;
		color: #914E1E;
		line-height: 0.3rem;
		padding-left: 0.065rem;
		border-bottom:0.005rem solid #BFBFBF;
	}
	.userList{
		overflow: hidden;
		height: 1.3rem;
	}
	ul{
		padding:0 0.07rem;
		position: relative;
		li{
			display:flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 0.125rem;
			img{
				width: 0.295rem;
				height: 0.295rem;
				border-radius: 50%;
				margin-right: 0.13rem;
			}
			p{
				max-width: 2.68rem;
				font-size: 0.14rem;
				color: #545454;
				overflow:hidden;
			    text-overflow:ellipsis;
			    white-space:nowrap
			}
		}
	}
}
</style>