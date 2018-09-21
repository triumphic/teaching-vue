<template>
	<div class="banner">
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide" v-for="(item,index) in bannerData">
		      	<img :src="item" />
		      </div>
		    </div>
		  </div>
	</div>
</template>

<script>
	export default {
		name:'bannerDetail',
		props: {
			bannerData: Array,
		},
		data () {
			return {
				
			}
		},
		watch: {
			bannerData () {
			}
		},
		mounted() {
			this.swiper();
		},
		methods : {
			swiper () {
				var swiper = new Swiper('.swiper-container', {
			      spaceBetween: 0,
			      autoplay : 3000,
			      autoplayDisableOnInteraction: false,
			      //vue中动态添加swiper，滑动效果不起作用
			      observer:true,//启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper 
                  observeParents:true,//将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
			    });
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
    .swiper-container {
      width: 100%;
      height: 3.75rem;
      .swiper-slide{
      	img{
      		width: 100%;
      		height: 100%;
      	}
      }
    }
</style>