<template>
	<div class="container">
		我是谁，我在哪，我的天
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			
		},
		mounted () {
			let _this = this;  
//			console.log(this)
//			_this.axios.defaults.headers.common['sex'] = 2;
//	        _this.axios.get('/api/api/v2/channel/list', {
//	        	params: {
//				    ID: 12345
//				  },
//	        }).then(function (response) {  
//	              console.log(response)
//	        }).catch(function (response) {  
//	            console.log(response);  
//	        });  
	        
//	        this.$axios({
//	        	url: this.URL.BASEURL +  this.URL.list,
//	        	method: 'get',
//	        	data:{
//	        		sex:1
//	        	}
//	        }).then((res) => {
//	        	console.log(res)
//	        	
//	        })
	        
	        this.$axios({
	        	url: this.URL.BASEURL +  this.URL.userSetSex,
	        	method: 'post',
	        	data:{
	        		
	        	}
	        }).then((res) => {
	        	console.log(res)
	        	
	        })
	        
		}
	}
</script>

<style>
</style>