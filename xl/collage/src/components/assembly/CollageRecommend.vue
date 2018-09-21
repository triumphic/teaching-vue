<template>
	<div id="collageRecommend" v-if="pageFlag">
		<h2><i></i>0元拼团精选</h2>
		<ul>
			<li v-for="item in commodityList" @click="goDetail(item.goods_id,item.is_coupon)">
				<img v-lazy="item.goods_img"/>
				<div class="con">
					<p>{{item.goods_title}}</p>
					<div class="price">
						<div>
							<span>￥{{item.goods_price}}元</span>
							<span>{{item.over_num}}人已免费拿</span>
						</div>
						<button @click.stop="launchSpellGroup(item.goods_id)">点击0元拿</button>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import { Indicator } from 'mint-ui';
	import { Toast } from 'mint-ui';
	
	
	export default {
		name:'collageRecpmmend',
		data () {
			return {
				commodityList:[],
				commodityLoadingFlag:false,
				commodityPageNum:1,
				commodityMaxPage:1,
				pageFlag:false,
				token:'',
			}
		},
		created () {
			this.spellGroupGoodsList ();
			this.token = localStorage.getItem("token")
		},
		mounted () {
			this.pullUpLoading()
//			this.$emit('popup', 5)
		},
		methods:{
			//去详情页
			goDetail (goods_id,is_coupon) {
				this.$router.push({path:'/detail',query:{'goods_id':goods_id,'is_coupon':is_coupon,'time':(new Date()).getTime()}});
				if(this.$route.path == '/detail'){
					location.reload();
				}
			},
			//拼团商品列表
			spellGroupGoodsList () {
				var _this = this;
				this.commodityLoadingFlag = false;
				if(this.commodityMaxPage < this.commodityPageNum){
					Toast({
					  message: '没有更多了',
					  duration: 1000
					});
					return;
				}
				Indicator.open('加载中...');
				this.$axios({
	   				url: this.URL.BASEURL + this.URL.spellGroupGoodsList,
	   				method: 'post',
	   				data:{
	   					page:this.commodityPageNum
	   				}
	   			}).then((res) => {
//	   				console.log(res)
	   				Indicator.close();
	   				res = res ? res.data : null;
	   				if(res && res.errno == 0 && res.rst){
	   					_this.commodityMaxPage = res.rst.pageInfo.maxPage;
	   					if(res.rst.data.length > 0){//接口返回有数据
	   						if(_this.commodityList.length != 0 ){
	   							//已经不是第一页数据了
	   							_this.commodityList = _this.commodityList.concat(res.rst.data);
	   						}else{
	   							//第一页数据
	   							_this.commodityList = res.rst.data;
	   						}
	   						_this.commodityLoadingFlag = true;
	   						_this.pageFlag = true;
	   					}else{
	   						//暂无更多数据
	   					}
	   				}else{
	   					Toast({
						  message: res.err,
						  duration: 1500
						});
	   				}
	   			})
		    },
		    pullUpLoading () {
		    	//上拉加载更多
		    	var _this = this;
		    	$(window).scroll(function(){
					if($(window).scrollTop()>= $(document).height()-$(window).height() - 60){
						//到达底部加载数据
						if(this.tabNum == 0) {
							//拼团商品列表
							if(_this.commodityLoadingFlag){
								_this.commodityPageNum ++ ;
								_this.spellGroupGoodsList();
							}
						}else if(this.tabNum == 1){
							//我的拼团商品列表
							if(_this.myCommodityLoadingFlag){
								_this.myCommodityPageNum ++ ;
								_this.spellGroupGoodsList();
							}
						}
					}
				});
		    },
		    launchSpellGroup (id) {
		    	//发起拼团接口
		    	var _this = this;
		    	this.$axios({
		    		url: this.URL.BASEURL + this.URL.launchSpellGroup,
		    		method:'post',
		    		headers:{
		    			token:this.token
		    		},
		    		data:{
		    			'goods_id':id
		    		}
		    	}).then((res) => {
		    		res = res ? res.data : null;
		    		if(res && res.errno == 0){
						_this.$router.push({path:'/invitingRegiment',query:{goods_id:res.rst.goods_id,group_id:res.rst.group_id,time:(new Date()).getTime()}});
						if(this.$route.path == '/invitingRegiment'){
							location.reload();
						}
					}else if(res.errno == 2008){//9001 该商品正在拼团   2008 用户不存在  9002 商品不存在
		    			_this.$emit('popup', 5)
		    		}else {
		    			Toast({
						  message: res.rst.msg,
						  duration: 1500
						});
		    		}
		    	})
		    }
		}
	}
</script>

<style scoped="scoped" lang="scss">
	#collageRecommend{
		width: 3.45rem;
		background: #FFFFFF;
		border-radius: 0.12rem;
		margin: auto;
		margin-top: 0.115rem;
		h2{
			color:#42210B;
			font-size: 0.17rem;
			vertical-align: middle;
			text-align: center;
			padding-top: 0.055rem;
			i{
				width: 0.175rem;
				height: 0.185rem;
				display: inline-block;
				background: url(../../assets/img/collage.png) no-repeat;
				background-size:100% ;
				vertical-align: bottom;
				margin-right: 0.045rem;
			}
		}
		ul{
			li{
				width: 3.25rem;
				margin: auto;
				display:flex;
				align-items: center;
				margin-top: 0.13rem;
				padding-bottom: 0.165rem;
				border-bottom: 0.005rem solid #9C9C9C;
				&:last-of-type{
					border-bottom: none;
				}
				img{
					border-radius: 0.1rem;
					width: 1rem;
					height: 1rem;
				}
				.con{
					margin-left: 0.1rem;
					width: 2.15rem;
					p{
						font-size: 0.14rem;
						line-height: 0.2rem;
						color: #545454;
						overflow:hidden; 
						text-overflow:ellipsis;
						display:-webkit-box; 
						/*! autoprefixer: off */
						 -webkit-box-orient: vertical;
						/* autoprefixer: on */
						-webkit-line-clamp:2; 
					}
					.price{
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						margin-top: 0.2rem;
						div{
							span{
								display: block;
								&:nth-of-type(1){
									color: #9C9C9C;
									font-size: 0.13rem;
								}
								&:nth-of-type(2){
									color: #FF2E2E;
									font-size: 0.14rem;
									margin-top: 0.1rem;
								}
							}
						}
						button{
							background:#FF2E2E;
							width: 0.76rem;
							height: 0.27rem;
							color: #FFFFFF;
							border-radius: 0.05rem;
							font-size: 0.14rem;
							border: none;
						}
					}
				}
			}
		}
	}
</style>