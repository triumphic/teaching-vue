<template>
	<swiper class="banner" :options="swiperOption">
	    <!-- slides -->
	    <swiper-slide v-for="item in sliders" :key="item.note">
	    	<img :src="item.photo"/>
	    </swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
</template>

<script>
	export default {
	    name: 'banner',
	    props:{
	    	sliders: Array
	    },
	    data() {
	      return {
	      	swiperOption:{
	      		pagination: '.swiper-pagination'
	      	}
	      }
	    },
	    computed: {
	   
	    },
	    mounted() {
	    }
	}
</script>

<style scoped="scoped" lang="scss">
 	@import '../../assets/commit/styl.scss';
	
	.banner{
		overflow: hidden;
		height: 0;
		padding-bottom: 31.25%;
		/*background: red;*/
		img{
			width:100%;
			display: block;
		}
	}
</style>
<style lang="scss">
	.swiper-pagination{
		.swiper-pagination-bullet{
			background: red;
		}
		.swiper-pagination-bullet-active{
			background: red;
		}
	}
</style>