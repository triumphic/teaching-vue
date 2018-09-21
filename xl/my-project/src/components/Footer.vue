<template>
	<footer id="footer">
	    <ul>
	    	<li @click="toColor01">
	    		<router-link to="/home">
	    			<img src="../assets/tab/selected_shouye.png" v-if="tab_list[0]"/>
	    			<img src="../assets/tab/shouye.png" v-else/>
	    			<span>首页</span>
	    		</router-link>
	    	</li>
	    	<li @click="toColor02">
	    		<router-link to="/classification">
	    			<img src="../assets/tab/fenlei.png" v-if="tab_list[1]"/>
	    			<img src="../assets/tab/fenlei_hui.png" v-else/>
	    			<span>分类</span>
	    		</router-link>
	    	</li>
	    	<li @click="toColor03">
	    		<router-link to="/collection">
	    			<img src="../assets/tab/shoucang.png" v-if="tab_list[2]"/>
	    			<img src="../assets/tab/shoucang_hui.png" v-else/>
	    			<span>收藏</span>
	    		</router-link>
	    	</li>
	    	<li @click="toColor04">
	    		<router-link to="/wode">
	    			<img src="../assets/tab/selected_wode.png" v-if="tab_list[3]"/>
	    			<img src="../assets/tab/wode.png" v-else/>
	    			<span>我的</span>
	    		</router-link>
	    	</li>
	    </ul>
	</footer>
</template>

<script>
	export default{
		data(){
			return {
				tab_list:[true,false,false,false]
			}
		},
		mounted(){
//			var idx = $('.router-link-active').parent().index()
//			for (let i = 0; i<this.tab_list.length; i++){
//				this.tab_list[i]=false;
//			}
//			this.tab_list.splice(idx,1,true);
		},
		methods:{
			toColor: function (index) {
				for (let i = 0; i<this.tab_list.length; i++){
					this.tab_list[i]=false;
				}
				this.tab_list.splice(index,1,true);
			},
			toColor01: function () {
				this.toColor(0)
			},
			toColor02: function () {
				this.toColor(1)
			},
			toColor03: function () {
				this.toColor(2)
			},
			toColor04: function () {
				this.toColor(3)
			}
		}
		
	}
</script>
<style scoped="scoped" lang="scss">
	@charset "utf-8";
	.tab-on{
		display: none;
	}
	#footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		ul{
			display: flex;
			width: 100%;
			height: 0.5rem;
			justify-content: space-around;
			align-items: center;
			border-top: 0.01rem solid #D8D8D8;
			background:rgba(247,247,247,0.971);
			li{
				display: flex;
				justify-content: center;
				align-items: center;
				a{
					display:flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					img{
						width: 0.22rem;
						height: 0.22rem;
					}
					span{
						font-size: 0.1rem;
						color: #666666;
					}
					&.router-link-active span{
	  					color: #FF1E00;
	  				}
				}
			}
		}
		
	}
</style>