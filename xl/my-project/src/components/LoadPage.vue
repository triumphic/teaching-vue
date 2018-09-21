<template>
	<div id='container'>
		<div class="title">省钱达人更懂你~</div>
		<div class="xuanze">选择性别进入app</div>
		<div class="img">
			<div @click="goHomePage">
				<img  src="https://small-app.oss-cn-beijing.aliyuncs.com/youhuiquan/male.png"/>
				<span>我是帅哥</span>
			</div>
			<div @click="go_home_page">
				<img  src="https://small-app.oss-cn-beijing.aliyuncs.com/youhuiquan/female.png"/>
				<span>我是美女</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		methods: {
			goHomePage () {
				this.$router.push({path: '/home', query: {sex: 1}});
				localStorage.setItem('sex',1);
			},
			go_home_page () {
				this.$router.push({path: '/home', query: {sex: 0}});
				localStorage.setItem('sex',0);
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.title{
		background: linear-gradient(90deg, #FF4800, #FFD100, #FF00E3);
	    -webkit-background-clip: text;
	    -webkit-text-fill-color: transparent;
	    font-size: 0.2rem;
	    line-height: 0.28rem;
	    padding-top: 1.08rem;
	}
	.xuanze{
		font-size: 0.12rem;
		line-height: 0.17rem;
		color: #999999;
		margin-top: 0.15rem;
	}
	.img{
		display: flex;
		justify-content: space-around;
		margin-top: 0.77rem;
		div{
			/*display: inline-block;*/
			img{
				width: 0.8rem;
				height: 0.8rem;
				margin-bottom: 0.16rem;
			}
			span{
				font-size: 0.14rem;
				line-height: 0.22rem;
				color: #111111;
			}
		}
	}
</style>