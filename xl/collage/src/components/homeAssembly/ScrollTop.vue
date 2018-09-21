<template>
	<div class="userGundong">
		<ul>
			<li v-for="item in userList">
				<img v-lazy="item.user_pic"/>
				<p>{{item.name}}拿了{{item.goods_title}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
export default {
	name:'scrollTop',
	data () {
		return {
			userList:[],
			timeUser:null
		}
	},
	methods:{
		animationTop () {
			var n = 0;
			var _this = this;
			var arr = _this.userList.slice(0,1);
			_this.userList = _this.userList.concat(arr)
			console.log(_this.userList)
			this.timeUser = setInterval(function () {
				n ++;
				$(".userGundong ul").animate({top: -0.42*n + "rem"},800,'linear',function () {
					if(n == _this.userList.length-1){
						n = 0;
						$(".userGundong ul").css("top",'0')
					}
				});
			},2000)
		},
		//已拼团成功轮播数据
		shufflingData () {
			var _this = this;
			this.$axios({
				url: this.URL.BASEURL + this.URL.shufflingData,
				method: 'post',
				data:{
					page:1
				}
			}).then((res) => {
				if(res.data.errno == 0 && res.data.rst){
					if(res.data.rst.data.length == 1){
						_this.userList = res.data.rst.data;
						_this.userList.push(res.data.rst.data[0])
					}else{
						_this.userList = res.data.rst.data;
					}
					_this.animationTop();
				}else{
					Toast({
					  message: res.data.err,
					  duration: 3000
					});
				}
			})
		}
	
	},
	created () {
		this.shufflingData()
	},
	mounted () {
		
	},
	beforeDestroy () {
		clearInterval(this.timeUser)
	}
}
</script>

<style scoped="scoped" lang="scss">
.userGundong{
	width: 100%;
	height: 0.42rem;
	background: #FFFFFF;
	overflow: hidden;
	position: fixed;
	top: 0.8rem;
	z-index: 1;
	ul{
		position:relative;
		li{
			display: flex;
			align-items: center;
			padding: 0 0.1rem;
			height: 0.42rem;
			img{
				width: 0.25rem;
				height: 0.25rem;
				border-radius: 50%;
			}
			p{
				width: 3.17rem;
				font-size: 0.14rem;
				color: #666666;
				margin-left: 0.1rem;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
		}
	}
}
</style>