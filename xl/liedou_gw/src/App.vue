<template>
  <div id="app">
    <pc v-if="isShow"></pc>
    <move v-else></move>
  </div>
</template>

<script>
	import Pc from '@/components/pc/index'
	import Move from '@/components/move/index'
export default {
  name: 'App',
  components:{
  	Pc,
  	Move
  },
  data() {
  	return {
  		isShow: false,
  	}
  },
  beforeCreate(){
  },
  mounted(){
  	this.judge_equipment()
  },
  methods:{
  	judge_equipment () {
  		if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
			    console.log("移动")
			    this.isShow = false;
			} else {
			    this.isShow = true;
			    console.log("Pc")
			}
  	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
