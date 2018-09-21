<template>
	<div>
		<index-header></index-header>
		<slider :sliders = 'bannerListData'></slider>
		<Icons :icons = 'iconsData'></Icons>
	</div>
</template>

<script>
	import IndexHeader from './header'
	import Slider from './slider'
	import Icons from './icons'
	export default {
		name:'indexHome',
		components:{
	      	IndexHeader,
	      	Slider,
	      	Icons
	    },
	    data(){
	    	return {
	    		bannerListData:[],
	    		iconsData:[]
	    	}
	    },
	   	methods:{
	   		bannerList(){
		   		this.$axios({
		   			url: this.URL.BASEURL + this.URL.bannerList,
		   			method: 'get'
		   		}).then((res) => {
		   			if(res.data.errno == 0 && res.data && res.data.rst){
		   				if(res.data.rst.data && res.data.rst.data.length != 0){
		   					this.bannerListData = res.data.rst.data;
		   				}
		   			}else{
		   				console.log(res.data.err)
		   			}
		   		})
	   		},
	   		icons(){
	   			this.$axios({
	   				url: this.URL.BASEURL + this.URL.groupNewGoldGroups,
	   				method: 'get'
	   			}).then((res) => {
	   				res = res ? res.data : null;
	   				if(res && res.errno == 0 && res.rst){
	   					if(res.rst.data.length != 0){
	   						this.iconsData = res.rst.data
	   						console.log(this.iconsData)
	   					}else{
	   						console.log("暂无数据")
	   					}
	   				}else{
	   					console.log(res.err)
	   				}
	   			})
	   		}
	   	},
	   	mounted () {
	   		var _this = this;
	   		_this.bannerList();
	   		_this.icons();
	   	}
	}
</script>

<style>
</style>