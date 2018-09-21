<template>
  <div id="app" v-if="isShow">
    <router-view name="content"/>
    <router-view name="footer"/>
  </div>
  <div id="app" v-else>
    <router-view name="loadPage"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
  	return {
  		isShow: false,
  		sex: 0 //0表示女，1表示男
  	}
  },
  mounted () {
  	var sex_localStorage = localStorage.getItem('sex');
  	if(!Boolean(sex_localStorage)){
    		this.isShow = false;
  	}else{
  		this.isShow = true;
  	}
  },
  switch(){
  	var sex_localStorage = localStorage.getItem('sex');
  	if(!Boolean(sex_localStorage)){
    		this.isShow = false;
  	}else{
  		this.isShow = true;
  	}
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}*/
</style>
