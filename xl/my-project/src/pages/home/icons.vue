<template>
	<div class='content'>
		<div v-for="item in icons">
			<img :src="item.img" />
			<span>{{item.name}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'icons',
		props: {
			icons: Array
		},
		methods:{
			
		},
		computed:{
			pages(){
				const pages = [];
				this.icons.forEach((value, index) => {
					const page = Math.floor(index/2);
					if(!pages[page]){
						pages[page] = []
					}
//					(!pages[page]) && (pages[page] = [])
					pages[page].push(value);
				})
//				console.log(pages)
				return pages
			}
		},
		mounted () {
			setTimeout(() => {
				console.log(this.pages)
			},3000)
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.content{
		display: flex;
		flex-wrap: wrap;
		div{
			width:50%;
			text-align: center;
			margin: 0.1rem 0;
			img{
				width: 50%;
				display: block;
				margin: auto;
				margin-bottom: 0.1rem;
			}
		}
	}
</style>